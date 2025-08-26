// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './Header';

// const Layout = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 w-full z-20 shadow bg-white">
//         <Header />
//       </div>

//       <main className="flex-1">
//         <Outlet /> {/* renders the matched route component */}
//       </main>
// {/* 
//       <Footer /> */}
//     </div>
//   );
// };

// export default Layout;
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header (fixed at top) */}
      <div className="fixed top-0 left-0 w-full z-20 shadow bg-white h-16">
        <Header />
      </div>

      {/* Main Content (with padding to prevent overlap by header) */}
      <main className="flex-1 ">
        <Outlet /> {/* renders the matched route component */}
      </main>

       
      <footer className="bg-gray-100 py-4 text-center text-sm">
        <Footer />
      </footer> 
     
    </div>
  );
};

export default Layout;
