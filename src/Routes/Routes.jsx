import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Admission from "../pages/Admission/Admission";
import Colleges from "../pages/Colleges/Colleges";
import MyCollege from "../pages/MyCollege/MyCollege";
import CollegeCardDetail from "../pages/CollegeCardDetail/CollegeCardDetail";
import Error from "../pages/Error/Error";


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
      {
        path: '/colleges/:id',
        element: <CollegeCardDetail></CollegeCardDetail>,
        loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
      },
      {
        path: "*",
        element: <Error></Error>
      }
    ]
  },
]);


export default router;

