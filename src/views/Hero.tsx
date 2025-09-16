import { heroSection } from "../lib/data";

const Hero = () => {
  return (
    <section
      className="relative flex justify-center items-center bg-gray-50 pt-20 min-h-screen"
      id="home"
    >
      {/* Background image */}
      <img
        src="/images/hero.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Angled bottom left */}
      <div
        className="bottom-0 left-0 absolute bg-white w-full h-40"
        style={{
          clipPath: "polygon(0% 100%, 0% 60%, 35% 100%)",
        }}
      />

      {/* Angled bottom right */}
      <div
        className="right-0 bottom-0 absolute bg-white w-full h-48"
        style={{
          clipPath: "polygon(35% 100%, 100% 60%, 100% 100%)",
        }}
      />

      {/* Hero content */}
      <div className="z-10 relative px-6 max-w-2xl text-center">
        <h1 className="mb-6 font-bold text-white text-4xl md:text-6xl">
          {heroSection.title}
        </h1>
        <p className="mb-8 text-gray-200 text-lg md:text-xl">
          {heroSection.descr}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl font-semibold text-white transition">
          მიიღე უფასო კალკულაცია
        </button>
      </div>
    </section>
  );
};

export default Hero;
