'use client';



import React from 'react'

const LocationAddr = () => {


      // 32.98272842389289, 70.60602034568772


      function handleViewOnMapBtnClick(){
        try{
          window.open("https://www.google.com/maps/search/?api=1&query=32.98268794679011, 70.606047579313")
        }catch(err){
          throw new Error("The map is not opened", err)
        }
      }



















  return (
    <div className='p-3 md:p-10'>
        


        <div className="min-h-[50vh] w-full overflow-x-hidden p-10 flex flex-col-reverse md:flex-row  gap-x-10">
            <div className="h-full w-full md:w-1/2 flex items-center justify-center text-center flex-col gap-8">
              <h1 className='h-max text-2xl md:text-4xl font-bold text-center p-2 pt-5'>Brightlancers Behind Shadman Plaza, Railway Road, Bannu, Khyber Pakhtunkhwa, Pakistan</h1>
              <button
              onClick={handleViewOnMapBtnClick}
              className='h-max w-max p-3 px-16 bg-blue-600 rounded-md text-zinc-100 cursor-pointer'>View on map </button>
            </div>
            <img 
            className='h-full w-full md:w-1/2 rounded-md'
            src="https://www.enablers.org/public/storage/uploads/admin/offices-images//dWSnGulQxpV0CHTCKwGdGUkZibg3hBoQHwSVE8jQ.png" alt="" />
        </div>


{/*      



 <br></br>
<hr></hr>


 <div className="pt-10">
    <h2 className='text-2xl md:text-4xl font-bold   text-center underline mb-10'>OTHER BRANCHES</h2>
    
    <div className="min-h-[50vh] w-full overflow-x-hidden p-10 flex flex-col-reverse sm:flex-row  gap-x-10">
            <div className="h-full w-full md:w-1/2 flex items-center justify-center text-center flex-col gap-8">
              <h1 className='h-max text-2xl md:text-4xl  font-bold text-center p-2 pt-5'>Brightlancers Academy Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h1>
              <button className='h-max w-max p-3 px-16 bg-blue-600 rounded-md text-zinc-100 cursor-pointer  '>View on map </button>
            </div>
            <img 
            className='h-full w-full md:w-1/2 rounded-md'
            src="https://www.enablers.org/public/storage/uploads/admin/offices-images//dWSnGulQxpV0CHTCKwGdGUkZibg3hBoQHwSVE8jQ.png" alt="" />
        </div>

 </div> 
 
 
 */}









    </div>
  )
}

export default React.memo(LocationAddr)