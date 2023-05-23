import { useState } from "react";
import Container from "./components/Container";

const MainApp = () => {
  const [userChoice, setUserChoice] = useState<string>("");
  const [cpuChoice, setCpuChoice] = useState<string>("");
  const [winner, setWinner] = useState<string>("");
  
  const choices = ["rock", "paper", "scissors"];

  const getCpuChoice = () => {
    const index = Math.floor(Math.random() * 3);
    const cpuChoice = choices[index];
    setCpuChoice(cpuChoice);
  }

  const handleClick = (choice: string) => {
    setUserChoice(choice);
    getCpuChoice();
    determineWinner(choice);

  }

  const determineWinner = (choice: string) => {
    const index = Math.floor(Math.random() * 3);
    const cpuChoice = choices[index];

    if (userChoice) {
      setCpuChoice(cpuChoice);
    }

    if (choice === choices[index]) {
      setWinner("neither player");
    } else if (choice === "rock" && cpuChoice === "paper"
      || choice === "paper" && cpuChoice === "scissors"
      || choice === "scissors" && cpuChoice === "rock") {
      setWinner("CPU");
    } else if (choice !== "") {
      setWinner("Player");
    } else {
      setWinner("");
    }
  }

  return (
    <Container>
      <div className='title-xl'>Hello</div>
      <div className="choices-container">
        {choices.map((choice, index): JSX.Element => {
          return (
            <button key={index} onClick={() => {handleClick(choice)}}>
              {choice}
            </button>
          );
        })}
      </div>
      <div>{`Player choice: ${userChoice}`}</div>
      <div>{`Computer choice: ${cpuChoice}`}</div>
      <div>{`Round winner: ${winner}`}</div>
    </Container>
  );
}

export default MainApp;