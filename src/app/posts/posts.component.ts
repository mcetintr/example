import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: [any];
  error;

  constructor(private postService: PostsService) {

  }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(
        response => {
          //console.log(response);
          this.posts = <any>response;
        },
        error => {
          this.error = error;
          //console.log(error);
        });

  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    console.log(post);
    //return;
    this.postService.createPost(post)
      .subscribe(
        response => {
          console.log(response);
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);

        },
        error => {
          this.error = error;
          //console.log(error);
        }
      );
  }

  updatePost(post) {
    post.title = 'updated';
    console.log(post);

    this.postService.updatePost(post)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          this.error = error;
          //console.log(error);
        });
  }

  deletePost(post) {
    console.log(post);
    this.postService.deletePost(post)
      .subscribe(
        response => {
          console.log(response);
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        error => {
          this.error = error;
          //console.log(error);
        });
  }

}
