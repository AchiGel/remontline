import { suppliersSectionImages } from "../lib/data";

const Suppliers = () => {
  return (
    <section className="mx-auto mt-56 md:mt-24 mb-24 px-6 md:px-12 lg:px-24 max-w-[1280px] text-center">
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="font-bold text-gray-800 text-3xl md:text-4xl">
          ჩვენი მომწოდებლები
        </h2>
      </div>
      <div className="justify-items-center gap-5 grid grid-cols-2 md:grid-cols-3">
        {suppliersSectionImages.map((image) => (
          <img key={image.id} src={image.image} alt="company logo" />
        ))}
      </div>
    </section>
  );
};

export default Suppliers;
