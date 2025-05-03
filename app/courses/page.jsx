import AllCourses from '@/components/courses/AllCourses'
import BenefitsSection from '@/components/BenefitsSection'
import { CourseTopics } from '@/components/CourseTopics'
import { FAQHub } from '@/components/Faq'
import React from 'react'

const page = () => {
  return (
    <div className="bg-white">
      <AllCourses/>
        <BenefitsSection/>
        <FAQHub/>
        <div className='relative'>
        <CourseTopics/>
        <div className="absolute inset-0 rounded-b-[4rem] shadow-[0_60px_80px_-20px_rgba(0,0,0,0.1)]"></div>
        </div>
    </div>
  )
}

export default page