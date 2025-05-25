import InfiniteMarquee from "@/components/InfiniteMarquee";

const Works = () => {
  const workOptions = ["Works", "*", "Works", "*", "Works", "*"];
  return (
    <section className="mt-[72px] md:mt-[200px]">
      <InfiniteMarquee
        images={[]}
        duration={5}
        texts={workOptions}
        textClassName="text-black text-[92px] uppercase"
      />
    </section>
  );
};

export default Works;
