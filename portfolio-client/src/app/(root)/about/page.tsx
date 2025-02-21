import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experiance";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About me - Kamanashis Biswas",
  description: "Mohammad Kamanashis Biswas is a web developer",
};
const About = () => {
  return (
    <div className="mt-24">
      <AboutSection page="page" />
      <Experience />
    </div>
  );
};

export default About;
