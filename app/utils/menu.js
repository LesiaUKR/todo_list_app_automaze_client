import { check, todo, home } from "./icons";

const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: home,
    link: "/",
  },

  {
    id: 2,
    title: "Completed!",
    icon: check,
    link: "/completed",
  },
  {
    id: 3,
    title: "Do It Now",
    icon: todo,
    link: "/incomplete",
  },
];

export default menu;
