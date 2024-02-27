
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';

import Error from './Error';
import RestaurantMenu from './menu/RestaurantMenu';

import SearchContainer from './search/SearchContainer';
import { Suspense, lazy } from 'react';
import GmailLoader from './help/AccordianSkelton';

const HelpSUpport = lazy(() => import("./help/HelpSUpport")) ;
const SignIn =lazy(()=>import ("./form/SignIn"));

function App() {
  return (
    <div className="App overflow-hidden box-border w-full">
       <Header />
 
       <Outlet />
    </div>
  );
}

export default App;
export const appRouter = createBrowserRouter([

  {
    path:"/",
    element:<App />,
    
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/search",
        element:<SearchContainer />,
      },
     
      {
        path:"/cart",
        element:"",
      },
      {
        path:"/restaurant/:resName-/:resId",
        element:<RestaurantMenu />,
      },
      {
        path:"/support",
        element: <Suspense fallback={<GmailLoader />}><HelpSUpport />
        </Suspense>,
       },
     
    ],
    
    errorElement:<Error />,

  },
  {
    path:"form",
    element:<Suspense fallback={"Loading"}><SignIn /></Suspense>,
    
  },

  
])