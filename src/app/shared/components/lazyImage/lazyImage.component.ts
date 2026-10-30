import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-lazy-image',
  standalone: false,
  template: `<p>lazyImage works!</p>`,
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!:string;

  @Input()
  public alt:string = ''






  ngOnInit(): void {
    if(!this.url) throw new Error("Url not provided");

    console.log(this.url, this.alt)
    
  }
}
