import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent {
  constructor(private gifsService: GifsService) {}

  public get results(): Gif[] {
    return this.gifsService.resultsFromApi;
  }
}
