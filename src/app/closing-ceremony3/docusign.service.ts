import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
  export class DocuSignService {

    //https://docusign-service.ribo916.repl.co/getlink
    //https://jsonplaceholder.typicode.com/users

    constructor(private http: HttpClient) { }

    LoadData(): Observable<any> {
      return this.http.get('https://docusign-service.ribo916.repl.co/getlink')
        .map(this.extractData)
    }

    private extractData(res: Response) {
      let body = res;
      return body;
    }

  }