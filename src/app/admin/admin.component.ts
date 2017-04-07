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
  showEditForm: boolean = false;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers()
  }

  addFormToggle() {
    if (this.showAddForm === false) {
      this.showAddForm = true;
    } else {
      this.showAddForm = false;
    }
  }

  editFormToggle(member) {
    if (this.showEditForm) {
      this.showEditForm = false;
    } else {
      this.showEditForm = true;
    }
  }

  deleteMember(member){
    if(confirm("Are you sure you want to delete this team member? There is no going back.")) {
      this.memberService.delete(member);
    }
  }

  newMember(firstName: string, lastName: string, role: string, position: string, nationality: string, age: number, photo: string, bio: string) {
    var newMember: Member = new Member(firstName, lastName, role, position, nationality, age, photo, bio);
    this.memberService.saveMember(newMember);
    this.router.navigate(['admin']);
    this.showAddForm = false;
  }

}
