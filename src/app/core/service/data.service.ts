import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {

  private _urlHost: string = environment.api.host;
  private _urlSuffix: string = environment.api.suffix;

  constructor(private _http: HttpClient) { }

  getData<T>(path: string): Observable<T> {
    return this._http.get<T>(this.getFullPath(path))
      .catch(this.handleError);
  }

  postData<T>(path: string, body: any): Observable<T> {
    return this._http.post<T>(this.getFullPath(path), body)
      .catch(this.handleError);
  }

  putData<T>(path: string, body: any): Observable<T> {
    return this._http.put<T>(this.getFullPath(path), body)
      .catch(this.handleError);
  }

  deleteData<T>(path: string): Observable<T> {
    return this._http.delete<T>(this.getFullPath(path))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }

  private getFullPath(path: string): string {
    return this._urlHost + path + this._urlSuffix;
  }

}
