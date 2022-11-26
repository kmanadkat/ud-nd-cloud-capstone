import nextId from "react-id-generator";

const InputCheckbox = ({label, value, handleOnChange, isRequired}: InputCheckboxProps) => {
  const htmlId = nextId()
  return (
    <div className="relative flex items-start mb-8 px-8">
    <div className="flex items-center h-5">
      <input
        id={htmlId}
        type="checkbox"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        required={isRequired}
        checked={value}
        onChange={handleOnChange}
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={htmlId} className={`font-medium text-gray-700 ${isRequired ? 'required' : ''}`}>{label}</label>
    </div>
  </div>
  )
}

type InputCheckboxProps = {
  label: string;
  value: boolean;
  handleOnChange: (event: any) => void,
  isRequired?: boolean
}

export default InputCheckbox