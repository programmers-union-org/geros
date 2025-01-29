const BannerContent = () => {
  return (
    <div>
      <div className="w-full max-w-[71rem] m-auto py-6 md:py-16">
        <div className="flex flex-wrap flex-row gap-12 text-sm md:text-lg font-light">
          <div className="md:w-[calc(33.3333%-2rem)]">
            We are one of the world&apos;s largest integrated energy and
            chemicals companies, creating value across the hydrocarbon chain,
            and delivering societal and economic benefits to people and
            communities around the globe who rely on the vital energy we supply.
          </div>
          <div className="md:w-[calc(33.3333%-2rem)]">
            We are committed to playing a leading role in the energy transition.
            We have a responsibility to help the world achieve a net-zero
            economy, and our people are working hard to help solve the
            world&apos;s sustainability challenges.
          </div>
          <div className="md:w-[calc(33.3333%-2rem)]">
            For our customers, we are a supplier of choice. For our
            shareholders, we provide long-term value creation. For communities
            around the world, our ambition is to provide reliable, affordable,
            and more-sustainable energy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
