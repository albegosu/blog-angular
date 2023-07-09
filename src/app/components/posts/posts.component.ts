import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() allPosts: Post[] = [];

  pushPosts(): string {
    let onePost = "";
    this.allPosts.forEach(post => {
      onePost += `
      <article class="post">
        <h3 class="post__title">${post.title}</h3>
        <figcaption> <img src="${post.img}" alt="${post.title}" class="post__img"> </figcaption>
        <p class="post__text">${post.content}</p>
        <span class="post__date">${post.date}</span>
      </article>`
    })
    return onePost;
  }
}
