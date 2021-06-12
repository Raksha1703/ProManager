import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service'; 
import { Profile } from 'src/app/model/profile';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  
  constructor(private profileservice:ProfileService,
              private route:ActivatedRoute) { }

  //public users$:Observable<object>;
  public users : any;
  ngOnInit(): void {    
    this.profileservice.getAll()
       .subscribe((res:any) => {
         this.users = res.faculty;
         console.log(res.faculty)});
     ;
    // this.users$ = this.profileservice.getData();
    // this.profileservice.getData()
    //    .subscribe((response) => {
    //     console.log('OBSERVE "response" RESPONSE is ', response);
    //    });
  }

}
