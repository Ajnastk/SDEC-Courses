import React from 'react'
import { FAQHub } from '@/components/Faq'
import { ContactForm } from '@/components/contact/Contact'

export default function Contact(){
  return (
    <div className='w-full bg-white'>
        < ContactForm />
        <FAQHub />
    </div>
  )
}
