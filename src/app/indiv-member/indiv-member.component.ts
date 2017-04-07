import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MemberService } from '../member.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-indiv-member',
  templateUrl: './indiv-member.component.html',
  styleUrls: ['./indiv-member.component.css'],
  providers: [MemberService]
})
export class IndivMemberComponent implements OnInit {
  memberId: string = null;
  member;

  constructor(private router: Router, private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });

    this.member = this.memberService.getMemberById(this.memberId);
  }

}
