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
    //document.getElementById('5K').hidden = true;
    //document.getElementById('4Mile').hidden = true;   
    //document.getElementById('10K').hidden = true;
    //document.getElementById('25K').hidden = true;
    //document.getElementById('30K').hidden = true;
    document.getElementById('Run').hidden = true;
    document.getElementById('Triathlon').hidden = true;


    if (racetype == 'UltraMarathon') 
    { document.getElementById('Ultra Marathon').hidden = false; }
     if (racetype == 'Marathon') 
    { document.getElementById('Marathon').hidden = false; } 
     if (racetype == 'VirtualMarathon')    
    { document.getElementById('VirtualMarathon').hidden = false; } 
     if (racetype == 'HalfMarathon')
    { document.getElementById('HalfMarathon').hidden = false; } 
     if (racetype == 'UpcomingRace')
    { document.getElementById('UpcomingRace').hidden = false; } 
   // else if (racetype == '5K')
   // { document.getElementById('5K').hidden = false; } 
   // else if (racetype == '4Mile')
  //  { document.getElementById('4Mile').hidden = false; } 
  //  else if (racetype == '10K')
  //  { document.getElementById('10K').hidden = false; } 
   // else if (racetype == '25K')
   // { document.getElementById('25K').hidden = false; } 
  //  else if (racetype == '30K')
   // { document.getElementById('30K').hidden = false; } 
     if (racetype == 'Run')
    { document.getElementById('Run').hidden = false; } 
     if (racetype == 'Triathlon')
    { document.getElementById('Triathlon').hidden = false; } 
    if (racetype == 'UpcomingRace')
    { document.getElementById('UpcomingRace').hidden = false; } 
    else
    {
      document.getElementById('UltraMarathon').hidden = false;
      document.getElementById('Marathon').hidden = false;
      document.getElementById('VirtualMarathon').hidden = false;
      document.getElementById('HalfMarathon').hidden = false;
      //ocument.getElementById('5K').hidden = false;
      //document.getElementById('4Mile').hidden = false;   
      //document.getElementById('10K').hidden = false;
      //document.getElementById('25K').hidden = false;
      //document.getElementById('30K').hidden = false;      
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