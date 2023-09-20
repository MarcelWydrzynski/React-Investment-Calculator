import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ResultTable from "./components/Results/ResultTable";

function App() {
  const [results, setResults] = useState(null);
  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {!results && <p>No investment yet.</p>}
      {results && <ResultTable data={results} />}
    </div>
  );
}

export default App;
