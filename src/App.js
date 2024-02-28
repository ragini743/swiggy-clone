import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";

import Error from "./Error";
import RestaurantMenu from "./menu/RestaurantMenu";

import SearchContainer from "./search/SearchContainer";
import { Suspense, lazy, useEffect, useState } from "react";
import GmailLoader from "./help/AccordianSkelton";
import UserContext from "./utils/UserContext";
import { RouterProvider } from "react-router-dom";

const HelpSUpport = lazy(() => import("./help/HelpSUpport"));
const SignIn = lazy(() => import("./form/SignIn"));



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
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <SearchContainer />,
      },

      {
        path: "/cart",
        element: "",
      },
      {
        path: "/restaurant/:resName-/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/support",
        element: (
          <Suspense fallback={<GmailLoader />}>
            <HelpSUpport />
          </Suspense>
        ),
      },
    ],

    errorElement: <Error />,
  },
  {
    path: "form",
    element: (
      <Suspense fallback={"Loading"}>
        <SignIn />
      </Suspense>
    ),
  },
]);


export function AppContainer() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName("Raginee");
  }, [userName]);
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {/* <AppWithRouter /> */}
      <RouterProvider router={appRouter} />
    </UserContext.Provider>
  );
}


