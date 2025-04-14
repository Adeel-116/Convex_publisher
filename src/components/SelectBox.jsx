const SelectBox = ({ label, options = [], name }) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
    <select
      name={name}
      required
      className="block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 text-sm text-gray-900 focus:border-[#00c0ff] focus:ring-[#00c0ff]"
    >
      <option value="">Select</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default SelectBox;
