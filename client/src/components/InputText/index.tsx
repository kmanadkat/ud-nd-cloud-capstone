import nextId from "react-id-generator";
import './style.scss'

const InputText = ({ label, name, isRequired, isDisabled, value, onChange }: InputTextProps) => {
  const htmlId = nextId()
  return (
    <div className="inputText-wrapper flex flex-col gap-3 mb-8 px-8">
      <label htmlFor={htmlId} className={`${isRequired ? 'required' : ''} text-gray-500 text-sm`}>{label}</label>
      <input
        id={htmlId}
        type="text"
        name={name}
        value={value}
        className='bg-slate-50 focus:bg-slate-100 outline-none border-none rounded px-3 py-2'
        required={isRequired}
        disabled={isDisabled}
        onChange={onChange} autoComplete="off" />
    </div>
  )
}

type InputTextProps = {
  label: string;
  name: string
  isRequired: undefined | boolean;
  isDisabled: undefined | boolean;
  value: string;
  onChange: (event: any) => void;
}

export default InputText