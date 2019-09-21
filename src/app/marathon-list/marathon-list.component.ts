import { Component } from '@angular/core';

import { racedata } from '../racedata';

@Component({
  selector: 'app-marathon-list',
  templateUrl: './marathon-list.component.html',
  styleUrls: ['./marathon-list.component.css']
})
export class MarathonListComponent {
  racedata = racedata;

  share() {
    window.alert('The product has been shared!');
  }

  howmanymarathons() 
  {
          var i;
          var imarathons = 0;
          for (i = 0; i < racedata.length; i++) 
          {
             if (racedata[i].racetype.toString() == 'Marathon')
             {
               imarathons += racedata[i].count;
               racedata[i].racetype = 'Half Marathon';
             }
         
          }
           window.alert(imarathons + ' Marathons');
  
 }

  howmanyhalfmarathons() 
  {
          var i;
          var ihalfmarathons = 0;
          for (i = 0; i < racedata.length; i++) 
          {
             if (racedata[i].racetype.toString() == 'Half Marathon')
             {
               ihalfmarathons += racedata[i].count;     
             }         
          }
    window.alert(ihalfmarathons + ' Half Marathons');
  }


}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/