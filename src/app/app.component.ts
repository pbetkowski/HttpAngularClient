import { Component } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import {retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  allPosts$: Observable<Array<Post>>;


  constructor(private service: HttpServiceService) {}

  getPosts() {
    this.allPosts$ = this.service.getPosts();
  }

  getPost() {
    this.service.getPost(1).subscribe(post => {
      console.log(post);
    });
  }

  getPostByUser() {
    this.service.getPostByUser(1).subscribe(post => {
      console.log(post);
    });
  }

  addPost() {
    const p: Post = ({
      userId: 1,
      id: null,
      title: 'Antyprorok Franciszek',
      body: 'Jakiestam body'
    });

    this.service.addPost(p).subscribe(post => {
      console.log(post);
    });
  }

  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'Nowy title',
      body: 'Nowe body ( update post)'
    });

    this.service.updatePost(p).subscribe(post => {
      console.log(post);
    });
  }

  changePost() {
    const p: Post = ({
      id: 1,
      body: 'Wywoluje change(patch) post'
    });

    this.service.changePost(p).subscribe(m => {
      console.log(m);
    });
  }

  deletePost() {
    this.service.deletePost(1).subscribe(m => {
      console.log(m);
    });
  }
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
