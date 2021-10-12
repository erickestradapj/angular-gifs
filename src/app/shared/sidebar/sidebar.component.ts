import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  public get history(): Set<string> {
    return new Set(this.gifsService.history.splice(0, 10));
  }

  public search(item: string) {
    this.gifsService.insertGifs(item);
  }
}
