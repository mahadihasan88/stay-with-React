//import {Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is the home page</p>
      {/* <Routes>
      <Route path="/world" element={ <p>This is world!</p>}>
       
      </Route>
      </Routes> */}
      <Outlet/>
    </div>
  );
}