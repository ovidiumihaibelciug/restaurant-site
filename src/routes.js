import App from './App';
import Preview from './containers/Preview';
import Menus from './containers/Menus';
import Gallery from './containers/Gallery';
import Contact from './containers/Contact';

export const routes = [
    {
        path: "/menus",
      component: Menus
    },
    {
        path: "/menu/:menu",
      component: Menus
    },
    {
        path: "/gallery",
        component: Gallery
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/",
        component: Preview
    },
];