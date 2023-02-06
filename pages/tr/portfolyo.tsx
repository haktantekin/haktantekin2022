import type { NextPage } from "next";
import Footer from "../../components/tr/Layout/Footer";
import MainHeader from "../../components/tr/Header/Index";
import PortfolioContent from "../../components/tr/Portfolio/Index";

const Experiences: NextPage = () => {
  return (
    <>
      <MainHeader />
      <PortfolioContent />
      <Footer />
    </>
  );
};

export default Experiences;
