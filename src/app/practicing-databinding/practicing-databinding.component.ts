import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding',
  templateUrl: './practicing-databinding.component.html',
  styleUrls: ['./practicing-databinding.component.css']
})
export class PracticingDatabindingComponent implements OnInit {

  ngOnInit(): void {
  }

  username:string;
  constructor() {
    this.username=null;
   }

   onReset()
   {
     this.username=null;
   }
}
