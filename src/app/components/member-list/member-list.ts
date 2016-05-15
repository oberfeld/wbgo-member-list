import {Component} from '@angular/core';
import {MemberService} from '../../services/members';
import {Observable} from 'rxjs/Observable';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'member-list',
  templateUrl: 'app/components/member-list/member-list.html',
  styleUrls: ['app/components/member-list/member-list.css'],
  providers: [ MemberService ],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class MemberList {
  members: Observable<any>;
  
  constructor(
      public memberService: MemberService,
      public params: RouteParams) {}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }
}
