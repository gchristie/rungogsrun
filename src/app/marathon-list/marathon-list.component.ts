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

    howmany(racetype) 
  {
          var i;
          var ihalfmarathons = 0;
          for (i = 0; i < racedata.length; i++) 
          {
             if (racedata[i].racetype.toString() == racetype)
             {
               ihalfmarathons += racedata[i].count;     
             }         
          }
        window.alert(ihalfmarathons + " " + racetype + " Races");
  }


    ShowTab(racetype) 
  {
    document.getElementById('UltraMarathons').hidden = true;
    document.getElementById('Marathons').hidden = true;
    document.getElementById('VirtualMarathons').hidden = true;
    document.getElementById('HalfMarathons').hidden = true;
    document.getElementById('UpcomingRaces').hidden = true;
    if (racetype == 'Upcoming Race')
    { document.getElementById('UpcomingRaces').hidden = false; } 
    else if (racetype == 'Ultra Marathon') 
    { document.getElementById('UltraMarathons').hidden = false; }
    else if (racetype == 'Marathon') 
    { document.getElementById('Marathons').hidden = false; } 
    else if (racetype == 'Virtual Marathon')    
    { document.getElementById('VirtualMarathons').hidden = false; } 
    else if (racetype == 'Half Marathon')
    { document.getElementById('HalfMarathons').hidden = false; } 

  }
  
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/