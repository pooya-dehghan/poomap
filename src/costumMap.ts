import {User} from './User'
import {Company} from './Company'

export class CustomMap {
  private googleMap : google.maps.Map;

  constructor(ElementId : string) {
    this.googleMap = 
        new google.maps.Map(document.getElementById(ElementId),{
        zoom : 1,
        center: {
        lat:0,
        lng:0
      }
    })
  }
  getUserMarker(user:User):void {
    let marker = new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat: user.location.lat,
        lng : user.location.lng
      }
    })
  }
  getCompanyMarker(company:Company):void{
    let marker = new google.maps.Marker({
      map : this.googleMap,
      position : { 
        lat:company.location.lat,
        lng:company.location.lng
      }
    })
  }
}