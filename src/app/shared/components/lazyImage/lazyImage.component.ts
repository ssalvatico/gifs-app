import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-lazy-image',
  standalone: false,
  templateUrl: './lazyImage.component.html',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!:string;

  @Input()
  public alt:string = ''

  protected hasLoaded:boolean = false;




  ngOnInit(): void {
    if(!this.url) throw new Error("Url not provided");
  }

  onLoad(){
    console.log('image loaded');
    this.hasLoaded = true;
  }
}
