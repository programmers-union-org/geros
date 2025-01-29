import InnerBanner from "../innerPage/InnerBanner";
import { Helmet } from "react-helmet-async";

const WhyWeExist = () => {
  return (
    <>
      <Helmet>
        <title>GEROS | Leading Sustainable Energy & Resource Management</title>
        <meta
          name="description"
          content="Explore GEROS, a global leader in sustainable energy and resource solutions, advancing innovation and reducing environmental footprints worldwide."
        />
        <link rel="canonical" href="http://groupgeros.com/why-we-exist" />

        <meta
          property="og:title"
          content="GEROS | Leading Sustainable Energy & Resource Management"
        />
        <meta
          property="og:description"
          content="Explore GEROS, a global leader in sustainable energy and resource solutions, advancing innovation and reducing environmental footprints worldwide."
        />
        <meta property="og:url" content="http://groupgeros.com/why-we-exist" />
        <meta
          property="og:image"
          content="http://groupgeros.com/assets/sample7-DDrfN9x2.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GEROS | Leading Sustainable Energy & Resource Management"
        />
        <meta
          name="twitter:description"
          content="Explore GEROS, a global leader in sustainable energy and resource solutions, advancing innovation and reducing environmental footprints worldwide."
        />
        <meta name="twitter:url" content="http://groupgeros.com/why-we-exist" />
        <meta
          name="twitter:image"
          content="http://groupgeros.com/assets/sample7-DDrfN9x2.jpeg"
        />
        <meta name="twitter:creator" content="@yourtwitterhandle" />
      </Helmet>

      <InnerBanner title="Why we exist" />
      <div className="max-w-[45rem] m-auto py-16 md:pt-28 pt-16 md:px-0 px-4">
        <div className="text-sm md:text-lg mb-10 font-light">
          <h2 className="text-4xl tracking-wide mb-10 font-light">
            {" "}
            Sustainability and Innovation{" "}
          </h2>
          <p className="mb-7">
            Sustainability is at the heart of everything we do at GEROS. We are
            dedicated to advancing technologies and methods that reduce the
            environmental footprint of resource extraction and use, supporting
            the transition to a more sustainable global economy.
          </p>
        </div>

        <div className="text-sm md:text-lg mb-10 font-light">
          <h2 className="text-4xl tracking-wide mb-8 font-light">
            Our Services
          </h2>

          <p className="mb-7">We operate across multiple key sectors:</p>

          <p className="mb-7">
            <b>Fossil Fuels:</b>Including oil, natural gas, and coal, we manage
            significant operations aimed at optimizing extraction, refining, and
            distribution processes.
          </p>
          <p className="mb-7">
            <b>Minerals and Metals:</b> From gold and copper to critical
            elements like lithium, cobalt, and nickel, our activities are
            crucial for everything from electronics to electric vehicle
            batteries.
          </p>

          <p className="mb-7">
            <b>Precious Metals and Gemstones:</b> We handle commodities like
            silver, platinum, and diamonds, focusing on both their industrial
            applications and luxury markets.
          </p>

          <p className="mb-7">
            <b>Industrial Minerals:</b> We supply materials such as phosphates,
            potash, and quartz, essential for agriculture, construction, and
            various manufacturing processes.
          </p>

          <p className="mb-7">
            <b>Energy Commodities Beyond Fossil Fuels:</b> Our portfolio
            includes uranium for nuclear energy and biofuels like ethanol and
            biodiesel as renewable energy sources.
          </p>

          <p className="mb-7">
            <b>Water:</b> Recognizing water as a critical, often scarce
            resource, we strategize its sustainable management to support life,
            agriculture, and industrial activities.
          </p>

          <p className="mb-7">
            <b>Rare Earth Elements:</b> Essential for high-tech applications, we
            ensure a steady and environmentally responsible supply of these
            materials.
          </p>

          <p className="mb-7">
            <b>Textiles and Fibers:</b> Our textile division deals with natural
            fibers like cotton, wool, and silk, supporting global fashion and
            luxury goods industries.
          </p>

          <p className="mb-7">
            <b>Marine Products:</b> We contribute to food security through
            sustainable fishing and seafood processing practices.
          </p>

          <p className="mb-7">
            <b>Forestry Products:</b> Including lumber and pulp, our forestry
            products support a variety of industries.
          </p>

          <p className="mb-7">
            <b>Global Energy & Resources Organisations (GEROS)</b> is a
            pioneering collective of sector-leading entities dedicated to the
            sustainable management and innovative utilization of energy and
            natural resources. Founded on the principles of diversification,
            sustainability, and strategic market innovation, GEROS serves as an
            umbrella organization that champions alternative markets and
            explores uncharted niches to alleviate pressure on saturated supply
            streams and high-demand contracts.
          </p>
        </div>
        <div className="text-sm md:text-lg mb-10 font-light">
          <h2 className="text-4xl tracking-wide mb-8 font-light">
            {" "}
            Our Vision{" "}
          </h2>
          <p className="mb-7">
            At GEROS, our vision is to lead the transformation towards a more
            sustainable and less volatile market environment. We are committed
            to reducing the ecological footprint of resource extraction and
            utilization, promoting the use of renewable sources, and fostering
            economic stability through resource diversity
          </p>

          <h2 className="text-4xl tracking-wide mb-8 font-light">
            {" "}
            Our Mission{" "}
          </h2>
          <p className="mb-7">
            To provide innovative solutions that ensure the availability,
            affordability, and sustainable management of natural resources,
            thereby supporting global economic development and environmental
            stewardship
          </p>

          <h2 className="text-4xl tracking-wide mb-8 font-light"> Join Us </h2>
          <p className="mb-7">
            Explore the resources that power the future with GEROS, where
            innovation meets sustainability.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyWeExist;
