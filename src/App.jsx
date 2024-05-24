import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Applayout from "./layouts/Applayout";
import Home from "./pages/Home";
import Singlegif from "./pages/Singlegif";
import Cat from "./pages/Cat";
import Search from "./pages/Search";
import Fav from "./pages/Fav";
import Gifprovider from "./context/gif-context";

function App() {
  const router = createBrowserRouter([
    {
      element: <Applayout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:type/:slug",
          element: <Singlegif />,
        },
        {
          path: "/:category",
          element: <Cat />,
        },
        {
          path: "/search/:query",
          element: <Search />,
        },
        {
          path: "/favorites",
          element: <Fav />,
        },
      ],
    },
  ]);
  return (
    <>
      <Gifprovider>
        <RouterProvider router={router} />
      </Gifprovider>
    </>
  );
}

export default App;
