import { Repo } from './../repo';
import { ServiceService } from './../service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repo: Repo;

  constructor(public repoService:ServiceService) { }

  searchRepo(search) {
    this.repoService.getRepos(search).then(
      (results)=>{
        this.repo = this.repoService.repos
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.searchRepo('greatdaniels');
  }

}
