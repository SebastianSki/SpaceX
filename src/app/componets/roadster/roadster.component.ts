import { Component, OnInit } from '@angular/core';
import {SpacexapiService} from "../../services/spacexapi.service";

@Component({
  selector: 'app-roadster',
  templateUrl: './roadster.component.html',
  styleUrls: ['./roadster.component.scss']
})
export class RoadsterComponent implements OnInit {
  public roadster:any;

  constructor(public spacexapi:SpacexapiService) {
    this.spacexapi.getRoadster().subscribe((data:any) => {
      this.roadster = data;
    })
  }

  ngOnInit(): void {
  }
}
