import { Injectable, signal } from '@angular/core';

//! Provided in root hace que este servicio esté
//! disponible en todos los componentes/módulos
@Injectable({providedIn: 'root'})
export class GifsService {
    
    private _tagsHistory = signal<string[]>([]);

    constructor() { }

    public searchTag( tag:string ): void{
        if(!tag) return;
        this._tagsHistory.update( history => [tag, ...history] );
    }

    get tagsHistory(){
        //* se usa el spread para evitar la referencia
        return this._tagsHistory;
    }
   
}