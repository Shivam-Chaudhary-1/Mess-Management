
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import Create_stu from './pages/Create_stu';
// import GlobalAdmin from './pages/GlobalAdmin';
import Delete_stu from './pages/Delete_stu';
import HostelData from './pages/HostelData';
import Search_stu from './pages/Search_stu';
import Update_stu from './pages/Update_stu';
import Entry_stu from './pages/Entry_stu';
// import Navbaar from './pages/Navbaar';
// import Sidebar from './pages/Sidebar';
import Admin_Info from './pages/Admin_Info';
import AdminDetails from "./pages/AdminDetails";

function App() {
  return (
      <div>
         {/* <Navbaar class = "z-10"/> */}
         <HomePage/> 
         <Create_stu/> 
         <Delete_stu/>
         {/* <GlobalAdmin/> */}
         <HostelData/>
         <Search_stu/>
         <Update_stu/>
         <Entry_stu/> 
         {/* <Sidebar/> */}
         <Router>
          {/* creating Routes */}
         <Routes>
         <Route path="/" element={<Admin_Info />} />
         <Route path="/admin-details" element={<AdminDetails />} />
         </Routes>
         </Router>
      </div>
  )
}

export default App


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Admin_Info from "./pages/Admin_Info";
// import AdminDetails from "./pages/AdminDetails";
// import HomePage from './pages/HomePage'
// import Create_stu from './pages/Create_stu';
// import Delete_stu from './pages/Delete_stu';

// function App() {
//   return (
//     <div>
//       <HomePage/> 
//               <Create_stu/> 
//       <Delete_stu/>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Admin_Info />} />
//         <Route path="/admin-details" element={<AdminDetails />} />
//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default App;
