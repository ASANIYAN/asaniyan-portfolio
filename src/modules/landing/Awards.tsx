const Awards = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto text-black flex flex-col items-start gap-5 md:flex-row justify-between mt-16 md:mt-[88px] px-5 md:px-8">
      <section className="w-full max-md:text-center md:max-w-[345px] md:mr-auto space-y-5">
        <h3 className="text-[92px] leading-[88px]">Awards</h3>
        <p className="font-light text-lg">
          {" "}
          Throughout my journey as a visual artist, I've been honored to receive
          industry recognition for my creativity, innovation, and impact.{" "}
        </p>
      </section>

      <section className="font-light w-full md:w-[54%]">
        <div className="py-4 border-b border-b-black md:min-h-[72px] flex md:items-center justify-start md:justify-between flex-col md:flex-row">
          <p className="text-lg"> Krishna </p>
          <div className="space-x-3.5">
            <span className="text-sm"> {"[ SOTM ]"}</span>
            <span>{"[ Nov 2024 ]"}</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Awards;
