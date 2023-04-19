import React, { useEffect, useState } from "react";

import NavbarFs from './NavbarFs'
import Dropdown from './Dropdown'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen)};

    useEffect(()=> {
        const hideMenu = ()=>{ if(window.innerWidth > 768 && isOpen){
      setIsOpen(false)  }
    }
    window.addEventListener('resize', hideMenu);
    return ()=>{window.removeEventListener('resize', hideMenu);}
});
    
        return (
    
        <div>
            
        <NavbarFs toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        </div>
    )
}

export default Navbar;
