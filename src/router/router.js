import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
// import Layout from '../pages/Layout/Layout';
import Root, { loader as rootLoader, action as rootAction } from '../pages/Layout/root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import App from '../App';
import Index from '../pages/index/index';
import Contact, {
  loader as contactLoader,
  action as contactAction
} from '../pages/contact/contact';
import EditContact, { action as editAction } from '../pages/contact/edit';
import { action as destroyAction } from '../pages/contact/destroy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>
          }
        ]
      }
    ]
  },
  {
    path: '/main',
    element: <App />
  }
]);

export { RouterProvider, router };
