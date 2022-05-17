import { Component, OnInit } from '@angular/core';

export interface Document {
  id: number;
  name: string;
  desc: string;
}

const DOCUMENT_DATA: Document[] = [
  {id: 1, name: 'Federal Truth in Lending Disclosure', desc: '4 Signatures 12 Pages'}
];

@Component({
  selector: 'app-closing-ceremony2',
  templateUrl: './closing-ceremony2.component.html',
  styleUrls: ['./closing-ceremony2.component.css']
})
export class ClosingCeremony2Component implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource = DOCUMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}