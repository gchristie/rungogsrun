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
          var iCount = 0;
          for (i = 0; i < racedata.length; i++) 
          {
             if (racedata[i].racetype.toString() == racetype)
             {
              iCount += racedata[i].count;     
             }         
          }
        window.alert(iCount + " " + racetype + " Races");
  }


  ShowTab(racetype) 
  {
    document.getElementById('UltraMarathon').hidden = true;
    document.getElementById('Marathon').hidden = true;
    document.getElementById('VirtualMarathon').hidden = true;
    document.getElementById('HalfMarathon').hidden = true;
    document.getElementById('UpcomingRace').hidden = true;
    document.getElementById('Run').hidden = true;
    document.getElementById('Triathlon').hidden = true;


    if (racetype == 'Ultra Marathon') 
    { document.getElementById('UltraMarathon').hidden = false; }
    else if (racetype == 'Marathon') 
    { document.getElementById('Marathon').hidden = false; } 
    else if (racetype == 'Virtual Marathon')    
    { document.getElementById('VirtualMarathon').hidden = false; } 
    else if (racetype == 'Half Marathon')
    { document.getElementById('HalfMarathon').hidden = false; } 
    else if (racetype == 'UpcomingRace')
    { document.getElementById('Upcoming Race').hidden = false; } 
    else if (racetype == 'Run')
    { document.getElementById('Run').hidden = false; } 
    else if (racetype == 'Triathlon')
    { document.getElementById('Triathlon').hidden = false; } 
    else if (racetype == 'Upcoming Race')
    { document.getElementById('UpcomingRace').hidden = false; } 
    else
    {
      document.getElementById('UltraMarathon').hidden = false;
      document.getElementById('Marathon').hidden = false;
      document.getElementById('VirtualMarathon').hidden = false;
      document.getElementById('HalfMarathon').hidden = false;
      document.getElementById('Run').hidden = false;
      document.getElementById('Triathlon').hidden = false;    
      document.getElementById('UpcomingRace').hidden = false;  
    }
  }
  
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/