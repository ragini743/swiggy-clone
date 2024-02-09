
import { createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import SignIn from './form/SignIn';
import Error from './Error';

function App() {
  return (
    <div className="App overflow-hidden box-border w-full">
       <Header />
       <Body />
      
    </div>
  );
}

export default App;
export const appRouter = createBrowserRouter([
  {
    path:"form",
    element:<SignIn />,
    
  },
  {
    path:"/",
    element:<App />,
    errorElement:<Error />
  },
  {}
])