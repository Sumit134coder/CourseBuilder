import React from 'react'
import Image from 'next/image'

const PreviewRounded = ({imageSrc="" , className ="", tags = [] , ...rest}) => {
  return (
    <div className={`relative  ${className}`}>
        <Image src={imageSrc} {...rest} className='rounded' />
    </div>
  )
}

export default PreviewRounded