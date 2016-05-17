import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {MemberList} from './components/member-list/member-list';

@Component({
  selector: 'member-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/member-app.html',
})
@RouteConfig([
  { path: '/list',      
    component: MemberList,       
    name: 'List', 
    useAsDefault: true  }
])

export class AppRoot {
  constructor() {}
}
