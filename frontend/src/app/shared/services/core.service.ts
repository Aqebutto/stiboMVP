import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  public user: User | undefined;
  public userPosts: Post[] | undefined;
  REST_API_SERVER = 'http://localhost:8080';
  headers = new HttpHeaders().append('Content-Type', 'application/json');
  public userRS: ReplaySubject<any> = new ReplaySubject<User[]>();
  allUsers$ = this.userRS.asObservable();
  public postRS: ReplaySubject<any> = new ReplaySubject<Post[]>();
  allposts$ = this.postRS.asObservable();

  constructor(private httpClient: HttpClient,) { }

  getAllUsers() {
    this.httpClient.get(this.REST_API_SERVER + '/api/users', {
      headers: this.headers,
    }).subscribe(
      (res) => {
        this.userRS.next(res)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUserPosts() {
    this.httpClient.post(this.REST_API_SERVER + '/api/users/posts', this.user, {
      headers: this.headers,
    }).subscribe(
      (res) => {
        this.postRS.next(res)

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
