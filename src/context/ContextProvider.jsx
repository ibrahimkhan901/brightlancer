"use client";

import React, { useState } from 'react'
import MyContext from './MyContext'


const ContextProvider = ({ children }) => {

  let [currentNavContext, setCurrentNavContext] = useState("HOME")


  let [currentClickedCourseData, setCurrentClickedCourseData]= useState("")








  return (
    <MyContext.Provider value={{
      currentNavContext, setCurrentNavContext,
      currentClickedCourseData,setCurrentClickedCourseData

    }}>





      {children}


    </MyContext.Provider>
  )
}

export default ContextProvider