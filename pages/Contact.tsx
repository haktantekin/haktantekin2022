import type { NextPage } from "next";
import ContactContent from "../components/Contact/Index";
import Footer from "../components/Layout/Footer";
import MainHeader from "../components/Header/Index";

const Experiences: NextPage = () => {
  return (
    <>
      <MainHeader />
      <ContactContent />
      <Footer />
    </>
  );
};

export default Experiences;
