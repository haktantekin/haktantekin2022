import type { NextPage } from "next";
import Footer from "../components/Layout/Footer";
import MainHeader from "../components/MainHeader/Index";
import PortfolioContent from "../components/Portfolio/Index";

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
