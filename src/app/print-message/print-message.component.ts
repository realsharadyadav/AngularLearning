import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-message',
  templateUrl: './print-message.component.html',
  styleUrls: ['./print-message.component.css']
})
export class PrintMessageComponent implements OnInit {
  today:Date;
  constructor() {
    this.today=new Date(); 
   }

    ngOnInit(): void {
  }

}
