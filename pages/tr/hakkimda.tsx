import type { NextPage } from "next";
import Footer from "../../components/tr/Layout/Footer";
import MainHeader from "../../components/tr/Header/Index";
import AboutContent from "../../components/tr/About/Index";

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
