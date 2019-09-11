import { Component } from '@angular/core';

import { marathons } from '../marathons';

@Component({
  selector: 'app-marathon-list',
  templateUrl: './marathon-list.component.html',
  styleUrls: ['./marathon-list.component.css']
})
export class MarathonListComponent {
  marathons = marathons;

  share() {
    window.alert('The product has been shared!');
  }
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/