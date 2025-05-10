"use client";

import React, { useContext, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import MyContext from '../context/MyContext'
import { useRouter } from 'next/navigation';
import Logo from '../../public/images/newBlLogo.png'
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
            setShowMenu(false)
            setCurrentNavContext("HOME");
        } else if (currentNav === "ABOUT" && currentNavContext.toUpperCase() !== "ABOUT") {
            router.push("/about");
            setShowMenu(false)
            setCurrentNavContext("ABOUT");
        } else if (currentNav === "SERVICES" && currentNavContext.toUpperCase() !== "SERVICES") {
            router.push("/services");
            setShowMenu(false)
            setCurrentNavContext("SERVICES");
        } else if (currentNav === "COURSES" && currentNavContext.toUpperCase() !== "COURSES") {
            router.push("/courses");
            setShowMenu(false)
            setCurrentNavContext("COURSES");
        } else if (currentNav === "LOCATION" && currentNavContext.toUpperCase() !== "LOCATION") {
            router.push("/location");
            setShowMenu(false)
            setCurrentNavContext("LOCATION");
        } else if (currentNav === "CONTACT" && currentNavContext.toUpperCase() !== "CONTACT") {
            router.push("/contact");
            setShowMenu(false)
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




    function handleMenuCrossBtnClick() {
        setShowMenu(false)
    }












    return (
        <header className=' custom_glassy_effect            w-full overflow-hidden overflow-x-hidden fixed top-0 left-0 z-[1000] '>

            <div className='h-32 sm:h-28  w-full  flex justify-between px-4 sm:px-7 '>





                {/*  The logo of Navbar */}
                <div className="h-32 w-56 flex items-center select-none mb-5 ">

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
                            className="ri-menu-line text-3xl font-extralight text-orange-500"
                        ></i>
                    </div>




                    {/* Navigation items for large screens */}
                    <nav
                        onClick={handleNavParentDivClick}
                        className="nav_show_on_large_screen     flex justify-end w-full gap-x-4 font-extrabold   ">
                        {
                            navArray.map((eachNav, index) => (
                                <div
                                    key={index}
                                    style={currentNavContext == eachNav ? { borderBottom: "3px solid orange", paddingBottom: "3px" } : null}
                                    className="text-center text-sm font-bold cursor-pointer select-none transition-all duration-500 text-orange-400 ">
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
                        className="p-16 sm:p-10 flex flex-col gap-y-3 relative">

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


                        {/* cross button to hide nav panel */}
                        <div
                            onClick={handleMenuCrossBtnClick}
                            className="w-6 h-6 cursor-pointer flex items-center justify-center text-sm text-orange-500 font-bold absolute top-0 right-10 border-1 border-orange-500 rounded-full">X</div>


                    </div>


                    :

                    null
            }










        </header>

    )
}

export default React.memo(Navbar)