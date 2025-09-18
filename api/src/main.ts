import App from './app';
import CoursesController from './courses/courses.controller';

const app = new App(3000, [new CoursesController()]);

app.listen();
