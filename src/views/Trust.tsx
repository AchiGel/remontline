import { trustSection, trustSectionCards } from "../lib/data";

const Trust = () => {
  return (
    <section className="relative bg-[#092338] pt-20 min-h-screen" id="trust">
      {/* Angled top left */}
      <div
        className="top-0 left-0 absolute bg-gray-50 w-full h-40"
        style={{ clipPath: "polygon(0% 50%, 0% 0%, 100% 0%)" }}
      />

      {/* Angled bottom right */}
      <div
        className="right-0 bottom-0 absolute bg-gray-50 w-full h-48"
        style={{ clipPath: "polygon(0% 100%, 100% 37%, 100% 100%)" }}
      />

      <div className="flex lg:flex-row flex-col items-center gap-12 mx-auto mt-5 mb-24 px-6 md:px-12 lg:px-24 pb-50 max-w-[1280px]">
        {/* Left: Image */}
        <div className="flex-1 w-full">
          <img
            src="/images/video.png"
            alt="video placeholder"
            className="shadow-lg rounded-2xl w-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 lg:text-left text-center">
          <h2 className="mb-4 font-bold text-gray-50 text-3xl md:text-5xl">
            {trustSection.title}
          </h2>
          <h3 className="mb-4 font-semibold text-gray-50 text-xl md:text-2xl">
            {trustSection.subTitle}
          </h3>
          <p className="mb-8 text-gray-50 text-lg md:text-xl leading-relaxed">
            {trustSection.descr}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl font-semibold text-white transition">
            უფასო კალკულაცია
          </button>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="bottom-[-150px] md:bottom-[-60px] left-1/2 absolute flex md:flex-row flex-col items-center gap-6 px-2 md:px-5 w-full max-w-[1280px] -translate-x-1/2 transform">
        {trustSectionCards.map((card) => (
          <div
            key={card.id}
            className="flex items-start md:items-center gap-4 md:gap-6 bg-white shadow-2xl md:p-8 px-2 py-4 rounded-3xl md:max-w-none max-w-sm"
          >
            <img src={card.img} alt={card.title} />
            <div>
              <h3 className="font-semibold text-lg md:text-xl">{card.title}</h3>
              <p className="text-sm md:text-base">{card.descr}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trust;
