import type { NextPage } from "next";
import Footer from "../../components/tr/Layout/Footer";
import MainHeader from "../../components/tr/Header/Index";
import MainContent from "../../components/tr/MainContent/Index";

const Home: NextPage = () => {
  return (
    <>
      <MainHeader />
        <MainContent />
      <Footer />
    </>
  );
};

export default Home;
