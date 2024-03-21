import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {menu, close} from '../assets';
import logoo from '../assets/logoo.png';
const  Navbar = () => {
  const[active, setActive]= useState('');
  const[toggle, setToggle]= useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link to="/"                  //points to the top of the page 
         className="flex items-center" 
         onClick={()=>{             //call back funtion
            setActive("");          //keeps track of where we are currrently on the page
            window.scrollTo(0,0);   //scorlls to the top of the page
        }}
      >        
       <img src={logoo} alt="logo" className="w-20 h-20 object-contain"/>
       <p className="text-white text-[18px] font-bold cursor-pointer flex">Name &nbsp;<span className="sm:block hidden"> | My Portfolio </span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
         {navLinks.map((link)=>(
          <li 
          key={link.id} 
          className={`${
            active === link.title 
            ? "text-white" 
            : "text-secondary"} 
            hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(link.title)}          //to make it bright white when we click on it
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
         ))}
      </ul>
      
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={() => setToggle(!toggle)}
        />
        <div className={`${!toggle ? "hidden" : "flex" } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
         {navLinks.map((link)=>(
          <li 
          key={link.id} 
          className={`${
            active === link.title 
            ? "text-white" 
            : "text-secondary"} 
            font-poppins font-medium cursor-pointer text-[16px]`}
          onClick={() =>{ 
            setToggle(!toggle);
            setActive(link.title);}}          //to make it bright white when we click on it
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
         ))}
      </ul>
        </div>
      </div>
    </div>
    </nav>
  )
}
export default Navbar