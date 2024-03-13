import { useRoutes, Routes, Route } from "react-router-dom"
import NavBar from "../component/NavBar.js"
import Home from "../pages/Home.js"
import Product from "../pages/Product"
// import Contact from "./pages/contact"
// import Login from "./pages/login/Login"
import Operator from "../dashbords/Operator.js"
// import SideNav from "./component/SideNav.js"
import Employee_manage from "../pages/employee_manage/view.js"

const Router = () => {
   
    // let element = useRoutes([
    //     {
    //         element: <NavBar/>,
    //         children: [
    //             {path:"/", element: <Home />},
    //             {path:'product', element: <Product />},
    //             // {path:"/", element: <Home />},
    //         ]
    //     },
    //     {
    //         element: <Operator />,
    //         children: [
    //             {path: "operator/employee", element: <Employee_manage />}
    //         ]
    //     }
    // ])
    // return element;
}


export default Router;

// <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/product" element={<Product />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/operator/dashboard" element={<Operator/>}>
//           <Route path="employee_management" element={<Operator />}></Route>
//           <Route path="delivery_schedule" element={<Operator />}></Route>
//         </Route>
//       </Routes>