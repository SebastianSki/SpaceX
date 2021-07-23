import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SpacexapiService} from "../../../services/spacexapi.service";

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss']
})
export class CapsuleComponent implements OnInit {
  public capsule:any;
  constructor(public router:ActivatedRoute, public spacexapi:SpacexapiService) { }

  ngOnInit(): void {
    this.spacexapi.getCapsule(this.router.snapshot.paramMap.get('id')).subscribe((data:any) => {
      this.capsule = data;
    });
  }

}
