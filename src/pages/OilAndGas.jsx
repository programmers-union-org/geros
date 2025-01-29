import InnerBanner from "../innerPage/InnerBanner";
import { Helmet } from "react-helmet-async";

const OilAndGas = () => {
  return (
    <>
      <Helmet>
        <title>Oil and Gas Services | Global Energy & Resources Organisations </title>
        <meta
          name="description"
          content="Comprehensive oil and gas services including exploration, drilling, production, and logistics."
        />
        <link rel="canonical" href="http://groupgeros.com/oil-and-gas" />
        <meta property="og:title" content="Oil and Gas Services | Global Energy & Resources Organisations " />
        <meta
          property="og:description"
          content="Comprehensive oil and gas services including exploration, drilling, production, and logistics."
        />
        <meta property="og:url" content="http://groupgeros.com/oil-and-gas" />
        <meta
          property="og:image"
          content="http://groupgeros.com/assets/sample10-CfiNuJNM.jpeg"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oil and Gas Services | Global Energy & Resources Organisations" />
        <meta
          name="twitter:description"
          content="Comprehensive oil and gas services including exploration, drilling, production, and logistics."
        />
        <meta name="twitter:url" content="http://groupgeros.com/oil-and-gas" />
        <meta
          name="twitter:image"
          content="http://groupgeros.com/assets/sample10-CfiNuJNM.jpeg"
        />
        <meta name="twitter:creator" content="@yourtwitterhandle" />
      </Helmet>
      <div>
        <InnerBanner title="Oil and Gas" />
        <div className="max-w-[45rem] m-auto py-16 md:pt-28 pt-16 md:px-0 px-4">
          <div className="text-sm md:text-lg mb-10 font-light">
            <h2 className="text-[40px] tracking-wide mb-10 flex flex-col gap-7 md:flex-row">
              <h2>Exploration</h2>
              <h1>Services</h1>
            </h2>

            <p className="mb-7">
              Seismic data acquisition and processing to identify potential oil
              and gas reserves. Geological and geophysical surveys to assess
              sub-surface structures
            </p>
            <div>
              <p className="mb-5 text-2xl ">Seismic Surveying</p>
              <p className="mb-5">
                <b className="">2D and 3D Seismic Imaging:</b> Captures seismic
                waves to create a detailed map of geological structures beneath
                the earth&apos;s surface, which helps in identifying potential oil
                and gas reservoirs.
              </p>
              <p className="mb-7">
                <b>4D Seismic Monitoring:</b> Used to monitor changes in a
                reservoir over time, which can inform decisions on optimizing
                production.
              </p>
              <p className="mb-5 text-2xl font-medium"> Geological Services </p>
              <p className="mb-5">
                <b>Surface Geochemical Analysis:</b> Involves analyzing soil,
                sediments, and rocks to detect naturally occurring hydrocarbons
                as indicators of oil and gas deposits below.
              </p>
              <p className="mb-7">
                <b>Field Mapping:</b> Detailed mapping of geological formations
                at the surface to infer the geological structures beneath.
              </p>
              <p className="mb-5 text-2xl font-medium">Geophysical Services</p>
              <p className="mb-5">
                <b>Magnetotelluric (MT) Surveying:</b> Measures the earth&apos;s
                natural electromagnetic field to image geological structures.
              </p>
              <p className="mb-7">
                <b>Gravity and Magnetic Surveys:</b> Measure variations in the
                earth&apos;s gravitational and magnetic fields to suggest the
                presence of hydrocarbon-bearing formations.
              </p>
              <p className="mb-5 text-2xl font-medium"> Aerial Surveys </p>
              <p className="mb-7">
                Using aircraft equipped with specialized sensors to gather
                geological and geophysical data over large, inaccessible areas
                quickly
              </p>
              <p className="mb-5 text-2xl font-medium">Exploratory Drilling </p>
              <p className="mb-5">
                <b> Wildcat Drilling:</b> Drilling in unproven areas to discover
                new oil or gas fields.
              </p>
              <p className="mb-7">
                <b>Core Sampling:</b> Extracting rock samples from deep below
                the earth to analyze the reservoir&apos;s properties.
              </p>
              <p className="mb-5 text-2xl font-medium">
                Environmental Impact Assessments
              </p>
              <p className="mb-7">
                Conducting studies and evaluations to understand the potential
                environmental impacts of exploration activities, ensuring
                compliance with regulations and mitigating adverse effects.
              </p>
              <p className="mb-5 text-2xl font-medium">
                Data Processing and Interpretation
              </p>
              <p className="mb-7">
                Analyzing all collected geological, geophysical, and seismic
                data to create models of the subsurface, helping to predict the
                location and size of oil and gas deposits.
              </p>
              <p className="mb-5 text-2xl font-medium">
                Consultancy and Management Services
              </p>
              <p className="mb-7">
                Providing expert advice on exploration strategies and portfolio
                management to maximize the success rate of finding viable
                hydrocarbon reserves.
              </p>
            </div>
            <h2 className="text-4xl tracking-wide mb-10 ">Drilling Services</h2>
            <p className="mb-7">
              Contract drilling, which includes using mobile offshore drilling
              units and onshore drilling rigs. Directional and horizontal
              drilling to maximize recovery and minimize the environmental
              footprint.
            </p>
            <div>
              <p className="mb-5 text-2xl font-medium"> Contract Drilling</p>
              <p className="mb-5">
                <b> Onshore and Offshore Drilling:</b>
                Companies provide drilling rigs and the necessary equipment and
                personnel to drill wells on land and at sea.
              </p>
              <p className="mb-7">
                <b> Mobile Offshore Drilling Units (MODUs):</b>
                Specialized vessels or platforms equipped to perform drilling
                activities in the marine environment.
              </p>
              <p className="mb-5 text-2xl font-medium">
                Directional and Horizontal Drilling
              </p>
              <p className="mb-5">
                <b>Directional Drilling:</b>
                Techniques that allow drilling at multiple angles, not just
                vertically, to maximize exposure to the reservoir.
              </p>
              <p className="mb-7">
                <b>Horizontal Drilling:</b>A type of directional drilling where
                the well is turned horizontally at depth to increase the
                reservoir contact area
              </p>
              <p className="mb-5 text-2xl font-medium">
                {" "}
                Drilling Optimization{" "}
              </p>
              <p className="mb-5">
                <b>Real-Time Monitoring:</b>
                Using sensors and telemetry to monitor the drilling process in
                real time, allowing immediate adjustments to improve efficiency
                and safety.
              </p>
              <p className="mb-7">
                <b> Drill Bit Technology:</b>
                Advanced drill bits designed to optimize rate of penetration and
                durability under various geological conditions.
              </p>
              <p className="mb-5 text-2xl font-medium">
                Well Design and Engineering
              </p>
              <p className="mb-5">
                <b>Well Planning:</b>
                Detailed planning of well architecture, trajectory, and the
                selection of appropriate drilling technologies.
              </p>
              <p className="mb-7">
                <b> Wellbore Stability Analysis:</b>
                Assessing geological formations to predict and manage potential
                instabilities in the wellbore during drilling.
              </p>
              <p className="mb-5 text-2xl font-medium">
                {" "}
                Well Completion Services{" "}
              </p>
              <p className="mb-5">
                <b>Well Casing and Cementing:</b>
                Installing casing to stabilize the wellbore and using cement to
                seal the well, preventing fluid migration between underground
                formations.
              </p>
              <p className="mb-7">
                <b> Completion Engineering:</b>
                Designing and executing the technical processes to prepare a
                well for production or injection
              </p>
              <p className="mb-5 text-2xl font-medium">
                Managed Pressure Drilling (MPD){" "}
              </p>
              <p className="mb-7">
                <b>MPD Systems:</b>
                Techniques that precisely control the pressure profile in the
                wellbore, enhancing safety and efficiency by managing geological
                hazards
              </p>
              <p className="mb-5 text-2xl font-medium">
                Mud Logging and Drilling Fluids Services{" "}
              </p>
              <p className="mb-5">
                <b>Mud Logging:</b>
                Monitoring and analyzing drilling cuttings and mud to provide
                real-time data on drilling status and formation properties.
              </p>
              <p className="mb-7">
                <b>Drilling Fluids Management:</b>
                Designing, testing, and managing the performance of drilling
                fluids to optimize drilling efficiency and minimize
                environmental impact.
              </p>
              <p className="mb-5 text-2xl font-medium">
                Underbalanced and Overbalanced Drilling{" "}
              </p>
              <p className="mb-5">
                <b>Underbalanced Drilling (UBD):</b>
                Drilling with a pressure in the wellbore that is lower than the
                formation pressure to increase drilling speed and reduce
                formation damage.
              </p>
              <p className="mb-7">
                <b> Overbalanced Drilling (OBD):</b>
                Maintaining a higher pressure in the wellbore than in the
                surrounding rock to prevent fluids from entering the wellbore,
                commonly used for safety and stability.
              </p>
            </div>
            <h2 className="text-4xl tracking-wide mb-10 ">
              Safety and Training Services
            </h2>
            <div>
              <p className="mb-5 text-2xl font-medium"></p>
              <p className="mb-5">
                <b>Rig Safety Inspections:</b>
                Regular inspections to ensure compliance with safety standards
                and regulations.
              </p>
              <p className="mb-7">
                <b>Drilling Personnel Training:</b>
                Providing specialized training for drilling operations staff to
                ensure high standards of safety and efficiency.
              </p>
            </div>
            <h2 className="text-4xl tracking-wide mb-10 ">Well Services</h2>
            <p>Well construction, completion, and sidetracking services.</p>
            <p>
              Well stimulation, including hydraulic fracturing and acidizing to
              enhance production.
            </p>
            <p className="mb-7">
              Well intervention and workover services to maintain or increase
              oil and gas production.
            </p>
            <div>
              <p className="mb-5 text-2xl font-medium"> Well Completion</p>
              <p className="mb-5">
                <b>Perforation:</b>
                Creating holes in the casing or liner to allow oil and gas to
                flow into the wellbore.
              </p>
              <p className="mb-7">
                <b>Stimulation:</b>
                Techniques such as hydraulic fracturing and acidizing to enhance
                the flow of hydrocarbons by increasing the permeability of the
                reservoir rocks.
              </p>
              <p className="mb-5 text-2xl font-medium">Wireline Services:</p>
              <p className="mb-7">
                Utilizing an electric cable to lower tools and instruments into
                the well for diagnostics, maintenance, and operational
                activities like logging, perforating, and reservoir evaluation.
              </p>
              <p className="mb-5 text-2xl font-medium"> Well Intervention </p>
              <p className="mb-5">
                <b>Coiled Tubing Operations:</b>
                Using a continuous length of steel pipe to perform work inside
                the well, such as pumping fluids, sand control, and cleaning out
                the well.
              </p>
              <p className="mb-5">
                <b>Slickline Services:</b>
                Deploying tools and equipment into the well for tasks like
                changing valves, retrieving samples, or removing debris using a
                smooth, non-electric cable.
              </p>
              <p className="mb-7">
                <b>Wireline Services:</b>
                Utilizing an electric cable to lower tools and instruments into
                the well for diagnostics, maintenance, and operational
                activities like logging, perforating, and reservoir evaluation.
              </p>
              <p className="mb-5 text-2xl font-medium">
                {" "}
                Well Maintenance and Repair
              </p>
              <p className="mb-5">
                <b>Workover Operations:</b>
                Conducting major maintenance or remedial treatments on an
                existing well to restore or enhance its production.
              </p>
              <p className="mb-7">
                <b> Sand Control:</b>
                Implementing various methods to manage sand production, which
                can obstruct the wellbore, erode equipment, and reduce well
                productivity.
              </p>
              <p className="mb-5 text-2xl font-medium">Artificial Lift </p>
              <p className="mb-5">
                <b>Rod Lift (Sucker Rod Pumping):</b>
                Using a surface pump to drive a series of rods that operate a
                downhole pump, commonly used in wells with declining pressure.
              </p>
              <p className="mb-5">
                <b> Gas Lift:</b>
                Injecting gas into the well to lighten the density of the fluid
                column and push oil to the surface.
              </p>
              <p className="mb-7">
                <b> Electric Submersible Pumps (ESPs): </b>
                Deploying electrical pumps downhole to push fluids to the
                surface, suitable for deep wells with large fluid volumes.
              </p>
              <p className="mb-5 text-2xl font-medium">Flow Assurance </p>
              <p className="mb-5">
                <b>Hydrate Management:</b>
                Preventing the formation of hydrates (ice-like structures) that
                can block flow by managing temperature and chemical injection.
              </p>
              <p className="mb-7">
                <b> Scale Inhibition:</b>
                reating the well with chemicals to prevent scale deposits that
                can reduce flow by clogging pipes and equipment
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Well Decommissioning{" "}
              </p>
              <p className="mb-7">
                <b>Plugging and Abandonment (P&A):</b>
                Safely sealing and abandoning a well that is no longer
                productive or needed, involving filling the well with cement and
                restoring the site.
              </p>

              <p className="mb-5 text-2xl font-medium">Production Testing </p>
              <p className="mb-5">
                <b>Well Testing:</b>
                Assessing the flow rate, pressure, and composition of fluids
                from the well to evaluate its productivity and the
                characteristics of the reservoir.
              </p>
              <p className="mb-7">
                <b>Downhole Pressure Measurement:</b>
                Monitoring pressure changes over time to assess reservoir
                performance and plan future operations.
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Data Acquisition and Management{" "}
              </p>
              <p className="mb-5">
                <b>Production Logging:</b>
                Collecting data on how different phases of fluids (oil, water,
                gas) flow inside the well to optimize production.
              </p>
              <p className="mb-7">
                <b>Reservoir Monitoring:</b>
                Continuous or periodic surveillance using sensors and tools to
                assess the condition of the reservoir and optimize recovery
                strategies.
              </p>

              <p className="mb-7">
                These services are critical for the efficient and safe operation
                of wells throughout their lifecycle, from initial drilling to
                final decommissioning. They involve a mix of mechanical,
                chemical, and hydraulic processes, all tailored to the specific
                needs and conditions of each well.
              </p>
            </div>
            <h2 className="text-4xl tracking-wide mb-10 ">
              Production Services
            </h2>
            <p>
              Installation and maintenance of production platforms and
              equipment. Subsea technologies for developing deepwater
              hydrocarbon resources. Artificial lift systems to increase the
              flow of oil from wells.
            </p>
            <div>
              <p className="mb-5 text-2xl font-medium">
                Production Optimization{" "}
              </p>
              <p className="mb-5">
                <b>Production Enhancement:</b>
                Techniques to increase the rate of hydrocarbon recovery using
                various mechanical, chemical, and process interventions.
              </p>
              <p className="mb-7">
                <b> Reservoir Management:</b>
                Managing the reservoir to maximize economic recovery, involving
                monitoring, modeling, and planning operations.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Surface Production Facilities{" "}
              </p>
              <p className="mb-5">
                <b>Design and Construction:</b>
                Engineering and constructing the necessary infrastructure to
                process, store, and transport oil and gas.
              </p>
              <p className="mb-7">
                <b>Operation and Maintenance:</b>
                Managing daily operations, performing regular maintenance, and
                upgrading facilities to ensure optimal performance.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Subsea Production Systems
              </p>
              <p className="mb-5">
                <b>Subsea Equipment Installation:</b>
                Installing and commissioning subsea hardware like trees,
                manifolds, and umbilicals.
              </p>
              <p className="mb-7">
                <b>Subsea Pipeline Services:</b>
                Laying and maintaining pipelines for transporting oil and gas
                from subsea wellheads to surface processing facilities.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Artificial Lift Systems
              </p>
              <p className="mb-5">
                <b>Installation and Maintenance:</b>
                Implementing and maintaining systems like rod lifts, gas lifts,
                and ESPs (Electric Submersible Pumps) to enhance the extraction
                of oil and gas from wells.
              </p>
              <p className="mb-7">
                <b>Optimization and Troubleshooting: </b>
                Adjusting artificial lift parameters and solving operational
                issues to maximize efficiency and minimize downtime
              </p>

              <p className="mb-5 text-2xl font-medium"> Flow Assurance </p>
              <p className="mb-5">
                <b>Hydrate Management:</b>
                Applying thermal, chemical, or mechanical methods to prevent the
                formation of hydrates in pipelines and equipment.
              </p>
              <p className="mb-7">
                <b>Scale and Corrosion Control:</b>
                Implementing chemical treatments and material selections to
                protect against scale deposits and corrosion, which can impair
                production operations.
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Production Testing and Measurement{" "}
              </p>
              <p className="mb-5">
                <b>Well Testing:</b>
                Conducting tests to measure flow rates, pressure, temperature,
                and fluid composition to evaluate the productive capacity of a
                well.
              </p>
              <p className="mb-7">
                <b>Metering and Allocation:</b>
                Measuring and recording the quantity and quality of oil and gas
                produced, essential for regulatory compliance and allocation of
                revenue.
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Production Chemicals{" "}
              </p>
              <p className="mb-5">
                <b>Supply and Management:</b>
                Providing specialized chemicals used in the production process
                to enhance flow and treat oil and gas streams.
              </p>
              <p className="mb-7">
                <b>Chemical Injection Systems:</b>
                Designing and maintaining systems for injecting chemicals into
                the production stream to improve recovery and maintain asset
                integrity.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Safety and Environmental Services
              </p>
              <p className="mb-5">
                <b>Safety Systems Management:</b>
                Implementing safety measures to protect personnel, facilities,
                and the environment.
              </p>
              <p className="mb-7">
                <b>Environmental Monitoring and Compliance:</b>
                Monitoring environmental impacts and ensuring compliance with
                local and international environmental regulations.
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Data Management and Digital Services{" "}
              </p>
              <p className="mb-5">
                <b>Digital Oilfield Technologies:</b>
                Utilizing digital tools and data analytics to enhance
                decision-making and optimize production operations.
              </p>
              <p className="mb-7">
                <b>Remote Monitoring and Control:</b>
                Implementing systems to monitor and control production
                operations remotely, reducing the need for onsite personnel and
                enhancing safety.
              </p>

              <p className="mb-7">
                These services ensure that oil and gas production is conducted
                efficiently, safely, and in compliance with regulatory
                requirements, from the point of extraction to delivery. They
                involve a combination of technical expertise, advanced
                technology, and operational management to optimize the value of
                hydrocarbon resources.
              </p>
            </div>

            <h2 className="text-4xl tracking-wide mb-10 ">Pipeline Services</h2>
            <p>
              Pipeline construction and maintenance for transportation of oil
              and gas. Inspection and repair services, including integrity
              management and leak detection.
            </p>
            <p className="mb-5">
              Pipeline services in the oil and gas industry are essential for
              the safe and efficient transportation of hydrocarbons from
              production sites to processing facilities and eventually to
              end-users. Here&apos;s a detailed look at the main services provided
              under this category:
            </p>
            <div>
              <p className="mb-5 text-2xl font-medium">
                {" "}
                Pipeline Design and Engineering
              </p>
              <p className="mb-5">
                <b>Route Selection: </b>
                Analyzing terrain, environmental impact, and socio-economic
                factors to determine the optimal pipeline route.
              </p>
              <p className="mb-7">
                <b>Pipeline Engineering: </b>
                Detailed design of pipeline systems, including specifications
                for materials, diameter, wall thickness, and corrosion
                protection systems.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Pipeline Construction{" "}
              </p>
              <p className="mb-5">
                <b>Construction Management: </b>
                Overseeing all aspects of pipeline construction, from planning
                and procurement to field execution.
              </p>
              <p className="mb-7">
                <b>Welding and Fabrication: </b>
                Ensuring high-quality welding and fabrication standards to
                prevent leaks and failures.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Pipeline Inspection and Maintenance{" "}
              </p>
              <p className="mb-5">
                <b>In-line Inspection (ILI):</b>
                Using devices known as &quot;pigs&quot; to inspect the interior of
                pipelines for corrosion, deformation, or other irregularities.
              </p>
              <p className="mb-7">
                <b> Direct Assessment:</b>
                Techniques to assess the condition of pipelines externally
                through soil sampling and corrosion analysis
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Pipeline Repair and Rehabilitation{" "}
              </p>
              <p className="mb-5">
                <b>Leak Detection and Repair:</b>
                Utilizing advanced technologies to detect leaks early and
                deploying quick-response teams to repair them.
              </p>
              <p className="mb-7">
                <b>Pipeline Rehabilitation:</b>
                Methods such as slip lining, Cured-in-Place Pipe (CIPP), and
                pipe bursting to restore the integrity and extend the life of
                existing pipelines
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Pipeline Operation and Management{" "}
              </p>
              <p className="mb-5">
                <b>Flow Management:</b>
                Monitoring and controlling the flow and pressure within
                pipelines to optimize throughput and prevent overpressure
                conditions.
              </p>
              <p className="mb-7">
                <b>Control Room Operations:</b>
                Utilizing advanced SCADA systems for real-time monitoring and
                control of pipeline operations from centralized locations.
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Safety and Compliance Services
              </p>
              <p className="mb-5">
                <b>Regulatory Compliance:</b>
                Ensuring that all pipeline activities comply with local,
                national, and international regulations.
              </p>
              <p className="mb-7">
                <b>Environmental Protection: </b>
                Implementing measures to minimize the environmental impact of
                pipeline operations, including wildlife crossings and erosion
                control.
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Decommissioning and Abandonment{" "}
              </p>
              <p className="mb-5">
                <b>Pipeline Decommissioning:</b>
                Safely decommissioning out-of-service pipelines through
                cleaning, purging, and sealing.
              </p>
              <p className="mb-7">
                <b> Site Restoration:</b>
                Restoring land used for pipeline routes to its original
                condition or as per regulatory requirements.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Capacity and Expansion Services{" "}
              </p>
              <p className="mb-5">
                <b>Capacity Analysis: </b>
                Determining the maximum safe working pressure and flow capacity
                of pipelines.
              </p>
              <p className="mb-7">
                <b> Pipeline Expansion:</b>
                Planning and implementing projects to increase the capacity of
                existing pipeline systems, including adding pumping stations or
                looping (adding parallel lines).
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Emergency Response and Mitigation{" "}
              </p>
              <p className="mb-5">
                <b>Emergency Planning: </b>
                Developing and implementing emergency response plans for
                potential pipeline incidents.
              </p>
              <p className="mb-7">
                <b>Spill Response:</b>
                Coordinating rapid containment and cleanup operations in the
                event of a hydrocarbon spill.
              </p>

              <p className="mb-7">
                These pipeline services cover the full lifecycle of a pipeline,
                from conception and construction to operation, maintenance, and
                eventual decommissioning. They are crucial for ensuring that
                pipelines operate safely, efficiently, and in an environmentally
                responsible manner.
              </p>
            </div>

            <h2 className="text-4xl tracking-wide mb-10 ">
              Facilities Management
            </h2>
            <p className="mb-5">
              Operation and maintenance of onshore and offshore facilities.
              Decommissioning and dismantling of facilities at the end of their
              productive life.
            </p>
            <p className="mb-7">
              {" "}
              Facilities Management in the oil and gas industry encompasses a
              broad range of services designed to ensure the optimal
              functioning, safety, and longevity of physical assets and
              infrastructure involved in the extraction, processing, and
              distribution of oil and gas. Here&apos;s a detailed look at the main
              services provided under this category:
            </p>
            <div>
              <p className="mb-5 text-2xl font-medium">
                Operations Management{" "}
              </p>
              <p className="mb-5">
                <b>Plant Operation:</b>
                Supervising the day-to-day operations of oil and gas facilities,
                including production plants, refineries, and gas processing
                plants.
              </p>
              <p className="mb-7">
                <b> Performance Monitoring:</b>
                Continuous monitoring of facility operations to ensure they are
                running at optimal efficiency and within safety and
                environmental guidelines.
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Maintenance Services{" "}
              </p>
              <p className="mb-5">
                <b>Preventive Maintenance:</b>
                Regular and systematic inspection, cleaning, and repair of
                equipment and facilities to prevent breakdowns and prolong their
                life.
              </p>
              <p className="mb-7">
                <b> Corrective Maintenance:</b>
                Responding to equipment malfunctions and breakdowns to restore
                functionality.
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Safety and Compliance{" "}
              </p>
              <p className="mb-5">
                <b>Health, Safety, and Environmental (HSE) Management: </b>
                Developing and implementing HSE policies to ensure compliance
                with regulations and to protect workers and the environment.
              </p>
              <p className="mb-7">
                <b>Security Management:</b>
                Implementing security measures to protect facilities from
                unauthorized access and potential threats.
              </p>

              <p className="mb-5 text-2xl font-medium"> Asset Management </p>
              <p className="mb-5">
                <b>Asset Integrity Management: </b>
                Ensuring that physical assets perform their required functions
                effectively and efficiently while safeguarding health, safety,
                and environmental compliance.
              </p>
              <p className="mb-7">
                <b>Lifecycle Asset Planning:</b>
                Managing the acquisition, use, and disposal of assets to
                maximize their value and minimize costs throughout their
                lifecycle.
              </p>

              <p className="mb-5 text-2xl font-medium"> Utility Management </p>
              <p className="mb-5">
                <b>Energy Management:</b>
                Monitoring and managing energy use to improve efficiency and
                reduce costs, including the use of renewable energy sources.
              </p>
              <p className="mb-7">
                <b>Waste Management:</b>
                Implementing systems to minimize waste generation and to manage
                waste disposal or recycling.
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Facility Engineering and Modifications{" "}
              </p>
              <p className="mb-5">
                <b>Upgrades and Retrofits:</b>Upgrading facilities to
                incorporate the latest technologies or to meet new operational
                requirements.
              </p>
              <p className="mb-7">
                <b>Facility Expansion:</b>
                Planning and executing expansions to increase capacity or add
                new functionalities.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Technical Support Services{" "}
              </p>
              <p className="mb-5">
                <b>Technical Documentation:</b>
                Creating and maintaining detailed documentation for facility
                operations, including manuals, operating procedures, and
                training materials.
              </p>
              <p className="mb-7">
                <b>Engineering Support:</b>
                Providing ongoing engineering advice and support to optimize
                facility design and operation
              </p>

              <p className="mb-5 text-2xl font-medium">
                Environmental Services
              </p>
              <p className="mb-5">
                <b>Environmental Monitoring:</b>
                Continuously monitoring environmental impacts of facility
                operations and implementing corrective measures as necessary.
              </p>
              <p className="mb-7">
                <b>Emission Control:</b>
                Implementing technologies and practices to reduce emissions from
                facilities
              </p>

              <p className="mb-5 text-2xl font-medium">
                Logistics and Supply Chain Management{" "}
              </p>
              <p className="mb-5">
                <b>Material Handling:</b>
                Managing the storage and movement of materials and parts needed
                for facility operations.
              </p>
              <p className="mb-7">
                <b> Supply Chain Coordination:</b>
                Coordinating with suppliers and contractors to ensure timely
                delivery of goods and services.
              </p>

              <p className="mb-5 text-2xl font-medium">
                {" "}
                Training and Development{" "}
              </p>
              <p className="mb-5">
                <b>Staff Training:</b>
                Providing training for facility personnel on operational
                procedures, safety protocols, and compliance requirements.
              </p>
              <p className="mb-7">
                <b> Skill Development:</b>
                Offering programs to enhance the skills and knowledge of staff
                to keep pace with technological advancements.
              </p>
            </div>

            <h2 className="text-4xl tracking-wide mb-10 ">
              Logistics and Support Services
            </h2>
            <p className="mb-5">
              Provision of supply vessels, helicopters, and other logistics
              services to support offshore operations. Base management and
              supply chain services.
            </p>
            <p className="mb-7">
              Logistics and Support Services in the oil and gas industry play a
              critical role in ensuring that the supply chain operates
              efficiently and effectively, supporting various upstream,
              midstream, and downstream activities. Here’s a detailed breakdown
              of the main services provided under this category:
            </p>
            <div>
              <p className="mb-5 text-2xl font-medium">
                Supply Chain Management{" "}
              </p>
              <p className="mb-5">
                <b>Procurement Services:</b>
                Sourcing and purchasing of goods, materials, and services
                essential for operations, ensuring cost-efficiency and
                compliance with industry standards.
              </p>
              <p className="mb-7">
                <b>Inventory Management:</b>
                Optimizing the storage and handling of inventory to balance
                supply and demand, reduce overhead costs, and increase
                operational efficiency.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Transportation and Distribution{" "}
              </p>
              <p className="mb-5">
                <b>Maritime Logistics:</b>
                Managing the transportation of oil, gas, and equipment via
                tanker ships, including chartering, scheduling, and route
                management.
              </p>
              <p className="mb-7">
                <b>Pipeline Transportation:</b>
                Coordinating the flow of oil and gas through pipeline networks,
                including monitoring, maintenance, and scheduling deliveries.
              </p>
              <p className="mb-7">
                <b>Trucking and Hauling:</b>
                Overland transportation of materials and equipment to and from
                sites using specialized vehicles equipped for rugged conditions.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Warehousing and Storage{" "}
              </p>
              <p className="mb-5">
                <b>Strategic Warehousing:</b>
                Operation of warehouses to store raw materials, finished
                products, and equipment near key operational sites to reduce
                transportation times and costs.
              </p>
              <p className="mb-7">
                <b>Material Handling:</b>
                Efficient handling of materials within warehouses, including
                loading, unloading, and storing procedures that adhere to safety
                standards.
              </p>

              <p className="mb-5 text-2xl font-medium">Field Services </p>
              <p className="mb-5">
                <b>Site Management:</b>
                Managing logistics at operational sites, including the setup,
                maintenance, and dismantling of facilities and equipment.
              </p>
              <p className="mb-7">
                <b>Base Camp Operations:</b>
                Operating and maintaining base camps for personnel, including
                accommodations, catering, and recreational facilities.
              </p>

              <p className="mb-5 text-2xl font-medium">Support Services </p>
              <p className="mb-5">
                <b>Catering and Hospitality:</b>
                Providing food services and accommodations for offshore
                platforms, drilling rigs, and remote locations to ensure the
                well-being of personnel.
              </p>
              <p className="mb-7">
                <b>Medical and Emergency Services:</b>
                Offering on-site medical services, emergency response, and
                evacuation capabilities to handle health and safety incidents.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Customs and Compliance{" "}
              </p>
              <p className="mb-5">
                <b>Customs Brokerage:</b>
                Managing customs clearance for materials and equipment, ensuring
                compliance with international trade laws and regulations.
              </p>
              <p className="mb-7">
                <b>Regulatory Compliance:</b>
                Ensuring all logistics operations meet local, national, and
                international regulatory requirements, including environmental
                and safety standards.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Technology and Information Management{" "}
              </p>
              <p className="mb-5">
                <b>Logistics Software Solutions:</b>
                Implementing specialized software systems to manage logistics
                operations, including tracking of materials, vehicles, and
                vessels in real-time.
              </p>
              <p className="mb-7">
                <b>Data Analytics:</b>
                Analyzing logistics data to improve operational efficiency,
                forecast needs, and optimize routes and inventory levels.
              </p>

              <p className="mb-5 text-2xl font-medium">Project Logistics </p>
              <p className="mb-5">
                <b>Project Cargo Handling:</b>
                Managing the logistics of oversized, heavy, or critical cargo
                required for major projects, including planning, loading,
                transportation, and installation.
              </p>
              <p className="mb-7">
                <b>Turnkey Project Management:</b>
                Providing comprehensive logistics solutions that cover all
                aspects of transportation, installation, and commissioning of
                large-scale projects.
              </p>
              <p className="mb-7">
                These logistics and support services are essential for
                maintaining continuous, safe, and efficient operations in the
                oil and gas industry. They involve a complex coordination of
                resources, technology, and manpower to ensure that all
                operational components are in the right place at the right time
                and are functioning as required.
              </p>
            </div>

            <h2 className="text-4xl tracking-wide mb-10 ">
              Environmental and Safety Services
            </h2>
            <p className="mb-5">
              Environmental monitoring and compliance audits. Safety training
              and emergency response management.
            </p>
            <p className="mb-7">
              Environmental and Safety Services in the oil and gas industry are
              crucial for ensuring that operations are conducted in a manner
              that prioritizes environmental protection and the safety of all
              personnel involved. These services encompass a wide range of
              activities designed to mitigate risks, comply with regulations,
              and promote sustainable practices. Here’s a detailed breakdown of
              the main services provided under this category:
            </p>
            <div>
              <p className="mb-5 text-2xl font-medium">
                Environmental Management{" "}
              </p>
              <p className="mb-5">
                <b>Environmental Impact Assessments (EIA):</b>
                Conducting thorough studies to determine the potential
                environmental impacts of proposed oil and gas projects before
                they begin.
              </p>
              <p className="mb-5">
                <b>Waste Management and Recycling:</b>
                Developing and implementing strategies for the effective
                disposal and recycling of waste materials to minimize
                environmental footprint.
              </p>
              <p className="mb-7">
                <b>Spill Prevention and Response:</b>
                Establishing measures to prevent oil spills and other hazardous
                leaks, and deploying rapid response teams to contain and
                remediate any incidents that occur.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Regulatory Compliance and Auditing{" "}
              </p>
              <p className="mb-5">
                <b>Compliance Monitoring:</b>
                Ensuring all operations adhere to local, national, and
                international environmental regulations.
              </p>
              <p className="mb-7">
                <b>Environmental Auditing:</b>
                Regularly reviewing and auditing environmental performance
                against legal and corporate standards to identify areas for
                improvement.
              </p>

              <p className="mb-5 text-2xl font-medium">Safety Management </p>
              <p className="mb-5">
                <b>Occupational Health and Safety Services:</b>
                Implementing programs to protect the health and safety of
                employees through training, hazard identification, risk
                assessments, and ergonomic studies.
              </p>
              <p className="mb-7">
                <b>Safety Training and Drills:</b>
                Conducting regular training sessions, safety drills, and
                emergency response exercises to ensure employees are prepared
                for various operational hazards.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Risk Assessment and Management{" "}
              </p>
              <p className="mb-5">
                <b>Hazard Identification and Risk Analysis (HIRA):</b>
                Systematically identifying potential hazards and assessing the
                risks associated with oil and gas operations to implement
                appropriate control measures.
              </p>
              <p className="mb-7">
                <b>Safety Case Development:</b>
                Preparing safety case documents as required by regulations,
                detailing how major accident hazards are managed and risks are
                controlled.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Environmental Conservation{" "}
              </p>
              <p className="mb-5">
                <b>Biodiversity Management:</b>
                Implementing strategies to protect and promote biodiversity,
                including wildlife conservation plans and habitat restoration
                projects.
              </p>
              <p className="mb-7">
                <b>Ecosystem Services:</b>
                Assessing and managing the impacts of oil and gas operations on
                ecosystem services to ensure sustainable use of natural
                resources.
              </p>

              <p className="mb-5 text-2xl font-medium">Emission Management </p>
              <p className="mb-5">
                <b>Greenhouse Gas (GHG) Inventory and Reduction Strategies:</b>
                Measuring emissions from operations, setting reduction targets,
                and implementing measures to reduce carbon footprint.
              </p>
              <p className="mb-7">
                <b>Air Quality Monitoring and Control:</b>
                Monitoring air emissions from facilities and using control
                technologies to maintain air quality.
              </p>

              <p className="mb-5 text-2xl font-medium">Water Management </p>
              <p className="mb-5">
                <b>Water Conservation Techniques:</b>
                Implementing technologies and practices to reduce water usage
                and enhance water recycling in operations.
              </p>
              <p className="mb-7">
                <b>Water Quality Monitoring and Treatment:</b>
                Ensuring that water discharged from operations meets regulatory
                standards and does not adversely affect the environment.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Emergency Response Planning{" "}
              </p>
              <p className="mb-5">
                <b>Emergency Preparedness and Response Plans (EPRP):</b>
                Developing and implementing plans that outline procedures for
                responding to emergencies, including spills, fires, and
                explosions.
              </p>
              <p className="mb-7">
                <b>Crisis Management:</b>
                Setting up dedicated teams and protocols to manage critical
                situations effectively.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Sustainable Development Initiatives{" "}
              </p>
              <p className="mb-5">
                <b>Sustainability Reporting:</b>
                Documenting and reporting on environmental performance and
                sustainability initiatives to stakeholders.
              </p>
              <p className="mb-7">
                <b>Community Engagement:</b>
                Working with local communities to address environmental concerns
                and promote community health and safety initiatives.
              </p>
              <p className="mb-7">
                Environmental and Safety Services are integral to the
                responsible management of oil and gas operations, ensuring they
                not only comply with regulatory requirements but also strive for
                continuous improvement in environmental performance and safety
                standards. These services are vital for maintaining public
                trust, protecting ecosystems, and ensuring the wellbeing of all
                employees and affected communities.
              </p>
            </div>

            <h2 className="text-4xl tracking-wide mb-10 ">
              Consulting and Engineering Services{" "}
            </h2>
            <p className="mb-5">
              Reservoir evaluation, management, and engineering. Project
              management and technical consulting for exploration, production,
              and infrastructure projects.
            </p>
            <p className="mb-7">
              {" "}
              Consulting and Engineering Services in the oil and gas industry
              encompass a broad spectrum of activities that provide expertise,
              technical support, and strategic insights to optimize operations,
              manage projects, and ensure regulatory compliance. Here’s a
              detailed overview of the key services under this category:
            </p>
            <div>
              <p className="mb-5 text-2xl font-medium">
                Engineering Design and Development{" "}
              </p>
              <p className="mb-5">
                <b>Conceptual and Feasibility Studies:</b>
                Early-stage engineering assessments to determine the viability
                of projects, focusing on technical solutions, budget
                estimations, and potential return on investment.
              </p>
              <p className="mb-7">
                <b>Detailed Engineering:</b>
                Development of detailed technical drawings, specifications, and
                plans necessary for the construction and operation of oil and
                gas facilities.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Project Management Consulting (PMC){" "}
              </p>
              <p className="mb-5">
                <b>Project Planning and Scheduling:</b>
                Assisting clients in planning, scheduling, and managing projects
                from inception to completion, ensuring projects meet deadlines,
                budgets, and specifications.
              </p>
              <p className="mb-7">
                <b>Cost Management:</b>
                Providing expertise in budgeting, cost control, and financial
                analysis to keep projects economically viable and profitable.
              </p>

              <p className="mb-5 text-2xl font-medium">Process Optimization </p>
              <p className="mb-5">
                <b>Production Optimization:</b>
                Applying advanced modeling and simulation tools to improve the
                efficiency and output of existing production systems.
              </p>
              <p className="mb-7">
                <b>Asset Management and Optimization:</b>
                Developing strategies to maximize the lifecycle value of assets
                through improved maintenance, reliability, and operational
                efficiency.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Regulatory Compliance and Permitting{" "}
              </p>
              <p className="mb-5">
                <b>Environmental Permitting:</b>
                Assisting with obtaining the necessary environmental permits for
                projects, ensuring compliance with local, national, and
                international regulations.
              </p>
              <p className="mb-7">
                <b>Safety and Risk Management Consulting:</b>
                Implementing risk assessment methodologies and safety management
                systems to comply with industry standards and legal
                requirements.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Technology and Innovation Consulting{" "}
              </p>
              <p className="mb-5">
                <b>Digital Transformation:</b>
                Advising on the integration of digital technologies, such as
                IoT, AI, and machine learning, to enhance operational efficiency
                and decision-making.
              </p>
              <p className="mb-7">
                <b>Research and Development Support:</b>
                Partnering with clients to develop new technologies and
                processes that can transform operations and market approaches.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Reservoir Engineering{" "}
              </p>
              <p className="mb-5">
                <b>Reservoir Simulation and Management:</b>
                Using advanced geological and simulation models to assess
                reservoir potential and devise optimal extraction techniques.
              </p>
              <p className="mb-7">
                <b>Enhanced Oil Recovery (EOR) Strategies:</b>
                Designing methods to increase the amount of crude oil that can
                be extracted from an oil field.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Structural Engineering and Analysis{" "}
              </p>
              <p className="mb-5">
                <b>Offshore and Onshore Facility Design:</b>
                Engineering design and analysis for the construction and
                maintenance of both offshore platforms and onshore facilities.
              </p>
              <p className="mb-7">
                <b>Pipeline Design and Integrity Analysis:</b>
                Designing pipeline systems and conducting integrity assessments
                to ensure they operate safely and efficiently.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Environmental Consulting{" "}
              </p>
              <p className="mb-5">
                <b>Impact Assessments:</b>
                Conducting environmental impact assessments to identify and
                mitigate the environmental risks associated with oil and gas
                operations.
              </p>
              <p className="mb-7">
                <b>Sustainability Planning:</b>
                Developing strategies to help companies reduce their
                environmental footprint and operate more sustainably.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Operational Support and Training{" "}
              </p>
              <p className="mb-5">
                <b>Operational Readiness and Support:</b>
                Ensuring that facilities and their staff are prepared for
                full-scale operation following the project completion phase.
              </p>
              <p className="mb-7">
                <b>Technical Training and Development:</b>
                Offering specialized training programs to enhance the skills and
                knowledge of personnel, keeping them updated with the latest
                industry standards and technologies.
              </p>

              <p className="mb-7">
                Consulting and Engineering Services in the oil and gas sector
                are essential for maintaining competitive advantage, achieving
                operational excellence, and ensuring compliance with stringent
                industry regulations. They provide the expertise and tools
                necessary to tackle complex challenges and make informed
                strategic decisions.
              </p>
            </div>

            <h2 className="text-4xl tracking-wide mb-10 ">
              Data Management and Software Solutions{" "}
            </h2>
            <p className="mb-5">
              Provision of software for reservoir simulation, drilling
              optimization, and production management. Data management solutions
              to handle the vast amounts of data generated in oil and gas
              operations.
            </p>
            <p className="mb-7">
              Data Management and Software Solutions in the oil and gas industry
              play a pivotal role in enhancing operational efficiency, reducing
              costs, and improving decision-making through advanced data
              analytics and information technology. Here’s an overview of the
              main services provided under this category:
            </p>
            <div>
              <p className="mb-5 text-2xl font-medium">
                Data Collection and Integration{" "}
              </p>
              <p className="mb-5">
                <b>Sensor and IoT Integration:</b>
                Deploying sensors and Internet of Things (IoT) devices across
                facilities and equipment to collect real-time data on
                operations, which is essential for monitoring and control.
              </p>
              <p className="mb-7">
                <b>Data Aggregation:</b>
                Collecting data from various sources, including drilling,
                production, and logistics, to create a unified view that
                facilitates comprehensive analysis.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Data Storage and Management{" "}
              </p>
              <p className="mb-5">
                <b>Secure Data Storage Solutions:</b>
                Implementing robust data storage systems that ensure data
                integrity and accessibility while complying with industry
                standards for data security.
              </p>
              <p className="mb-7">
                <b>Database Management:</b>
                Managing complex databases that store geological, operational,
                and financial data, ensuring they are well-organized and
                maintainable.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Data Analysis and Visualization{" "}
              </p>
              <p className="mb-5">
                <b>Advanced Analytics:</b>
                Utilizing statistical and machine learning algorithms to analyze
                large datasets, extract insights, and predict trends that can
                influence business decisions.
              </p>
              <p className="mb-7">
                <b>Visualization Tools:</b>
                Developing and providing sophisticated visualization tools that
                help stakeholders understand data through intuitive dashboards,
                charts, and maps.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Software Development and Customization{" "}
              </p>
              <p className="mb-5">
                <b>Custom Software Solutions:</b>
                Creating tailor-made software applications that cater
                specifically to the unique needs of the oil and gas operations,
                enhancing specific processes like drilling, production, or
                supply chain management.
              </p>
              <p className="mb-7">
                <b>ERP Systems:</b>
                Implementing and customizing Enterprise Resource Planning (ERP)
                systems to manage day-to-day activities such as procurement,
                project management, and compliance.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Geographical Information Systems (GIS){" "}
              </p>
              <p className="mb-5">
                <b>Spatial Data Analysis:</b>
                Using GIS technology to analyze and manipulate geographic
                information, which is crucial for exploration activities and
                environmental monitoring.
              </p>
              <p className="mb-7">
                <b>Mapping and Modeling:</b>
                Creating detailed geological and topographical maps that assist
                in exploration, planning, and environmental management.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Real-time Monitoring and Control Systems{" "}
              </p>
              <p className="mb-5">
                <b>SCADA Systems:</b>
                Implementing Supervisory Control and Data Acquisition (SCADA)
                systems for real-time process control and monitoring of oil and
                gas facilities.
              </p>
              <p className="mb-7">
                <b>Remote Operations Control:</b>
                Enabling remote monitoring and operation of facilities, which
                can significantly reduce costs and improve safety by minimizing
                the need for onsite personnel.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Decision Support Systems{" "}
              </p>
              <p className="mb-5">
                <b>Predictive Maintenance Tools:</b>
                Developing systems that use data analytics to predict when
                equipment needs maintenance before failures occur, reducing
                downtime and repair costs.
              </p>
              <p className="mb-7">
                <b>Risk Management Software:</b>
                Providing tools to assess and manage the risks associated with
                oil and gas operations, enhancing safety and operational
                reliability.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Compliance and Regulatory Reporting{" "}
              </p>
              <p className="mb-5">
                <b>Automated Reporting Tools:</b>
                Creating software solutions that automate the generation of
                compliance and regulatory reports, ensuring accuracy and
                timeliness.
              </p>
              <p className="mb-7">
                <b>Audit Trail Systems:</b>
                Implementing systems that maintain detailed records of data
                changes and operations to support audit processes and
                demonstrate compliance with regulatory requirements.
              </p>

              <p className="mb-5 text-2xl font-medium">
                Collaboration and Workflow Management{" "}
              </p>
              <p className="mb-5">
                <b>Project Management Platforms:</b>
                Offering platforms that facilitate project planning, execution,
                and collaboration among teams, which is crucial for managing
                complex oil and gas projects.
              </p>
              <p className="mb-7">
                <b>Workflow Automation:</b>
                Automating routine tasks and workflows to streamline operations
                and reduce the potential for human error.
              </p>
              <p className="mb-5">
                Data Management and Software Solutions are integral to
                modernizing the oil and gas industry, driving efficiency, and
                ensuring that operations are agile and responsive to changing
                market conditions and technological advancements. These services
                leverage the power of data to optimize every aspect of the
                industry, from upstream exploration to downstream distribution.
              </p>
              <p className="mb-7">
                These services are critical for ensuring efficient, safe, and
                environmentally responsible extraction and processing of oil and
                gas resources. Each service area can involve highly specialized
                companies and technologies tailored to the unique challenges of
                the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OilAndGas;
