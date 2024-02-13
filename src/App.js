
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import SignIn from './form/SignIn';
import Error from './Error';
import RestaurantMenu from './menu/RestaurantMenu';
import HelpSUpport from './help/HelpSUpport';
import IssueComponent from './help/IssueComponent';

function App() {
  return (
    <div className="App overflow-hidden box-border w-full">
       <Header />
       {/* <Body /> */}
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
        element:"",
      },
     
      {
        path:"/cart",
        element:"",
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu />,
      },
      {
        path:"/support",
        element:<HelpSUpport />,
       },
      {
        path:"/support/issue/:type",
        element:<IssueComponent />
      }
    ],
    
    errorElement:<Error />,

  },
  {
    path:"form",
    element:<SignIn />,
    
  },

  
])