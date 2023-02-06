import type { NextPage } from "next";
import ContactContent from "../../components/tr/Contact/Index";
import Footer from "../../components/tr/Layout/Footer";
import MainHeader from "../../components/tr/Header/Index";

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
