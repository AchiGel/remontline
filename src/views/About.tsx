import { aboutSection } from "../lib/data";

const About = () => {
  return (
    <section
      className="mx-auto mt-24 mb-24 px-6 md:px-12 lg:px-24 max-w-[1280px]"
      id="about"
    >
      <div className="items-center gap-12 grid lg:grid-cols-2">
        {/* Left side: Text */}
        <div className="lg:text-left text-center">
          <h3 className="mb-3 font-semibold text-blue-600 tracking-wide">
            {aboutSection.title}
          </h3>
          <h2 className="mb-6 font-bold text-gray-800 text-3xl md:text-4xl">
            {aboutSection.subTitle}
          </h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
            {aboutSection.descr}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold text-white transition">
            მეტი ჩვენ შესახებ
          </button>
        </div>

        {/* Right side: Images + Experience Box */}
        <div className="relative gap-4 grid grid-cols-2">
          {/* First image */}
          <img
            src="/images/about-1.png"
            alt="About 1"
            className="shadow-md rounded-xl w-full h-64 object-cover"
          />

          {/* Second image */}
          <img
            src="/images/about-2.png"
            alt="About 2"
            className="shadow-md mt-8 rounded-xl w-full h-64 object-cover"
          />

          {/* Experience box (overlapping bottom-right) */}
          <div className="bottom-0 left-4 absolute bg-blue-600 shadow-lg p-6 rounded-xl text-white text-center">
            <h2 className="font-bold text-4xl">{aboutSection.years}+</h2>
            <span className="block mt-2 text-sm">{aboutSection.xp}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
