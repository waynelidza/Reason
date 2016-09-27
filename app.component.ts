import {Component, NgModule} from '@angular/core';
import {Http, HTTP_PROVIDERS} from "@angular/http";
'@angular/http'; import 'rxjs/add/operator/map';
import {bootstrap} from "@angular/platform-browser-dynamic";
import {SearchService} from "./shared/country.service";

import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, provideForms, disableDeprecatedForms} from "@angular/forms";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService],
})

export class AppComponent {
  title = 'app works!';
   Names:string;
  Region:string;
  citys: string;
  public countries;
  constructor(private countryService: SearchService) {}
  Search(formValue){
    this.countryService.  getcountry(formValue.city)
      .subscribe(
        data => {this.Names= data.name;
          this.Region=`$` + data.region;},
        err => console.log("Can't get  details. Error code: %s, URL: %s "+formValue,
          err.status, err.url),
        () => console.log('Done'+formValue)

      );
  }
}
bootstrap(AppComponent, [HTTP_PROVIDERS,]);
bootstrap(AppComponent, [
  disableDeprecatedForms(), provideForms()
]);
