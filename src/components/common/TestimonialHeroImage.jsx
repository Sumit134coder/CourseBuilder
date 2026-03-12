import React from 'react'
import Image from 'next/image'
import heroImage from '@/assets/images/home/GirlSmiling.png'

const TestimonialHeroImage = () => {
  return (
    <Image src={heroImage} alt="Testimonial section" height={700} width={500} className='' />
  )
}

export default TestimonialHeroImage