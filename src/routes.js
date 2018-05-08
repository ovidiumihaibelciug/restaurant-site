import App from './App';
import Preview from './containers/Preview';
import Menus from './containers/Menus';
import Gallery from './containers/Gallery';

export const routes = [
    {
      path: "/home",
      component: Preview
    },
    {
      path: "/menus",
      component: Menus
    },
    {
      path: "/gallery",
      component: Gallery
    },
];