import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { Post } from './post.model';

//const BACK_URL = 'https://jsonplaceholder.typicode.com/posts'
@Injectable({
  providedIn: 'root',
})
export class GetPostsService {
  private posts: Post[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public deletePost(postId: string) {
    return this.http.delete(
      'https://jsonplaceholder.typicode.com/posts/' + postId
    );
  }

  public addPost(id: string, userId: string, title: string, body: string) {
    const postData = new FormData();
    postData.append('id', id);
    postData.append('userId', userId);
    postData.append('title', title);
    postData.append('body', body);
    this.http
      .post<Post>('https://jsonplaceholder.typicode.com/posts/', postData)
      .subscribe((responseData) => {});
  }

  public updatePost(id: string, userId: string, title: string, body: string) {
    let postData: Post | FormData;
    postData = {
      id: id,
      userId: userId,
      title: title,
      body: body,
    };
    this.http
      .put('https://jsonplaceholder.typicode.com/posts/' + id, postData)
      .subscribe((response) => {});
  }
}
