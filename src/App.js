import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
// import { productsAndCartLoader } from './components/Loaders/productsAndCartLoader';
import Quizes from './components/Quizes/Quizes';
// import QuizeDetails from './components/QuizeDetails/QuizeDetails';
import Home from './components/Home/Home';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children: [
        {
          path: '/',
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home/>
        },
        
        {
          path:'quizes',
          // loader: productsAndCartLoader,
          loader: async() =>{
            return fetch(' https://openapi.programming-hero.com/api/quiz/1');
          },
         
          element: <Quizes/>
        },

        // {
        //   path:'/quize/:quizeId',
        //   loader: async ({params}) =>{
        //     return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizeId}`);
        //   },
        //   element: <QuizeDetails></QuizeDetails>
        // },

        {
          path:'statistics',
          loader: async() =>{
            return fetch(' https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics/>
        },
        {
          path:'blog',
          element: <Blog/>
        },
        {
          path:'*',
          element: <div>This route not found</div>
        }
      ]
    },
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
