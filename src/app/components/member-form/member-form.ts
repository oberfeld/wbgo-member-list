import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {MemberService} from '../../services/members';

@Component({
    selector: 'member-form',
    directives: [FORM_DIRECTIVES],
    providers: [ MemberService ],
    template: `  
  <div class="ui raised segment">  
    <h2 class="ui header">Member Form</h2>  
    <form #f="ngForm"  (ngSubmit)="onSubmit(f.value)" class="ui form">
 
      <div class="field">  
        <label for="memberName">Name</label>  
        <input type="text"  
               id="memberName"  
               placeholder="Name"  
               ngControl="name">  
      </div>
 
      <button type="submit" class="ui button">Speichern</button>  
    </form>  
  </div>  
  `
})
export class MemberForm {
    constructor(private MemberService: MemberService){
        
    }
    
    onSubmit(form:any):void {
        console.log('you submitted value:', form);
        this.MemberService.addMember(form);
    }
    
    
}