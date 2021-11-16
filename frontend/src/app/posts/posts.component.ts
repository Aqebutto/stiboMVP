import { CoreService } from './../shared/services/core.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = new Observable<Post[]>();
  constructor(private _coreService: CoreService) { }

  ngOnInit(): void {
    this.posts$ = this._coreService.allposts$;
  }

}
