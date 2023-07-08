import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  arrPosts: Post[] = [];

  constructor(){
    this.arrPosts = [
      {
        title: 'Lunes',
        img:'',
        content: 'Hoy es Lunes',
        date: '01/01/1900'
      },
      {
        title: 'Martes',
        img:'',
        content: 'Mañana es Martes',
        date: '01/01/1900'
      }
    ]
  }

  getPosts($event: Post) {
    this.arrPosts.push($event);
  }
}
