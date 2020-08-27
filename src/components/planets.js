import React from 'react'
// import * as planets from '../../data/planets.json'
const planets = [
  {
    heading: 'robotics',
    subjects: ['ai', 'automation', 'programming']
  },
  {
    heading: 'baking',
    subjects: ['cake', 'bread', 'biscuits']
  },
  {
    heading: 'games',
    subjects: ['video games', 'tabletop games', 'board games']
  }
];

export default function Planets(props) {
  const [list] = React.useState(planets)


  function ListItem({item}) {
    // UPDATE THIS TO A GRAPHQL QUERY TO FIND ALL POSTS BY SUBJECT
  return <div>{item}</div>
  }

  function SubjectList({list}) {
    const vals = Array.from(list)
    const listItems = vals.map(i => <ListItem item={i} />)
    return (
      <div>{listItems}</div>
    )
  }

  function PlanetList({list}) {
  
    const listItems = list.map((i) => (
      <>
        <h2>{i.heading}</h2>
        {/* <Link to={/`i.heading`/} />  THIS WILL BE IMPLEMENTED WITH A GRAPHQL QUERY */}
        <SubjectList list={i.subjects} />
      </>
      )
    )
    return (
      <div>{listItems}</div>
    )
  }

  return <PlanetList list={list}/>
}