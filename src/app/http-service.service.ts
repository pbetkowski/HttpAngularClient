import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './app.component';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private headers = new HttpHeaders().set('Authorization', 'token');
  // można go również dokleić do interceptora (auth.interceptor.ts)
  constructor(private client: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.client.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {headers: this.headers});
  }

  getPost(id: number): Observable<Post> {
    return this.client.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostByUser(userId: number): Observable<Array<Post>>  {
    const parms = new HttpParams().set('userId', userId.toString());
    return this.client.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: parms});
  }

  addPost(post: Post): Observable<Post> {
    return this.client.post<Post>('https://jsonplaceholder.typicode.com/posts/', post);
  }

  deletePost(id: number): Observable<Post> {
    return this.client.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  changePost(post: Post): Observable<Post> {
    return this.client.patch<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.client.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }
}
