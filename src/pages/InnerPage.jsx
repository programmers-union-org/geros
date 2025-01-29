import { useEffect } from "react";
import InnerBanner from "../innerPage/InnerBanner";
import BannerDetail from "../innerPage/BannerDetail";
import { Helmet } from "react-helmet-async";

const InnerPage = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          GEROS | Innovating Sustainable Energy & Resource Management
        </title>
        <meta
          name="description"
          content="GEROS drives innovation in sustainable energy and resources, reducing environmental impact and enhancing efficiency across global markets for a sustainable future"
        />
        <link rel="canonical" href="http://groupgeros.com/about-geros" />

        <meta
          property="og:title"
          content="GEROS | Innovating Sustainable Energy & Resource Management"
        />
        <meta
          property="og:description"
          content="GEROS drives innovation in sustainable energy and resources, reducing environmental impact and enhancing efficiency across global markets for a sustainable future"
        />
        <meta property="og:url" content="http://groupgeros.com/about-geros" />
        <meta
          property="og:image"
          content="http://groupgeros.com/assets/sample8-DvcFklyJ.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GEROS | Innovating Sustainable Energy & Resource Management"
        />
        <meta
          name="twitter:description"
          content="GEROS drives innovation in sustainable energy and resources, reducing environmental impact and enhancing efficiency across global markets for a sustainable future"
        />
        <meta name="twitter:url" content="http://groupgeros.com/about-geros" />
        <meta
          name="twitter:image"
          content="http://groupgeros.com/assets/sample8-DvcFklyJ.jpeg"
        />
        <meta name="twitter:creator" content="@yourtwitterhandle" />
      </Helmet>
      <InnerBanner title="About Geros" />
      <BannerDetail />
    </div>
  );
};

export default InnerPage;
