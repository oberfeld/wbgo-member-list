import {Component} from '@angular/core';
import {MemberService, Member} from '../../services/members';
import {Observable} from 'rxjs/Observable';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {MemberForm} from "../member-form/member-form";

@Component({
  selector: 'member-list',
  templateUrl: 'app/components/member-list/member-list.html',
  providers: [ MemberService ],
  directives: [ ROUTER_DIRECTIVES, MemberForm ],
  pipes: []
})
export class MemberList {
  public members: Observable<Member[]>;
  
  constructor(
      public MemberService: MemberService,
      public params: RouteParams) {}

  ngOnInit() {
    this.members = this.MemberService.getMembers();
  }
}
