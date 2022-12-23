import React from 'react'
import { useState } from 'react'

const Filter = () => {


  const [filter, setFilter] = useState(100)


  return (
    <>
      <div className=" flex w-[80vw] mx-auto min-h-[90px] items-center ">
        <div className=' grid grid-cols-4 '>
          <div className='flex gap-3 '>
            <label htmlFor="filter" className='text-gray-200' >Price</label>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Filter