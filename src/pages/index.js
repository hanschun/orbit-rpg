import React from 'react'
import Planets from '../components/planets'
import Layout from '../components/layout'

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
    <Layout>
      <Planets />
    </Layout>
  </main>)
}
