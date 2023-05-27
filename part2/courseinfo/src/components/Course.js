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

  export default Course