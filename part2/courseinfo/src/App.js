const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  const parts = props.parts.map(part => <Part key={part.id} part={part}/>)
  return(
  <div>
    {parts}
  </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <h3>Total number of exercises: {props.parts.reduce((acc,curr)=>acc+curr.exercises,0)}</h3>
    </div>
  )
}

const Course = (props) => {
  return(
    <div>
      <Header course={props.course}/>
      <Content parts={props.course.parts}/>
      <Total parts={props.course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Test part',
        exercises: 8,
        id: 4
      }
    ]
  }

  return (
    <Course course={course}/>
  )
}

export default App
