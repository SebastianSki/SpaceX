import { Component, OnInit } from '@angular/core';
import {SpacexapiService} from "../../services/spacexapi.service";

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit {

  public capsules:any;

  constructor(public spacexapi:SpacexapiService) {
    this.spacexapi.getCapsules().subscribe((data:any) => {
      this.capsules = data;
    });
  }

  ngOnInit(): void {

  }
}
