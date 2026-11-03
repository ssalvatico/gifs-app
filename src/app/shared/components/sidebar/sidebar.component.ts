import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  standalone: false,
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){}

  get tagHistory(): string[]{
    return this.gifsService.tagsHistory();
  }

  get selectedTag(): string{
    return this.gifsService.currentTag();
  }

  searchFromButton(tag:string): void {
    this.gifsService.searchTag(tag);
  }
}
