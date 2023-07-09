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

  addPost(): void {
    if(this.newPost.title !== "" && this.newPost.img !== "" && this.newPost.content !== "") {
      const currentDate = new Date();
      const time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const date = currentDate.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: '2-digit' });

      this.newPost.date = `Publicado: ${time}, ${date}`;

      this.pushPost.emit(this.newPost);
      this.newPost = {title: "", img: "", content: "", date: ""};
    }else{
      alert('Es necesario rellenar todos los campos.')
    }
  }
}
