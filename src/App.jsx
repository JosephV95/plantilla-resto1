import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutPrincipal from "./layouts/LayoutPrincipal";
import Home from "./pages/Home"
import DetallesMenu from "./pages/DetallesMenu";

const router = createBrowserRouter ([
  {path:'/', element: <LayoutPrincipal />, children:[
    {path: '/', element: <Home /> },
    {path:'/menu', element: <DetallesMenu/>}
  ]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
