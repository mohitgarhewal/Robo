import React from 'react'

const Scroll = ({children}) => {
  return (
    <div className="h-[500px] overflow-y-scroll p-4 border-2 border-gray-300 rounded-lg">
      {children}
    </div>
  )
}

export default Scroll