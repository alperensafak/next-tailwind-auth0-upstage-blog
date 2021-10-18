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
      <NavItem value="node" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="redux" {...props} />
      <NavItem value="mongoDB" {...props} />
      <NavItem value="postgreSQL" {...props} />
      <NavItem value="tailwindCSS" {...props} />
      <NavItem value="semanticUI" {...props} />
      <NavItem value="materialUI" {...props} />
      <NavItem value="nextJs" {...props} />
    </div>
  )
}
