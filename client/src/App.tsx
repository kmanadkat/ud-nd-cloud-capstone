import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Callback from "./Pages/Callback";
import EnsureLoggedIn from "./Pages/EnsureLoggedIn";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <EnsureLoggedIn /> },
    { path: "/login", element: <Login /> },
    { path: "/callback", element: <Callback /> },
    { path: '*', element: <Notfound />}
  ]);
  
  return <RouterProvider router={router} />
}

export default App