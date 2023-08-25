import { Link } from 'react-router-dom'

interface LinkProps {
    name: string
    href: string
}

const AppLink: React.FC<LinkProps> = ({name, href}) => {
  return (
    <Link to={href}>
      {name}
    </Link>
  )
}

export default AppLink
