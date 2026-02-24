import React from 'react'
import Image from 'next/image'
import heroImage from "@/assets/images/home/UserInterface.svg";


const UserInterface = () => {
  return (
<div>
      <Image
        src={heroImage}
        alt="ClassManagement
      "
        width={500}
        height={500}
      />
      <div>
        <h2>
         A <span>user interface</span> designed for the classroom
        </h2>
        <p>
          Class provides tools to help run and manage the class such as Class
          Roster, Attendance, and more. With the Gradebook, teachers can review
          and grade tests and quizzes in real-time.
        </p>
      </div>
    </div>
  )
}

export default UserInterface