

import hamburger from "../hamburger.png";
import logo from "../logo-text.png";


const Nav = () => {

  
    return (
        <nav className="container mx-auto px-6 py-3 items-center sticky top-0 z-50
         bg-white border-b border-gray-100">

{/* Mobile Navbar */}


        <div className="w-full flex md:hidden items-center justify-between">
           <img src={hamburger} alt="humburger"/>
           
           <img src={logo} alt="logo" />


       <div className="flex items-center gap-2">
            <button className="text-xs text-gray-700 px-3 py-1">  
                Sign In
            </button>
          
            <button className="px-5 py-2 rounded-full bg-pink-500 text-white text-sm hover:bg-pink-600">
               Sign Up
            </button>
        </div>
        </div>


        
       


{/* Desktop Navbar */}

<div className="hidden md:flex max-w-7xl mx-auto justify-between items-center ">

<img src={logo} alt="logo" />

            
<ul className="list-none p-0 m-0 flex gap-4 items-center text-sm">
   <li className="text-pink-500">Home</li>
   <li>Technologies</li>
    <li>Projects</li>
    <li>About</li>
    <li>Contact</li>
 </ul>
        

<div className="flex items-center gap-3">
       <button className="text-sm text-gray-700">
           Sign In
       </button>


          
        <button className="px-5 py-2 rounded-full bg-pink-500 text-white text-sm hover:bg-pink-600">
             Sign Up
        </button>

      
  </div>
    </div>
    </nav>
        
    );
};

export default Nav;