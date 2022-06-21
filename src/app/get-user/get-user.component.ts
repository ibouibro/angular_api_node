import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { User } from './../shared/user';
@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  currentUser = new User("","","");
  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    //let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(1).subscribe((res: any) => {
      this.currentUser = new User( res.data.id, res.data.name,res.data.email)
      console.log(res.data)
    });
  }
  ngOnInit() {}

}
