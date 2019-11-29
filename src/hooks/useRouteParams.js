
import { useRouteMatch } from 'react-router'

export default path => {
  const match = useRouteMatch(path)

  if (!match) {
    return {}
  }

  return match.params
}
