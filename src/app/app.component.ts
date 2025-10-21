import { Component, OnInit } from '@angular/core';
import { BolosService } from './bolos.service';
import { Bolo } from './bolo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BolosDoCacau';
  bolos:Bolo[]=[]

  constructor(private bolosService:BolosService){

  }
  ngOnInit(): void {
    this.bolosService.GetBolos().subscribe((data)=>{
      this.bolos=data
      console.log(this.bolos)
    })
  }

}
