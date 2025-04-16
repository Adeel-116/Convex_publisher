const SelectBox = ({ label, options = [], name, value, onChange }) => (
  <div>
    <select
      name={name}
      required
      value={value}
      onChange={onChange}
      className="md:py-3 py-[7px] px-3.5 text-[13px] font-medium block w-full border-2 text-black border-gray-300 hover:border-gray-400 focus:border-black focus:ring-black text-sm transition-colors duration-200"
    >
      <option
        value=""
        disabled
        hidden
        className="text-gray-400"
      >
        {label || ""}
      </option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default SelectBox;