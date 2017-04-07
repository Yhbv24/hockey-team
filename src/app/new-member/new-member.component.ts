import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { Member } from '../member.model';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [MemberService]
})
export class NewMemberComponent implements OnInit {

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
  }

  newMember(firstName: string, lastName: string, role: string, position: string, nationality: string, age: number, photo: string) {
    var newMember: Member = new Member(firstName, lastName, role, position, nationality, age, photo);
    console.log(newMember.lastName);
    this.memberService.saveMember(newMember);
    this.router.navigate(['member-list']);
  }

}
