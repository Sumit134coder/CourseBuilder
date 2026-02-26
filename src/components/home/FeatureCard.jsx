import React from 'react'
import Image from 'next/image'

const FeatureCard = ({title = "" , description = "" , cardIcon , accentClass}) => {
  return (
    <div className='border shadow relative rounded'>
        <div className={`p-3 rounded-full ${accentClass} absolute -top-8 left-1/2 -translate-x-1/2 h-20 w-20 flex items-center justify-center`}>
            {cardIcon}
        </div>
        <div className='p-5 space-y-2'>
            <h3 className='font-semibold text-lg'>{title}</h3>
            <p className='text-gray-600'>{description}</p>
        </div>
    </div>
  )
}

export default FeatureCard