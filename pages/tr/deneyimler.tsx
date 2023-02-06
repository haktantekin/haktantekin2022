import type { NextPage } from "next";
import Footer from "../../components/tr/Layout/Footer";
import MainHeader from "../../components/tr/Header/Index";
import ExperiencesContent from "../../components/tr/Experiences/Index";

const Experiences: NextPage = () => {
  return (
    <>
      <MainHeader />
      <ExperiencesContent />
      <Footer />
    </>
  );
};

export default Experiences;
