import useEmblaCarousel from "embla-carousel-react";
import ServicesCard from "../components/ServicesCard";
import { services, servicesSection } from "../lib/data";

const Services = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section
      className="mx-auto mt-24 px-6 md:px-12 lg:px-24 max-w-[1280px] text-center"
      id="services"
    >
      {/* Section Header */}
      <div className="mb-12">
        <h3 className="mb-3 font-semibold text-blue-600 tracking-wide">
          {servicesSection.title}
        </h3>
        <h2 className="font-bold text-gray-800 text-3xl md:text-4xl">
          {servicesSection.subTitle}
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {services.map((service) => (
            <div key={service.id} className="embla__slide">
              <ServicesCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
