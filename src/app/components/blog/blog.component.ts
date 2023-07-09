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
        title: 'Máster Full Stack Developer',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Universidad_Internacional_de_La_Rioja.jpg/1200px-Universidad_Internacional_de_La_Rioja.jpg',
        content: `
        Conviértete en Full Stack Developer y accede a una de las profesiones con más demanda laboral.<br>
        Con nuestro Máster online en Full Stack Developer accede con éxito a una de las profesiones con mayor proyección por su alta demanda laboral. Estudiando este Máster adquirirás todos los conocimientos que necesitas para convertirte en un experto en desarrollo web:<br>
        <br>
        <ul>
        <li>Aprendiendo y dominando las tecnologías relacionadas con la creación front y con aquellas herramientas de gestión y programación back.</li>
        <li>Profundizando en los lenguajes de programación más demandados, aplicables a grandes y pequeñas empresas, dominando el desarrollo web avanzado con Vanilla JS.</li>
        <li>Entendiendo el proceso completo del desarrollo del producto digital y ejecutándolo con éxito.</li>
        <li>Dominando uno de los stacks más usados por la industria, MEAN stack, compuesto por 4 importantes tecnologías: Mongo, Express, Angular y Node. js.</li>
        <li>Asegurando el éxito de tus proyectos de webs o apps, esto puede marcar la diferencia a la hora de ser seleccionado para un proyecto u otro.</li>
        </ul>`,
        date: 'Publicado: 23:59, 31/12/2022'
      },
      {
        title: 'Deliver web apps with confidence',
        img:'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1108489/retina_1708x683_cover-REDESIGN-StepByStepAngular-Luke_Newsletter-4ccf196e360a5790beaae921500d731c.png',
        content: `This topic can help you understand Angular: what Angular is, what advantages it provides, and what you might expect as you start to build your applications.<br>
        Angular is a development platform, built on TypeScript. As a platform, Angular includes:<br>
        <ul>
        <li>A component-based framework for building scalable web applications</li>
        <li>A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more</li>
        <li>A suite of developer tools to help you develop, build, test, and update your code</li>
        </ul>
        With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with minimal effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.
        `,
        date: 'Publicado: 00:00, 01/01/2023'
      }
    ]
  }

  getPosts($event: Post) {
    this.arrPosts.unshift($event);
  }
}
