import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'app-gifs-search-box',
    standalone: false,
    template: `
    <h5>Búsqueda: </h5>

    <input
    type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #searchTagInput
    >
    `,
})
export class SearchBoxComponent {

    @ViewChild('searchTagInput')
    public searchTagInput!:ElementRef<HTMLInputElement>;
    
    constructor(private gifsService: GifsService){}

    searchTag(): void {
        const newTagInput = this.searchTagInput.nativeElement.value;
        this.gifsService.searchTag(newTagInput);        
        this.searchTagInput.nativeElement.value = '';
    }

    // searchTag(newTag:string):void {
    //     console.log(newTag);
    // }
}