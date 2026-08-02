const Help = () => {
  const helpOptions = [
    {
      title: "Frontend",
      problem:
        "Interfaces that stay usable when the data underneath them keeps changing.",
      options: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "ACCESSIBILITY (WCAG)"],
    },
    {
      title: "Backend",
      problem:
        "APIs and services that hold their state correctly, especially when something fails.",
      options: ["NODE.JS", "NEST.JS", "FASTIFY", "POSTGRESQL", "REDIS"],
    },
    {
      title: "Craft",
      problem:
        "The parts that don't show up in a stack list: real time sync, test coverage, motion that doesn't get in the way.",
      options: ["REAL TIME SYSTEMS", "TESTING (JEST/VITEST)", "GSAP"],
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto mt-[72px] md:mt-[120px] text-black px-5">
      <p className="text-xl text-center"> Here is how I can help </p>
      <section className="space-y-16 mt-10">
        {helpOptions.map((item, index) => (
          <div key={index} className="space-y-4">
            <h2 className="font-light text-center text-[80px] sm:text-[90px] md:text-[160px] lg:text-[220px] leading-[88px] md:leading-[184px]">
              {item.title}
            </h2>
            <p className="text-base md:text-lg font-light text-center max-w-[560px] mx-auto mt-6 md:mt-10">
              {item.problem}
            </p>
            <ul className="flex flex-wrap gap-4 items-center justify-center text-sm uppercase">
              {item.options.map((option, index) => (
                <li key={`${index}-${option}`}>{`[ ${option} ]`}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Help;
