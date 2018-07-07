import Courses from "../app/components/courses/courses";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/courses",
    exact: true,
    component: Courses
  }
];
export default routes;