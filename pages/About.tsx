import type { NextPage } from "next";
import Footer from "../components/Layout/Footer";
import MainHeader from "../components/MainHeader/Index";
import AboutContent from "../components/About/Index";

const About: NextPage = () => {
  return (
    <>
      <MainHeader />
        <AboutContent />
      <Footer />
    </>
  );
};

export default About;
