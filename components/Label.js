
export default function Label({ forInput, children, className }) {
  return (
    <label htmlFor={forInput} className={className}>{children}</label>
  )
}
