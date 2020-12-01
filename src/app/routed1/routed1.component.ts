import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routed1',
  template: `
    <p>
      routed1 works 
      
    </p>
    <h4 *ngIf="id"> router parameter is {{ id }}</h4>

    <h4 *ngIf="shouldShow">should show children based on queryParams</h4>
  `,
  styles: [
  ]
})
export class Routed1Component implements OnInit {
  id;
  shouldShow;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {  
    this.activeRoute.params.subscribe(data => {
      this.id = data['id']
    })

    this.activeRoute.queryParams.subscribe(data => {
      this.shouldShow = data['showChild'] === 'true'
    })
    

  }

}
