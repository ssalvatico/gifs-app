import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private _tagsHistory = signal<string[]>([]);
    public tagsHistory = this._tagsHistory.asReadonly();
    private _gifList = signal<Gif[]>([]);
    public gifList = this._gifList.asReadonly();
    private _currentTag = signal<string>('');
    public currentTag = this._currentTag.asReadonly();


    constructor( private http:HttpClient ){
        this.loadLocalStorage();
        if(this._tagsHistory().length)
            this.searchTag(this._tagsHistory()[0]);
    }

    private organizeHistory(tag: string): void {
        tag = tag.toLowerCase();

        this._tagsHistory.update(history => {
            const filteredHistory = history.filter(
                oldTag => oldTag !== tag
            );
            return [tag, ...filteredHistory].splice(0,10);
        });
        this.saveLocalStorage();
    }

    saveLocalStorage(): void{
        localStorage.setItem('history', JSON.stringify(this._tagsHistory()));
    }

    loadLocalStorage(): void{
        const data = localStorage.getItem('history');
        if(!data) return;
        this._tagsHistory.set(JSON.parse(data!));
    }

    public searchTag(tag: string): void {
        if (!tag.trim()) return;
        this.organizeHistory(tag.trim());
        this._currentTag.set(tag.trim().toLowerCase());


        const params = new HttpParams()
            .set('api_key', environment.GIPHY_API_KEY)
            .set('q', tag)
            .set('limit', 10)

        // esto es un observable, puede emitir distintos valores a lo largo del tiempo
        // en este caso solo va a emitir un valor, la respuesta que buscamos
        // en cualquier caso, debemos subscribirnos a la respuesta
        this.http.get<SearchResponse>(`${environment.GIPHY_API_URL}/search`, {params})
            .subscribe(resp => {
                this._gifList.set(resp.data);
            });


        // esto es una promesa, requiere async + await
        // fetch(`${this.URL}&q=${tag}&limit=10`)
        //     .then( resp => resp.json() )
        //     .then( data => console.log(data) );
    }
}
