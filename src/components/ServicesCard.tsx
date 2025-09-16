import type { ServiceType } from "../lib/types";

const ServicesCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden text-center transition-transform hover:-translate-y-2 duration-300">
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        <h2 className="font-bold text-gray-800 text-xl">{service.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{service.descr}</p>
        <button className="self-center bg-blue-600 hover:bg-blue-700 mt-4 px-5 py-2 rounded-xl font-semibold text-white transition">
          უფასო კალკულაცია
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
