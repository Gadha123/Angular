import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.scss']
})
export class HomecomponentComponent implements OnInit {
userName:string = 'gadha'
arr = ['apple','mango','grape']  
constructor() { }

  ngOnInit() {
    this.userName='annu'
  }

}
