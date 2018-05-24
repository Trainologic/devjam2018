import {Component, NgZone, OnInit} from '@angular/core';

declare let L;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngZone: NgZone;
    title = 'My Title';

    constructor(private zone: NgZone) {
        this.ngZone = zone;
    }

    ngOnInit() {
        const mymap = L.map('mapid').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1Ijoib3JpY2Fsdm8iLCJhIjoiY2pjcW1uYjBhMTlzeDJxb2N3MnVyODFzYyJ9.4ahuQoPywGav2vRZzkGlIQ'
        }).addTo(mymap);

        }
}
