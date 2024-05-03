import React from 'react'
import image from './empty.svg'

function EmprtList() {
  return (
    
        <div className="hidden last:flex flex-col items-center py-10">
          <img width={200} className="mb-5" src={image} alt="note" />
          <p className="text-sm">There is no list.</p>
        
      </div>
  )
}

export default EmprtList
