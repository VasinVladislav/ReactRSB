import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { siteMenuLoader } from "./services/getMenuData";
import ProtectedRoute from "./components/ProtectedRoute";

function GlobalLoaderFallback() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", textAlign: "center", color: "#666" }}>
      Загрузка...
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: siteMenuLoader,
    HydrateFallback: GlobalLoaderFallback,
  },
  {
    element: <ProtectedRoute/>, 
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: siteMenuLoader, // Данные загрузятся, только если юзер прошел ProtectedRoute
      }
    ]
  }
])

export default function App() { 
    return (
    <RouterProvider router={router}/>
  );
}
