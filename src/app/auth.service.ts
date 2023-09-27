import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //<-
import { Observable } from 'rxjs'; //<-

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginUser(user: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
        console.log("Fetched users:", users); // Debug line
        const username = users.find(u => u.user === user && u.password === password);
        if (username) {
          observer.next({ success: true });
        } else {
          observer.next({ success: false });
        }
        observer.complete();
      });
    });
  }
}
  
