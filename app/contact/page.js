import React from "react";
import { FAQHub } from "@/components/Faq";
import { ContactForm } from "@/components/contact/Contact";
import CommunityCard from "@/components/CommunityCard";

export default function Contact() {
  return (
    <div className=" bg-white">
      <ContactForm />
      <FAQHub />
      <CommunityCard />
    </div>
  );
}
