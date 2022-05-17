import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

export interface Document {
  id: number;
  name: string;
  desc: string;
}

const DOCUMENT1: Document[] = [
  {id: 1, name: 'Federal Truth in Lending Disclosure', desc: '4 Signatures 12 Pages'}
];
const DOCUMENT2: Document[] = [
  {id: 2, name: 'Credit Score Summary', desc: '0 Signatures 1 Page'}
];
const DOCUMENT3: Document[] = [
  {id: 3, name: 'Odometer Statement', desc: '0 Signatures 1 Page'}
];

@Component({
  selector: 'app-closing-ceremony2',
  templateUrl: './closing-ceremony2.component.html',
  styleUrls: ['./closing-ceremony2.component.css']
})
export class ClosingCeremony2Component implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  document1 = DOCUMENT1;
  document2 = DOCUMENT2;
  document3 = DOCUMENT3;

  //DIALOG
  title = 'angular-material-dialog-app';
  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;
  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do']

  constructor(public dialog: MatDialog) {
  }

  openTempDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef, { data: this.myFooList });
    myTempDialog.afterClosed().subscribe((res) => {
      // Data back from dialog
      console.log({ res });
    });
  }

  ngOnInit() {
  }

}