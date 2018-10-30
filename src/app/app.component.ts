import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private post: Post = { userId: 5, id: 101, title: 'SomeTitle', body: 'somebody' };
  private post2: Post = { userId: 5, id: 101, title: 'SomeTitle2', body: 'somebody2' };
  public posts: Post[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.loadData();
  }

  public addPost() {
    this.http.postPost(this.post).subscribe(response => console.log(response));
  }

  private getPostsData() {

  }

  public loadData() {
    this.http.getPost().subscribe((post: Post[]) => {
      this.posts = post;
    });
  }

  public deletePost() {
    this.http.deletePost().subscribe(response => console.log(response));
  }

  public putPost() {
    this.http.putPost(this.post2).subscribe(response => console.log(response));
  }
};
