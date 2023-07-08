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
      onePost += `<p>${post.title} - ${post.img} - ${post.content} - ${post.date}</p>`
    })
    return onePost;
  }
}
