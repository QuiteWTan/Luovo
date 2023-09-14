import React,{ useState } from 'react';
import { Link} from 'react-router-dom'
import Profile from '../assets/react.svg'
import {  useNavigate } from "react-router-dom";

const Navbar = () => {
    const Nav = useNavigate();
    const [MenuIcon,setMenuIcon] = useState(false);
    const [SubMenuList, setSubMenu] = useState([false,false,false,false]);

    const DropDown = (index) => {
        const updatedList = [...SubMenuList];
        updatedList[index] = !updatedList[index];
        for (let i = 0; i < SubMenuList.length; i++) {
            if (i !== index && !updatedList[i]) {
                updatedList[i] = !updatedList[i];
            }
          }
        setSubMenu(updatedList);
    }

    const ClearDropDown = (index) => {
        setMenuIcon(!MenuIcon)
        const updatedList = [...SubMenuList];
        for (let i = 0; i < SubMenuList.length; i++) {
            if (!updatedList[i]) {
                updatedList[i] = !updatedList[i];
            }
          }
        setSubMenu(updatedList);
    }
    
    const MenuStyle = ['flex flex-col mx-7 px-5 my-1 py-2 gap-y-1 border-gray-400 border-l-2 h-0 hidden ','flex flex-col mx-7 px-5 my-1 py-2 gap-y-1 border-gray-400 border-l-2 h-auto ']
    const NavStyle = ['fixed z-10 w-[250px] top-0 left-0 h-screen bg-gray-800 pt-4 pb-2 shadow-md text-gray-600 px-2 transition-width duration-300 ','fixed top-0 z-10 left-[-73px] md:left-0 h-full w-[73px] h-screen bg-gray-800 pt-4 pb-2 shadow-md text-gray-600 px-2 transition-width duration-300']

    const NavListTop = [
        {   
            icon: <box-icon type='solid' name='grid-alt' color='white'></box-icon> ,
            name : "Dashboard"        ,
            HoverName : "Home",
            link:"/"
        },
        {   
            icon: <box-icon name='money-withdraw' color='white'></box-icon>,
            name : "Transaction"        ,
            HoverName : "Transaction",
            link:"/"
        },
        {   
            icon: <box-icon type='solid' name='user-circle' color='white'></box-icon>,
            name : "Account"        ,
            HoverName : "Account",
            link:"/"
        },
        {   
            icon: <box-icon name='user-pin' type='solid' color='white'></box-icon>,
            name : "Contact" ,
            HoverName : "Contact",
            link:"/"
        },
    ]

    return(
        <nav className={`${MenuIcon ? NavStyle[0] : NavStyle[1] }`} >
            <header className='flex flex-col h-full text-gray-50'>
                <div className={`w-full flex ${MenuIcon? 'justify-end' : 'justify-center'}`} onClick={() => ClearDropDown()}>
                        {
                        MenuIcon ? 
                        <box-icon name='x'color='white'></box-icon> 
                        : 
                        <box-icon name='menu' color='white'></box-icon>
                        }
                </div>
                <div class='mt-4 flex flex-row gap-x-4 items-center border-gray-300 border-t-2 border-b-2 py-4 px-2 overflow-hidden'>
                    <div class='flex flex-row gap-x-2 items-center'>
                        <img src={Profile} alt="" class='w-10 h-10 rounded-full bg-gray-50 p-1'/>
                        <div class='flex flex-col px-1'>
                            <h1 class='text-sm font-bold'>Yayan</h1>
                            <p class='text-xs'>yayan123@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-row items-center px-2 py-2 mt-4'>
                        <box-icon type='solid' name='spa' size='40px' color='white'></box-icon>
                        <h1 className={'font-raleway text-3xl px-2'}>{MenuIcon ? 'LUOVO' : ''}</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-between h-full '>
                    <div className='py-3 flex flex-col'>
                        {NavListTop.map((Nav, index) => (
                            <div key={index} className=' hover:bg-slate-400 rounded-md transition ease-in-out duration-500 py-1'>
                                <div className='flex flex-row justify-between items-center py-3 px-4 group'>
                                    <Link to={Nav.link} className='flex flex-row gap-x-4'>
                                        {Nav.icon}
                                        <h2 style={{transitionDelay:`${index+2}00ms`}} className={`whitespace-pre  ${MenuIcon? 'duration-500 opacity-100 translate-x-0' : 'opacity-0 translate-x-28 overflow-hidden w-0 duration-0 delay-0'}`}>{Nav.name}</h2>
                                        
                                        <h2 className={MenuIcon? 'hidden' : 'w-0 overflow-hidden absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-sm drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-16 duration-300 group-hover:w-auto'}>{Nav.HoverName}</h2>
                                    </Link>
                                </div>
                                {
                                    MenuIcon?
                                    Nav.Sub1? 
                                    <div className={SubMenuList[index-1] ? MenuStyle[0] : MenuStyle[1]}>
                                        <Link to={Nav.Sub1Link} className='hover:bg-slate-300 px-2 py-1 rounded-sm transition ease-in-out delay-200'>{Nav.Sub1}</Link>
                                        <Link to={Nav.Sub2Link} className='hover:bg-slate-300 px-2 py-1 rounded-sm transition ease-in-out delay-200'>{Nav.Sub2}</Link>
                                        <Link to={Nav.Sub3Link} className='hover:bg-slate-300 px-2 py-1 rounded-sm transition ease-in-out delay-200'>{Nav.Sub3}</Link>
                                        <Link to={Nav.Sub4Link} className='hover:bg-slate-300 px-2 py-1 rounded-sm transition ease-in-out delay-200'>{Nav.Sub4}</Link>
                                    </div> : '' 
                                    : ''
                                }
                            </div>
                        ))}
                    </div>
                        <div className={`${MenuIcon ? '' : 'justify-center' } flex flex-row gap-x-4 items-center border-gray-300 border-t-2 pt-3 px-2 overflow-hidden `}>
                            <box-icon name='log-out' onClick ={()=> Nav('/login')} color='white'></box-icon>
                            <h1 className={`text-md font-bold flex-nowrap whitespace-nowrap  ${MenuIcon ? '' : 'hidden' }`}>Sign Out</h1>
                        </div>
                    </div>

            </header>
        </nav>
    )
}

export default Navbar;