import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts = [
    { id: 1, title: 'Post 1', content: 'Content for post 1' },
    { id: 2, title: 'Post 2', content: 'Content for post 2' },
    { id: 3, title: 'Post 3', content: 'Content for post 3' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
