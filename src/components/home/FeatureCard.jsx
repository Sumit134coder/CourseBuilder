import React from 'react'
import Image from 'next/image'

const FeatureCard = ({title = "" , description = "" , cardIcon , accentClass}) => {
  return (
    <div className='shadow-lg relative rounded-lg h-full'>
        <div className={`p-3 rounded-full ${accentClass} absolute -top-8 left-1/2 -translate-x-1/2 h-20 w-20 flex items-center justify-center`}>
            {cardIcon}
        </div>
        <div className='p-5 space-y-2 text-center px-13'>
            <h3 className='text-large-300 font-500 text-dark-500 py-12'>{title}</h3>
            <p className=''>{description}</p>
        </div>
    </div>
  )
}

export default FeatureCard