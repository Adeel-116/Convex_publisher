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
        className="py-3 px-3 block w-full border text-black border-gray-300 focus:border-[#00c0ff] focus:ring-[#00c0ff] text-sm"
      />
    </div>
  );
}

export default InputField;
