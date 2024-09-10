import Homepage from "./components/Homepage";
import Cv from "./components/Cv";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" index element={<Homepage />} />
      <Route path="/resume" index element={<Cv />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
