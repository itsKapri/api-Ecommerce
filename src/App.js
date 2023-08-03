import './App.css';
import Home from './Components/Page/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Single from './Components/Page/single';
const router = createBrowserRouter([
  {
    path: "/",
    element:   <Home/>,
  },
  {
    path: "/products/:id",
    element:  <Single/>,
  },
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
