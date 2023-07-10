# BlogAngular

-> Se crea la práctica entorno a un elemento padre **Blog** y dos elementos hijos **Form** y **Posts**, llamados dentro de Blog. Llamamos a Blog dentro de app-component siguiendo la lógica de que si necesitásemos un navbar y un footer, por ejemplo, estos serían llamados, junto al Blog (elemento padre), en el app-component.

-> En el componente Blog, se crea un arrPosts con dos Posts predeterminados que siempre se mostrarán al iniciar la página. La lógica es que una nueva publicación, se situará siempre en primer lugar siguiendo la temporalidad de publicación (usamos unshift en vez de push para esto).

-> Usamos un **Interface Post** con las cuatro propiedades que lo conforman.

-> Al tener varios elementos, **trabajamos con Inputs y Outputs**:<br>
    `<header class="headerForm">`<br>
      `<app-form (pushPost)="getPosts($event)"></app-form>`<br>
    `</header>`<br>
    `<main>`<br>
      `<app-posts [allPosts]="arrPosts"></app-posts>`<br>
    `</main>`<br>

-> Nuestro Form, funciona como un Output, al pulsar el botón se activa la **función addPost** que contiene el emit. La validación contempla recibir únicamente texto en los tres campos disponibles. El campo de fecha y hora de publicación, se autogenerará usando new Date() y dando formato a la fecha. En caso de no rellenar todos los inputs, saltará un Alert. 

-> Recorriendo el array creamos un elemento para cada publicación guarda y la inyectamos mediante [innerHTML]

-> Los estilos de los post inyectados se colocan en styles.css para poder ser leídos al generarse (como se comentó en clase)

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
