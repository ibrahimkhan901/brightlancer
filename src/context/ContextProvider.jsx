"use client";

import React, { useState } from 'react'
import MyContext from './MyContext'


const ContextProvider = ({ children }) => {

  let [currentNavContext, setCurrentNavContext] = useState("HOME")


  let [currentClickedCourseData, setCurrentClickedCourseData]= useState("")

  let [appliedCourseData, setApplyCourseData]= useState(null)








  return (
    <MyContext.Provider value={{
      currentNavContext, setCurrentNavContext,
      currentClickedCourseData,setCurrentClickedCourseData,
      appliedCourseData, setApplyCourseData

    }}>





      {children}


    </MyContext.Provider>
  )
}

export default ContextProvider