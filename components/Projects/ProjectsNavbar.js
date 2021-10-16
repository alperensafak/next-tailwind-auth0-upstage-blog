export const NavItem = ({ value, handlerFilterCategory, active }) => {
  let className = 'capitalize cursor-pointer hover:text-green'
  if (active === value) className += ' text-green'

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  )
}
export default function ProjectsNavbar(props) {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="next" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="alp" {...props} />
    </div>
  )
}
