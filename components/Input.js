
export default function Input({ type = 'text', ...props }) {
  return (
    <input type={type} {...props} className='w-full px-4 py-2 transition duration-200 border shadow-sm rounded-xl focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500' />
  )
}
