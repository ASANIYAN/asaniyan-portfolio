const Help = () => {
  const helpOptions = [
    {
      title: "Branding",
      options: ["LOGO DESIGN", "BRAND IDENTITY", "GUIDELINES"],
    },
    {
      title: "UI.UX",
      options: ["WEB DESIGN", "FRAMER SITES", "DESIGN SYSTEMS"],
    },
    {
      title: "Motion",
      options: ["3D ANIMATION", "2D ANIMATION"],
    },
  ];

  return (
    <section className="w-full max-w-[1300px] mx-auto mt-[72px] md:mt-[120px] text-black px-5">
      <p className="text-xl text-center"> Here is how I can help </p>
      <section className="space-y-16 mt-10">
        {helpOptions.map((item, index) => (
          <div key={index} className="space-y-4">
            <h2 className="font-light text-center text-[80px] sm:text-[90px] md:text-[220px] leading-[88px] md:leading-[184px]">
              {item.title}
            </h2>
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
