export class Member {
  isAdmin: boolean = false;
  constructor(public firstName: string, public lastName: string, public role: string, public position: string, public nationality: string, public age: number, public photo: string, public bio: string) {}
}
