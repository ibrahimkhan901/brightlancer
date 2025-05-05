"use client";

import React, { useContext, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import MyContext from '../context/MyContext'
import { useRouter } from 'next/navigation';
import Logo from '../../public/images/BLlogo.png'
import Image from 'next/image';














const Navbar = () => {



    let [showMenu, setShowMenu] = useState(false)
    let router = useRouter()

    let {
        currentNavContext,
        setCurrentNavContext
    } = useContext(MyContext)
    let navArray = ["HOME", "ABOUT", "SERVICES", "COURSES", "LOCATION", "CONTACT"];






    function handleNavParentDivClick(e) {
        e.stopPropagation();

        let currentNav = e.target.innerText;
        console.log(currentNav);

        if (currentNav === "HOME" && currentNavContext.toUpperCase() !== "HOME") {
            router.push("/");
            setCurrentNavContext("HOME");
        } else if (currentNav === "ABOUT" && currentNavContext.toUpperCase() !== "ABOUT") {
            router.push("/about");
            setCurrentNavContext("ABOUT");
        } else if (currentNav === "SERVICES" && currentNavContext.toUpperCase() !== "SERVICES") {
            router.push("/services");
            setCurrentNavContext("SERVICES");
        } else if (currentNav === "COURSES" && currentNavContext.toUpperCase() !== "COURSES") {
            router.push("/courses");
            setCurrentNavContext("COURSES");
        } else if (currentNav === "LOCATION" && currentNavContext.toUpperCase() !== "LOCATION") {
            router.push("/location");
            setCurrentNavContext("LOCATION");
        } else if (currentNav === "CONTACT" && currentNavContext.toUpperCase() !== "CONTACT") {
            router.push("/contact");
            setCurrentNavContext("CONTACT");
        }
    }






    function handleMenuIconClick() {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }

















    return (
        <header className=' custom_glassy_effect             h-max w-full overflow-x-hidden fixed top-0 left-0 z-[1000] '>

            <div className='h-18 sm:h-24 w-full  flex justify-between px-4 sm:px-7'>





                {/*  The logo of Navbar */}
                <div className="h-full w-56 flex items-center select-none">
                  
                  <Image
                    src={Logo}
                    alt='Logo of Brightlancer'
                    height={400}
                    width={800}
                    className='h-[100%] w-max '
                  />
                  
                   </div>








                <div className="h-full flex flex-1 items-center lg:justify-end ">

                    {/* Menu icon for small screens */}
                    <div className="nav_show_on_small_screen        h-max w-full  flex   justify-end items-center  cursor-pointer select-none">
                        <i
                            onClick={handleMenuIconClick}
                            className="ri-menu-line text-3xl font-extralight "
                        ></i>
                    </div>




                    {/* Navigation items for large screens */}
                    <nav
                        onClick={handleNavParentDivClick}
                        className="nav_show_on_large_screen     flex justify-end w-full gap-x-4">
                        {
                            navArray.map((eachNav, index) => (
                                <div
                                key={index}
                                    style={currentNavContext == eachNav ? { borderBottom: "3px solid orange", paddingBottom: "3px" } : null}
                                    className="text-center text-sm font-medium cursor-pointer select-none transition-all duration-500">
                                    {eachNav}
                                </div>
                            ))
                        }
                    </nav>


                </div>

















            </div>









            {/* The menu for navigation which show when menu icon is clicked in small screen */}

            {
                showMenu ?



                    <div
                        onClick={handleNavParentDivClick}
                        className="p-5 flex flex-col gap-y-3">

                        {
                            navArray.map((eachNav, index) => {
                                return (
                                    <div
                                        className='cursor-pointer select-none'
                                        key={index}>
                                        {eachNav}
                                    </div>
                                )
                            })
                        }


                        
                    </div>


                    :

                    null
            }










        </header>

    )
}

export default React.memo(Navbar)