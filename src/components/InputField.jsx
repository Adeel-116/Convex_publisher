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
        className="py-2 px-3 block w-full rounded-md border text-black border-gray-300 shadow-sm focus:border-[#00c0ff] focus:ring-[#00c0ff] text-sm"
      />
    </div>
  );
}

export default InputField;
