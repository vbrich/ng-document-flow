import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

export interface Document {
  id: number;
  name: string;
  desc: string;
}

const DOCUMENT1: Document[] = [
  {id: 1, name: 'Federal Truth in Lending', desc: '4 Signatures 12 Pages'}
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

  //DIALOG - yes, just ghetto hacking this thing
  @ViewChild('dialogRef1')
  dialogRef1!: TemplateRef<any>;
  @ViewChild('dialogRef2')
  dialogRef2!: TemplateRef<any>;
  @ViewChild('dialogRef3')
  dialogRef3!: TemplateRef<any>;
  @ViewChild('dialogRef99')
  dialogRef99!: TemplateRef<any>;

  @ViewChild('docDialogRef1')
  docDialogRef1!: TemplateRef<any>;

  openOverviewDialog(num) {    
    if (num == 1) { const myOverviewDialog = this.dialog.open(this.dialogRef1, {}); } 
    else if (num == 2) {const myOverviewDialog = this.dialog.open(this.dialogRef2, {});}
    else if (num == 3) {const myOverviewDialog = this.dialog.open(this.dialogRef3, {});}
    else { const myOverviewDialog = this.dialog.open(this.dialogRef99, {}); }    
  }

  // TEMP: Opening dialog fullscreen to preview HTML
  openDocDialog(num) {
    const dialogRef = this.dialog.open(DialogContentDocument1, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    }); 
    //const dialogRef = this.dialog.open(DialogContentExampleDialog); 
  }

  //TEMP: Open html files as new tabs. Yuck
  openDoc(num) {    
    console.log('openDoc() was hit with num = ' + num);
    if (num == 1) { window.open('/assets/html/creditscoresummary.html', '_blank') } 
    else if (num == 2) { window.open('/assets/html/creditscoresummary.html', '_blank') }
    else if (num == 3) { window.open('/assets/html/odometer.html', '_blank') }
    else { 
      console.log('invalid number passed into openDoc()');
    }    
  }

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

@Component({
  selector: 'dialog-content-document-1',
  templateUrl: 'dialog-content-document-1.html',
})
export class DialogContentDocument1 {}