import React from 'react'
import { FaHourglass } from 'react-icons/fa'

export default function NoOrder() {
  return (
    <div className="w-full h-[80vh] grid place-items-center">
    <div className="flex flex-col gap-3 items-center">
      <FaHourglass className="text-xl" />
      <h5>No order records available</h5>
    </div>
  </div>
  )
}


