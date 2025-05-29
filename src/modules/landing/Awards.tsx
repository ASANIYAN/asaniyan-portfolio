const Awards = () => {
  return (
    <section
      id="oss"
      className="w-full max-w-[1400px] mx-auto text-black flex flex-col items-start gap-5 md:flex-row justify-between mt-16 md:mt-[88px] px-5 md:px-8"
    >
      <section className="w-full max-md:text-center md:max-w-[345px] md:mr-auto space-y-5">
        <h3 className="text-[92px] leading-[88px]">OSS</h3>
        <p className="font-light text-lg">
          {" "}
          Here are some of my open-source contributions.
        </p>
      </section>

      <section className="font-light w-full md:w-[54%]">
        <div className="py-4 border-b border-b-black md:min-h-[72px] flex md:items-center justify-start md:justify-between flex-col md:flex-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg"
            href="https://github.com/Dun-sin/Code-Magic/commit/65e1835c8945be7884bef0cd0866388e0e50071c"
          >
            {" "}
            Code Magic{" "}
          </a>
          <div className="space-x-3.5">
            <span>{"[ Feb 2023 ]"}</span>
          </div>
        </div>
        <div className="py-4 border-b border-b-black md:min-h-[72px] flex md:items-center justify-start md:justify-between flex-col md:flex-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg"
            href="https://github.com/atj393/promt-save-reuse-chatgpt-and-gemini/pull/36"
          >
            prompt-save-reuse-chatgpt-and-gemini
          </a>
          <div className="space-x-3.5">
            <span>{"[ Oct 2024 ]"}</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Awards;
