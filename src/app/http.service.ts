import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  };

  postPost(post: Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  deletePost() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }

  putPost(post: Post) {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', post);
  }
}
