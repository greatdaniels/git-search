import { environment } from './../../environments/environment';
import { Repo } from './../repo';
import { User } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  users: User;
  repos: Repo;

  constructor(private http:HttpClient) { 
    this.users = new User("","","",0,"",new Date);
    this.repos = new Repo("","","","",new Date);
  }

  getUser(search: string) {

    interface ApiResponse {
      url: string;
      login: string;
      html_url: string;
      public_repos: number;
      avatar_url: string;
      created_at: Date;
    }

    return new Promise((resolve,reject)=> {
      this.http.get<ApiResponse>('https://api.github.com/users/'+search+'?access_token='+environment.apikey).toPromise().then(
        result => {
          this.users = result;
          console.log(this.users);
          resolve();
        },
        error => {
          console.log(error);
          reject();
        }
      )
    })
  }

  getRepos(search) {
    interface Repos {
      name: string;
      description: string;
      html_url: string;
      language: string;
      created_at: Date;
    }

    return new Promise((resolve, reject)=> {
      this.http.get<Repos>('https://api.github.com/users/'+search+'repos?order=created&sort=asc?access_token='+environment.apikey).toPromise().then(
        result => {
          this.repos = result;
          resolve();
        },
        error => {
          console.log(error);
          reject();
        }
      )
    })
  }
}
