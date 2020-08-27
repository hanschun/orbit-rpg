import React from 'react'
import {Link} from 'gatsby'
import Planets from '../components/planets'

export default function Home() {
  const [title, setTitle] = React.useState('')

  React.useEffect(() => {
    const orbit = 'Orbit'
    if (title !== orbit) {
      setTitle(orbit)
    }
    return (
      () => {}
    )
  }, [title])

return (
  <main>
    <div style={{float: "right"}}>
      <Link to='/profile/'>My Profile</Link>
    </div>
    <h1>{title}</h1>
    <div>
      <Link to='/about/'>About Orbit</Link>
    </div>
    <Planets />
  </main>)
}
