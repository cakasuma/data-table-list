import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  datas: any[];
  dataTable: any;

  constructor(private http: HttpClient, private chRef: ChangeDetectorRef){}

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'max-age=0',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      })
    };

    this.http.get('https://netasses.azurewebsites.net/api/asset?from=1&to=100', httpOptions)
      .subscribe((data: any[]) => {
        this.datas = data;

        this.chRef.detectChanges();

        const table: any = $('table');
        this.dataTable = table.DataTable();
      });
  }
}
