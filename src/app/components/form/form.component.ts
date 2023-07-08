import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() pushPost: EventEmitter<Post>
  newPost: Post = {title: "", img: "", content: "", date: ""};

  constructor() {
    this.pushPost = new EventEmitter();
  }

  addPost() {
    this.pushPost.emit(this.newPost);
    console.log(this.pushPost);
    this.newPost = {title: "", img: "", content: "", date: ""};
  }
}
