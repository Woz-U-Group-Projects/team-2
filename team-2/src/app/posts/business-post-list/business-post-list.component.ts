import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-business-post-list',
  templateUrl: './business-post-list.component.html',
  styleUrls: ['./business-post-list.component.css']
})
export class BusinessPostListComponent implements OnInit {
  posts: Post[] = [];
  private postsSub: Subscription = new Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
