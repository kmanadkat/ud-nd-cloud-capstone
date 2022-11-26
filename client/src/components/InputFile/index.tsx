import nextId from "react-id-generator";

const InputFile = ({label}: InputFileProps) => {
  const htmlId = nextId()
  return (
    <div className="inputText-wrapper flex flex-col gap-3 mb-8 px-8">
      <label htmlFor={htmlId} className={`required text-gray-500 text-sm`}>{label}</label>
      <input
        id={htmlId}
        type="file"
        accept=",.jpg,.jpeg,.png"
        className='outline-none border-none py-2'
        autoComplete="off"
        required />
      <small className="text-xs text-gray-500">PNG, JPG up to 10MB</small>
    </div>
  )
}

type InputFileProps = {
  label: string
}

export default InputFile