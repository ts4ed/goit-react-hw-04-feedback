import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistic';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import s from './App.module.css';

const options = ['good', 'neutral', 'bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const positivePercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  const handFeedback = e => {
    const name = e.target.textContent.toLowerCase();

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };
  return (
    <div className={s.section}>
      <Section title="Please leave feedback">
        <Feedback options={options} handFeedback={handFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage()}
          />
        )}
      </Section>
    </div>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// positivePercentage = () => {
//   const { good, neutral, bad } = this.state;
//   return Math.round((good * 100) / (good + neutral + bad));
// };

// handFeedback = e => {
//   const btn = e.target.textContent.toLowerCase();
//   this.setState(prevState => ({
//     ...prevState,
//     [btn]: prevState[btn] + 1,
//   }));
// };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const { countTotalFeedback, positivePercentage, handFeedback, state } =
//       this;
//     return (
//       <div className={s.section}>
//         <Section title="Please leave feedback">
//           <Feedback options={Object.keys(state)} handFeedback={handFeedback} />
//         </Section>
//         <Section title="Statistics">
//           {countTotalFeedback() === 0 ? (
//             <Notification message="No feedback given" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback()}
//               positivePercentage={positivePercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
