import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'moment';
  dateTime = null;

  listOfDateTime = [
    {
      'format': 'yyyy-MM-dd\'T\'HH:mm:ss*SSSZZZZ',
      'expInJava': '2108-08-20\'T\'13:20:10*633+0000',
      'valInJava': '2108-08-20\'T\'13:20:10*633+0000',
      'expInJs': '2108-08-20\'T\'13:20:10*633+0000',
      'valInJs': '2108-08-20\'T\'13:20:10*633+0000'
    },
    {
      'format': 'yyyy-MM-dd',
      'expInJava': 'yyyy-MM-dd',
      'valInJava': '2108-08-20',
      'expInJs': 'YYYY-MM-DD',
      'valInJs': ''
    },
    {
      'format': 'yyyy-MM-dd HH:mm:ss',
      'expInJava': 'yyyy-MM-dd HH:mm:ss',
      'valInJava': '2108-08-20 18:30:45',
      'expInJs': 'YYYY-MM-DD HH:mm:ss',
      'valInJs': ''
    },
    {
      'format': 'yyyy-MM-dd HH:mm:ss ZZZZ',
      'expInJava': 'yyyy-MM-dd HH:mm:ss ZZZZ',
      'valInJava': '2108-08-20 18:30:45 0000',
      'expInJs': 'YYYY-MM-DD HH:mm:ss Z',
      'valInJs': ''
    },
    {
      'format': 'yyyy-MM-dd HH:mm:ss ZZZZ',
      'expInJava': 'yyyy-MM-dd HH:mm:ss ZZZZ',
      'valInJava': '2108-08-20 18:30:45 -0430',
      'expInJs': 'YYYY-MM-DD HH:mm:ss ZZ',
      'valInJs': ''
    },
    {
      'format': 'yyyy-MM-dd HH:mm:ss ZZZZ',
      'expInJava': 'yyyy-MM-dd HH:mm:ss ZZZZ',
      'valInJava': '2108-08-20 18:30:45 -04:30',
      'expInJs': 'YYYY-MM-DD HH:mm:ss Z',
      'valInJs': ''
    },
    {
      'format': 'yyyy-MM-ddTHH:mm:ss.SSSZZZZ',
      'expInJava': 'yyyy-MM-dd HH:mm:ss.SSSZZZZ',
      'valInJava': '2108-08-20T18:30:45.774+01:30',
      'expInJs': 'YYYY-MM-DD HH:mm:ss',
      'valInJs': ''
    }
  ]

  ngOnInit() {
    this.dateTime = moment();
    this.listOfDateTime = this.listOfDateTime.map((item: any) => {
      const valInJs = moment(item.valInJava, item.expInJs).format(item.expInJs);
      return {...item, valInJs};
    });
  }
}
