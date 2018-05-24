import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

const IL_DETAILS = makeStateKey('ilDetails');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  il: any;

  constructor(
    private http: HttpClient,
    private state: TransferState,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    // this.il = this.state.get(IL_DETAILS, null as any);
    this.il;
    if (!this.il) {
      this.http
        .get('https://restcountries.eu/rest/v2/alpha/il')
        .subscribe(data => {
          this.il = data;
          this.state.set(IL_DETAILS, data as any);
        });
    }

    this.titleService.setTitle('My server side rendered title!');
    this.metaService.addTag({name: 'description', content: 'My server side rendered description'});
  }
}
