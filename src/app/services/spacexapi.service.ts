import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  BASE_URL:string = "https://api.spacexdata.com/v4";
  public isLarge:boolean = false;
  public imagesrc:any;
  public scrolltop:any;
  constructor(public http:HttpClient) {

  }
  getCapsules(){
    return this.http.get(this.BASE_URL + '/capsules');
  }

  getCapsule(id: string | null){
    return this.http.get(this.BASE_URL + '/capsules/' + id);
  }

  getRoadster(){
    return this.http.get(this.BASE_URL + '/roadster');
  }
  getDragons(){
  return this.http.get(this.BASE_URL + '/dragons');
  }
  getDrago(id:string | null){
    return this.http.get(this.BASE_URL + '/dragons/' + id);
  }

  getFullImg(image: any) {
    this.scrolltop = window.pageYOffset;
    this.isLarge = true;
    this.imagesrc = image;
    if(this.scrolltop > 0 ){
      window.scrollTo(0, this.scrolltop - this.scrolltop);
    }
  }

}
