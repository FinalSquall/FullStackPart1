import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => setGood(good+1)
  const handleSetNeutral = () => setNeutral(neutral+1)
  const handleSetBad = () => setBad(bad+1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onReceiveFeedback={handleSetGood} text='good'/>
      <Button onReceiveFeedback={handleSetNeutral} text='neutral'/>
      <Button onReceiveFeedback={handleSetBad} text='bad'/>
      <div>
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onReceiveFeedback}>{props.text}</button>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  const countTotalFeedback = () => {
    return good+neutral+bad
  }
  const calculateAverage = () => {
    return (good-bad)/countTotalFeedback()
  }

  const calculatePositivePercentage = () => {
    return good/countTotalFeedback() * 100
  }
  if (countTotalFeedback() > 0) {
    return (
      <table>
        <tbody>
          <Statistic name='good' num={good}/>
          <Statistic name='neutral' num={neutral}/>
          <Statistic name='bad' num={bad}/>
          <Statistic name='total' num={countTotalFeedback()}/>
          <Statistic name='average' num={calculateAverage()}/>
          <Statistic name='positive' num={calculatePositivePercentage()}/>
        </tbody>
      </table>
    )
  }
  return (
    <p>No feedback provided.</p>
  )
}

const Statistic = (props) => {
  if (props.name === 'positive') {
    return (
      <tr>
        <td>
          {props.name} 
        </td>
        <td>
          {props.num}%
        </td>
      </tr>
    )
  } else {
  return (
    <tr>
        <td>
          {props.name} 
        </td>
        <td>
          {props.num}
        </td>
    </tr>
    )
  }
}

export default App