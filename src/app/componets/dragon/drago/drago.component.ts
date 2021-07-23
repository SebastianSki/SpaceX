import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SpacexapiService} from "../../../services/spacexapi.service";

@Component({
  selector: 'app-drago',
  templateUrl: './drago.component.html',
  styleUrls: ['./drago.component.scss']
})
export class DragoComponent implements OnInit {
  public drago: any;

  constructor(public router: ActivatedRoute, public spacexapi: SpacexapiService) {
  }

  ngOnInit(): void {
    this.spacexapi.getDrago(this.router.snapshot.paramMap.get('id')).subscribe((data: any) => {
      this.drago = data;
    });
  }
}
