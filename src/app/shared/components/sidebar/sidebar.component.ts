import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  standalone: false,
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class SidebarComponent {

  private selectedTag:string = '';
  constructor(private gifsService: GifsService){}

  get tagHistory(): string[]{
    return this.gifsService.tagsHistory();
  }

  searchFromButton(tag:string): void {
    this.selectedTag = tag;
    this.gifsService.searchTag(tag);
  }
}
