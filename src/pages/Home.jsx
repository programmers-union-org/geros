import Banner from "../component/homePage/Banner";
import DiscoverSection from "../component/homePage/DiscoverSection";
import ThreeCard from "../component/homePage/ThreeCard";
import AboutBg from "../component/homePage/AboutBg";
import VideoSection from "../component/homePage/VideoSection";
import PdfReactPdf from "../component/homePage/PdfReactPdf";

const Home = () => {
  return (
    <div className="font-custom">
      <Banner />
      <DiscoverSection />
      <ThreeCard />
      <VideoSection />
      <PdfReactPdf src="/group_geros_2025.pdf" />
      <AboutBg />
    </div>
  );
};

export default Home;
