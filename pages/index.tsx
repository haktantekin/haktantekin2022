import type { NextPage } from "next";
import Footer from "../components/Layout/Footer";
import MainHeader from "../components/MainHeader/Index";
import MainContent from "../components/MainContent/Index";

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
