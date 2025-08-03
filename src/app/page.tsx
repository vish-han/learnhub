import Image from "next/image";
import HeroSection from "./components/hero";
import MentorshipPlatform from "./components/mentorship";
import CommunitySection from "./components/community";
import ServicesSection from "./components/service";
import MentorsSection from "./components/mentor";
import TestimonialsSection from "./components/testimonials";

export default function Home() {
  return (
    <>
     <HeroSection/>
     <MentorshipPlatform/>
     <CommunitySection/>
     <ServicesSection/>
     <MentorsSection/>
     <TestimonialsSection/>
    </>
  );
}
