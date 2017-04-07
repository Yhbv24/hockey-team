import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  saveMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string){
    return this.angularFire.database.object('members/' + memberId);
  }

  deleteMember(member){
    var memberInDatabase = this.getMemberById(member.$key);
    memberInDatabase.remove();
  }

  delete(member){
    var memberToDelete = this.getMemberById(member.$key);
    memberToDelete.remove();
  }

  update(member){
    var memberToEdit = this.getMemberById(member.$key);
    memberToEdit.update({
      firstName: member.firstName,
      lastName: member.lastName,
      role: member.role,
      position: member.position,
      nationality: member.nationality,
      age: member.age,
      photo: member.photo,
      bio: member.bio,
      isAdmin: false
    });
  }

}
