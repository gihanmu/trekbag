
export default function Button({type, children, onBtnClick}) {
  return (
   <button className={`btn ${type === 'secondary' ? 'btn--secondary' : ''}`} onClick={onBtnClick}>{children}</button>
  )
}
