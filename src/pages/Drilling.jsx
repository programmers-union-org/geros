import InnerBanner from "../innerPage/InnerBanner";
import { Helmet } from "react-helmet-async";

const Drilling = () => {
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

      <InnerBanner title="Drilling Services" />
      <div className="max-w-[45rem] m-auto py-16 md:pt-28 pt-16 md:px-0 px-4">
        <div className="text-sm md:text-lg mb-10 font-light">
          <h2 className="text-4xl tracking-wide mb-10 font-light">
            Drilling Services
          </h2>

          <h3 className="text-2xl tracking-wide mb-5 font-light">
            Contract Drilling
          </h3>
          <p className="mb-7">
            <b>Onshore and Offshore Drilling:</b> Companies provide drilling
            rigs and the necessary equipment and personnel to drill wells on
            land and at sea.
          </p>
          <p className="mb-7">
            <b>Mobile Offshore Drilling Units (MODUs):</b> Specialized vessels
            or platforms equipped to perform drilling activities in the marine
            environment.
          </p>

          <h3 className="text-2xl tracking-wide mb-5 font-light">
            Directional and Horizontal Drilling
          </h3>
          <p className="mb-7">
            <b>Directional Drilling:</b> Techniques that allow drilling at
            multiple angles, not just vertically, to maximize exposure to the
            reservoir.
          </p>
          <p className="mb-7">
            <b>Horizontal Drilling:</b> A type of directional drilling where the
            well is turned horizontally at depth to increase the reservoir
            contact area.
          </p>

          <h3 className="text-2xl tracking-wide mb-5 font-light">
            Drilling Optimization
          </h3>
          <p className="mb-7">
            <b>Real-Time Monitoring:</b> Using sensors and telemetry to monitor
            the drilling process in real time, allowing immediate adjustments to
            improve efficiency and safety.
          </p>
          <p className="mb-7">
            <b>Drill Bit Technology:</b> Advanced drill bits designed to
            optimize rate of penetration and durability under various geological
            conditions.
          </p>

          <h3 className="text-2xl tracking-wide mb-5 font-light">
            Well Design and Engineering
          </h3>
          <p className="mb-7">
            <b>Well Planning:</b> Detailed planning of well architecture,
            trajectory, and the selection of appropriate drilling technologies.
          </p>
          <p className="mb-7">
            <b>Wellbore Stability Analysis:</b> Assessing geological formations
            to predict and manage potential instabilities in the wellbore during
            drilling.
          </p>

          <h3 className="text-2xl tracking-wide mb-5 font-light">
            Well Completion Services
          </h3>
          <p className="mb-7">
            <b>Well Casing and Cementing:</b> Installing casing to stabilize the
            wellbore and using cement to seal the well, preventing fluid
            migration between underground formations.
          </p>
          <p className="mb-7">
            <b>Completion Engineering:</b> Designing and executing the technical
            processes to prepare a well for production or injection.
          </p>

          <h3 className="text-2xl tracking-wide mb-5 font-light">
            Managed Pressure Drilling (MPD)
          </h3>
          <p className="mb-7">
            Techniques that precisely control the pressure profile in the
            wellbore, enhancing safety and efficiency by managing geological
            hazards.
          </p>

          <h3 className="text-2xl tracking-wide mb-5 font-light">
            Mud Logging and Drilling Fluids Services
          </h3>
          <p className="mb-7">
            Monitoring and analyzing drilling cuttings and mud to provide
            real-time data on drilling status and formation properties.
          </p>
        </div>
      </div>
    </>
  );
};

export default Drilling;
