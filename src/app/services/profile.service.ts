import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Profile } from 'src/app/model/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  public url='http://127.0.0.1:8000/api/';
  
  getData() : Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url + 'profile');
  }
  getAll() : any {
    return this.http.get<any>(this.url + 'profile');
  }
  delete(id){
    return this.http.delete<any>(this.url+ 'profile/' +id);
  }
  create(data){    
      return this.http.post<any>(this.url+ 'profile' ,data);
  }
}
