import './index.css'
import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import HomePage from './components/HomePage.jsx';
import Error from './components/Error.jsx';
// import BookList from './components/BookList.jsx';
import BookDetails from './components/BookDetails.jsx';
import PopularBooks from './components/popularBooks.jsx';
import GenreList from './components/GenreList.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy loading other components
const BookList = lazy(() => import('./components/BookList.jsx'));
// const Contact = lazy(() => import('./components/Contact.jsx'));

// Create Router Configuration
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />, 
      },
      {
        path: '/',
        element: <PopularBooks />, 
      },
      {
        path: '/browse_books',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BookList />
          </Suspense>
        )
      },
      {
        path: '/book/:id',
        element: <BookDetails />,
      },
      {
        path: '/Book_Category/:genre',
        element: <GenreList />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);