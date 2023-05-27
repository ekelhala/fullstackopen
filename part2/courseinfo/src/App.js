const Header = (props) => {
  return(<h2>{props.course.name}</h2>)
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
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  const coursesToRender = courses.map(course => <Course key={course.id} course={course}/>)
  return (
    <div>
      <h1>All courses</h1>
      {coursesToRender}
    </div>
  )
}

export default App
