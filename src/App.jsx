import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Jahon from "./pages/Jahon";
import Iqtisodiyot from "./pages/Iqtisodiyot";
import Jamiyat from "./pages/Jamiyat";
import Sport from "./pages/Sport";
import FanTehnika from "./pages/FanTehnika";
import NuqtayiNazar from "./pages/NuqtayiNazar";
import Audio from "./pages/Audio";
import NotFound from "./pages/NotFound";
import Ozbekiston from "./pages/Ozbekiston";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/ozbekiston", element: <Ozbekiston /> },
    { path: "/jahon", element: <Jahon /> },
    { path: "/iqtisodiyot", element: <Iqtisodiyot /> },
    { path: "/jamiyat", element: <Jamiyat /> },
    { path: "/sport", element: <Sport /> },
    { path: "/fanTehnika", element: <FanTehnika /> },
    { path: "/nuqtayiNazar", element: <NuqtayiNazar /> },
    { path: "/audio", element: <Audio /> },
    { path: "*", element: <NotFound /> },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
