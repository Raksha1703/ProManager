import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/model/profile';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
})
export class FacultyComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private profileservice: ProfileService,
    private route: ActivatedRoute
  ) {}

  //public users$:Observable<object>;
  public users: any;
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.profileservice.read().subscribe((res: any) => {
      this.users = res.faculty;
      console.log(res.faculty);
    });
  }
  deleteUser(user) {
    this.profileservice.delete(user.id).subscribe((res: any) => {
      console.log(res);
      this.getUser();
    });
  }
}
