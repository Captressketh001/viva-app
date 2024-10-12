import React from 'react'
interface InputFormProps{
    label?:string;
    placeholder?:string|number
    required?:boolean
    type:string
    register: any;
    error?: string
}
const InputForm:React.FC<InputFormProps> = ({label,placeholder,required,type, error, register}) => {
  return (
    <div className='mt-4 relative z-10'>
        <div className="flex flex-col ">
      <label className="font-[400] text-sm mb-2 flex items-center">
      {required &&<span className="text-red-500 mr-[0.2rem] ">*</span>} {label}
      </label>
      <input
        className="w-full px-4 py-3 rounded-lg font-medium bg-white border border-[#D9D9D9] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type={type}
        {...register}
        placeholder={placeholder ? String(placeholder) : ''}
      />
      {error && <p className="text-red-500 text-xs text-end mt-2">{error}</p>}
    </div>
    </div>
  )
}

export default InputForm