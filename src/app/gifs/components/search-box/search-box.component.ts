import { Component } from '@angular/core';

@Component({
    selector: 'app-gifs-search-box',
    standalone: false,
    template: `
    <div class="d-flex align-items-center">
        <button class="btn btn-primary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
                stroke-width="2"
            >
                <circle cx="12" cy="12" r="7"></circle>
                <path d="m16 16 7 7"></path>
            </svg>
        </button>

        <input
        type="text"
        class="form-control"
        placeholder="Buscar gifs..."
        >
    </div>
    `,
})
export class SearchBoxComponent  {}