import { Component, OnInit } from '@angular/core';
import {SpacexapiService} from "../../services/spacexapi.service";

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss']
})
export class DragonComponent implements OnInit {

  public dragons:any;

  constructor(public spacexapi:SpacexapiService) {
    this.spacexapi.getDragons().subscribe((data:any) =>{
        this.dragons = data;
    });
  }

  ngOnInit(): void {
  }

}
