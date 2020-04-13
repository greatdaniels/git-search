import { ServiceService } from './../service/service.service';
import { Repo } from './../repo';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  repo: Repo;

  constructor(public userService: ServiceService, private repoService: ServiceService) { }

  search(search) {
    this.userService.getUser(search).then(
      success => {
        this.user = this.userService.users;
      },
      error => {
        console.log(error)
      }
    );

    this.repoService.getRepos(search).then(
      result => {
        this.repo = this.repoService.repos;
        console.log(this.repo);
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.search('greatdaniels');
  }

}
