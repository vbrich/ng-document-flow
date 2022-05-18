import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocuSignService } from './docusign.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

@Component({
  selector: 'app-closing-ceremony3',
  templateUrl: './closing-ceremony3.component.html',
  styleUrls: ['./closing-ceremony3.component.css']
})
export class ClosingCeremony3Component implements OnInit {
  dataFromServer: Observable<any>;

  // public htmlContent: string = `<h1>Lorem ipsum dolor sit amet.</h1>`;
  // public pictureUrl: string = `https://angular.io/assets/images/logos/angular/angular.svg`;
  // public catVideoEmbed: string = `https://www.youtube.com/embed/QH2-TGUlwu4"`;
  // https://docusign-service.ribo916.repl.co/getlink 

  signinglink = "https://www.wikipedia.org/";

  constructor(private load: DocuSignService) {}

  ngOnInit() { this.getDataServer(); } 

  getDataServer() {
    console.log('getDataServer() was hit...');
    let obj = this.load.LoadData();
    obj.subscribe(data => {this.dataFromServer = data;})    
    console.log('getDataServer() response...' + obj);
  };  
}