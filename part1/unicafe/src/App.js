import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticsLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {

  const calculateTotal = () => props.good+props.neutral+props.bad

  //good*1+neutral*0+bad*(-1) / total = good-bad / total
  const calculateAverage = () => (props.good-props.bad)/calculateTotal()

  const calculatePositive = () => (props.good/calculateTotal())*100

  if(calculateTotal() > 0) {
  return(
      <table>
        <tbody>
        <StatisticsLine text="Good" value={props.good}/>
        <StatisticsLine text="Neutral" value={props.neutral}/>
        <StatisticsLine text="Bad" value={props.bad}/>
        <StatisticsLine text="Total feedback" value={calculateTotal()}/>
        <StatisticsLine text="Average" value={calculateAverage()}/>
        <StatisticsLine text="Positive" value={calculatePositive()+"%"}/>
        </tbody>
      </table>
  )
  }
  return(<p>No feedback given</p>)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>How was our service today?</h1>
      <Button text="Good" handleClick={() => setGood(good+1)}/>
      <Button text="Neutral" handleClick={() => setNeutral(neutral+1)}/>
      <Button text="Bad" handleClick={() => setBad(bad+1)}/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
