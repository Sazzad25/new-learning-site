import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './components/Loaders/productsAndCartLoader';
import Orders from './components/Orders/Orders';
import QuizeDetails from './components/QuizeDetails/QuizeDetails';
import Shop from './components/Shop/Shop';
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
          element: <Shop/>
        },
        
        {
          path:'orders',
          // loader: productsAndCartLoader,
          loader: async() =>{
            return fetch(' https://openapi.programming-hero.com/api/quiz/1');
          },
         
          element: <Orders/>
        },

        // {
        //   path:'/quize/:quizeId',
        //   loader: async ({params}) =>{
        //     return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizeId}`);
        //   },
        //   element: <QuizeDetails></QuizeDetails>
        // },

        {
          path:'inventory',
          element: <Inventory/>
        },
        {
          path:'about',
          element: <About/>
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
