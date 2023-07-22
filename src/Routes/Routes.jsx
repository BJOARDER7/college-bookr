import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Admission from "../pages/Admission/Admission";
import Colleges from "../pages/Colleges/Colleges";
import MyCollege from "../pages/MyCollege/MyCollege";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/colleges',
        element: <Colleges></Colleges>
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      },
      {
        path: '/mycollege',
        element: <MyCollege></MyCollege>
      },
    ]
  },
]);


export default router;

