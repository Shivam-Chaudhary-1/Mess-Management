
// import { NavLink } from 'react-router-dom';
// import { GiHamburger } from 'react-icons/gi';
// import { RxCross2 } from 'react-icons/rx';
// import React from 'react';
// import { useState } from 'react';

// function Navbar( props ){
//       const [isMenuOpen, setIsMenuOpen]=useState(false);
//       const visible=props.visible;
//       const visiblity=props.visiblity;
//       const handleMenu=()=>{
//             visiblity(!visible);
//             setIsMenuOpen(!isMenuOpen);
//       }

//     return(
//         <div className=" bg-transparent h-[35%] w-full flex flex-col">
            
//             {/* upper navbar for big screen */}
//             <div className=" bg-transparent h-[30%] w-full flex justify-center items-center component">

//                 <div className='w-[95%] h-full bg-transparent flex justify-between items-center pl-5 md:pl-3'>
//                 {/* logo */}
//                     <div>
//                          <img src='./src/assets/plazalogo.jpg' 
//                             className=' w-14 h-14 rounded-full'
//                          />
//                     </div>

//                     {/* sections */}
//                     <div className='md:w-[40%]'>
//                        <div className='flex justify-evenly items-center text-white w-full gap-2'>
//                             <NavLink to='/' className=" scale-0 md:scale-100">
//                                <p className=" scale-0 md:scale-100">Home</p>
//                             </NavLink>
//                             <NavLink to='/kitchen' className=" scale-0 md:scale-100">
//                                <p className=" scale-0 md:scale-100">Kitchen</p>
//                             </NavLink>
//                             <NavLink to='/blog' className=" scale-0 md:scale-100">
//                                <p className=" scale-0 md:scale-100">Blog</p>
//                             </NavLink>
//                             <NavLink to='/contactUs' className=" scale-0 md:scale-100">
//                                <p className=" scale-0 md:scale-100">Contact Us</p>
//                             </NavLink>
//                             <div className='flex justify-center items-center'>
//                                { isMenuOpen ? <RxCross2 className=" scale-x-105 cross smooth" onClick={handleMenu}/> :
//                                 <GiHamburger className=" md:scale-0 scale-100 relative smooth" onClick={handleMenu}/> 
//                                }
//                             </div>
//                        </div>
//                     </div>
//                 </div>  
//             </div>

//                 {/* lower navbar for medium and lower size screen */}

//             { isMenuOpen ? <div className='h-0  w-full flex flex-col justify-evenly text-white lowerNav smooth'>
//                 <div className='  flex items-center pb-2 pl-6 navChild h-0'>
//                     <NavLink to='/'>
//                         <p>Home</p>
//                     </NavLink>
//                 </div>
//                 <div className='  flex items-center pb-3 pl-6 navChild h-0'>
//                     <NavLink to='/kitchen'>
//                         <p>Kitchen</p>
//                     </NavLink>
//                 </div>
//                 <div className='  flex items-center pb-3 pl-6 navChild h-0'>
//                     <NavLink to='/blog'>
//                         <p>Blog</p>
//                     </NavLink>
//                 </div>
//                 <div className=' flex items-center pl-6 navChild h-0'>
//                     <NavLink to='/contactUs'>
//                         <p>Contact Us</p>
//                     </NavLink>
//                 </div>
//             </div> : <div className='h-0 smooth'></div>}
//         </div>
//     )
// }
// export default Navbar