import type { FooterDataTypes } from "../lib/types";

const FooterForm = ({ footerData }: { footerData: FooterDataTypes }) => {
  return (
    <div className="bg-white shadow-2xl px-6 sm:px-10 py-6 sm:py-8 rounded-2xl w-full max-w-md">
      <form className="space-y-4 text-black">
        <h3 className="mb-4 font-semibold text-lg">{footerData.form.title}</h3>
        {footerData.form.inputs.map((placeholder, i) => (
          <input
            key={i}
            type="text"
            placeholder={placeholder}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        ))}
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full text-white">
          {footerData.form.button}
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
