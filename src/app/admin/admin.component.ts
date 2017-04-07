import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {
  members;
  showAddForm: boolean = false;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers()
  }

  formToggle() {
    if (this.showAddForm === false) {
      this.showAddForm = true;
    } else {
      this.showAddForm = false;
    }
  }

  newMember(firstName: string, lastName: string, role: string, position: string, nationality: string, age: number, photo: string, bio: string) {
    var newMember: Member = new Member(firstName, lastName, role, position, nationality, age, photo, bio);
    this.memberService.saveMember(newMember);
    this.router.navigate(['member-list']);
  }

}
