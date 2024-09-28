import Image from "next/image";
import "./globals.css";
import HeroSection from "../components/HeroSection";
import FeaturesCourses from "../components/FeaturesCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialCards from "../components/TestimonialCards";
import UpcomingWebinars from "../components/UpcomingWebinars";
import Instructors from "../components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center ">  </h1>
      <HeroSection/>
      <FeaturesCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
    </main>
   
  );
}
