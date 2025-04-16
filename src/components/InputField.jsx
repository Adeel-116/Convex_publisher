function InputField({ label, name, type = "text", required = false, value, onChange }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="md:py-3.5 py-[7px] px-3.5 text-[13px] font-medium block w-full border-2 text-black border-gray-300 hover:border-gray-400 focus:border-black focus:ring-black text-sm transition-colors duration-200"
      />
    </div>
  );
}

export default InputField;