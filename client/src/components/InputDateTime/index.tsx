import nextId from "react-id-generator";

const InputDateTime = ({name, type, label, isRequired, value, isDisabled, onChange}: InputDateTimeProps) => {
  const htmlId = nextId()

  return (
    <div className="inputText-wrapper flex flex-col gap-3 mb-10 w-[45%]">
      <label htmlFor={htmlId} className={`${isRequired ? 'required' : ''} text-gray-500 text-sm`}>{label}</label>
      <input
        id={htmlId}
        type={type}
        name={name}
        value={value}
        className='bg-slate-50 focus:bg-slate-100 outline-none border-none rounded px-3 py-2'
        required={isRequired}
        disabled={isDisabled}
        onChange={onChange} autoComplete="off" />
    </div>
  )
}

type InputDateTimeProps = {
  label: string;
  name: string;
  type: "date" | "time";
  isRequired?: boolean;
  isDisabled?: boolean;
  value: string;
  onChange: (event: any) => void;
}

export default InputDateTime