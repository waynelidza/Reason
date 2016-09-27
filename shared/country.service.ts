import { Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";


@Injectable()
export class SearchService{
  constructor(private http: Http){}
  getcountry(city: string): Observable<any>{
    return this.http.get(`http://restcountries.eu/rest/v1/capital/${city}`)
      .map(res => res.json());
  }
}
