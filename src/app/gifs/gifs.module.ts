import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';

@NgModule({
  declarations: [SearchComponent, ResultsComponent, GifsPageComponent],
  exports: [GifsPageComponent],
  imports: [CommonModule],
})
export class GifsModule {}
