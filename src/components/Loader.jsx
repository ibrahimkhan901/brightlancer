import React from 'react'

const Loader = ({height, width}) => {
  return (
    <div>
        
        <div className='custom_rotate       border-2 border-zinc-50  border-t-2 border-t-zinc-800 rounded-full' 
        style={{height:`${height}px`, width:`${width}px`}}
        ></div>

    </div>
  )
}

export default Loader