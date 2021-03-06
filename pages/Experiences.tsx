import type { NextPage } from "next";
import Footer from "../components/Layout/Footer";
import MainHeader from "../components/Header/Index";
import ExperiencesContent from "../components/Experiences/Index";

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
