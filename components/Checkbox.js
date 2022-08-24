import Label from './Label'

export default function Checkbox({ label, ...props }) {
  return (
    <div>
      <input className='text-indigo-500 border-gray-300 rounded focus:ring-0' type='checkbox' {...props} />
      <Label forInput='remember' className='ml-3 select-none'>{label}</Label>
    </div>
  )
}
