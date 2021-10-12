import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'kZZBm2wGi9iExguMGpMH9z0Iv5t00ldd';
  public serviceURL: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];
  public resultsFromApi: Gif[] = [];

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.resultsFromApi = JSON.parse(localStorage.getItem('results')!) || [];
  }

  public insertGifs(query: string): void {
    if (query.trim() === '') {
      return;
    }

    this._history.unshift(query.toLowerCase());
    localStorage.setItem('history', JSON.stringify(this._history));
    localStorage.setItem('results', JSON.stringify(this.resultsFromApi));

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10');

    this.http
      .get<SearchGifsResponse>(`${this.serviceURL}/search`, { params: params })
      .subscribe((resp) => {
        this.resultsFromApi = resp.data;
        console.log(resp.data);
      });
  }

  public get history(): string[] {
    return [...this._history];
  }
}
