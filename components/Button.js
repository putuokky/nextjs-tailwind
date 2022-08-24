
export default function Button({ children, props, className }) {
  return (
    <button {...props} className={`${className ? className : ""} px-6 py-2.5 text-sm font-medium transition duration-300 focus:outline-none focus:ring rounded bg-indigo-500 hover:bg-indigo-600 text-white focus:ring-indigo-200 `}>
      {children}
    </button>
  )
}