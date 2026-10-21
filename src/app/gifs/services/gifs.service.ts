import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private _tagsHistory = signal<string[]>([]);

    public tagsHistory = this._tagsHistory.asReadonly();

    private organizeHistory(tag: string): void {
        tag = tag.toLowerCase();

        this._tagsHistory.update(history => {
            const filteredHistory = history.filter(
                oldTag => oldTag !== tag
            );
            return [tag, ...filteredHistory].splice(0,10);
        });
    }

    public searchTag(tag: string): void {
        if (!tag.trim()) return;

        this.organizeHistory(tag.trim());
    }
}
