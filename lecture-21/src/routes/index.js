import {HomePage} from "../pages/home";
import {ContactsPage} from "../pages/contacts";
import {PhotosPage} from "../pages/photos";
import {PublicationsPage} from "../pages/publications";

export const  appRoutes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: "/photo's",
        component: PhotosPage
    },
    {
        path: '/publications',
        component: PublicationsPage
    },
    {
        path: '/contacts',
        component: ContactsPage
    },
]