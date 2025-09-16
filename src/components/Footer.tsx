import { footerData } from "../lib/data";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <footer className="relative bg-[#092338] px-6 md:px-12 lg:px-24 pt-16 pb-8 text-gray-50">
      {/* Angled top left */}
      <div
        className="top-0 left-0 absolute bg-white w-full h-40"
        style={{ clipPath: "polygon(0% 30%, 0% 0%, 35% 0%)" }}
      />
      {/* Angled top right */}
      <div
        className="top-0 right-0 absolute bg-white w-full h-48"
        style={{ clipPath: "polygon(35% 0%, 100% 0%, 100% 30%)" }}
      />

      {/* Main Footer Content */}
      <div className="z-10 relative gap-12 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[1280px]">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Logo / Brand */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl w-15 overflow-hidden">
              <img src={footerData.brand.mainLogoImg} alt="Main logo" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {footerData.brand.description}
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="mb-4 font-semibold text-lg">სამუშაო საათები</h4>
            {footerData.workingHours.map((item, i) => (
              <p key={i} className="text-sm">
                {item.day}: {item.hours}
              </p>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-lg">ჩვენი მომსახურება</h4>
            <div className="gap-6 grid grid-cols-2 text-sm">
              {footerData.services.map((col, i) => (
                <div key={i} className="space-y-2">
                  {col.map((service, j) => (
                    <p key={j}>{service}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 font-semibold text-lg">გამოგვყევი</h4>
            <div className="flex gap-4">
              {footerData.socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className={`${link.hover} transition`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <FooterForm footerData={footerData} />

          <div className="bg-blue-600 px-6 py-4 rounded-md w-full max-w-md text-white">
            <p className="font-semibold">{footerData.helpBox.text}</p>
            <p>დაგვირეკე: {footerData.helpBox.phone}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-600" />

      {/* Bottom Section */}
      <div className="z-10 relative flex md:flex-row flex-col justify-between items-center gap-4 mx-auto px-6 md:px-0 max-w-[1280px] text-gray-400 text-sm">
        <p>{footerData.bottom.copyright}</p>
        <a
          href={footerData.bottom.privacy.url}
          className="hover:text-gray-200 transition"
        >
          {footerData.bottom.privacy.label}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
