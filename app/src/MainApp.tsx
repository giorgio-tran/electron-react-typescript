import { useState } from "react";
import Container from "./components/Container";

const MainApp = () => {
  const [userChoice, setUserChoice] = useState<string>("");
  const handleSetUserChoice = (choice: string) => {
    setUserChoice(choice);
  }

  const choices = ["rock", "paper", "scissors"];

  return (
    <Container>
      <div className='title-xl'>Hello</div>
      <div className="choices-container">
        {choices.map((choice, index): JSX.Element => {
          return (
            <button key={index} onClick={() => handleSetUserChoice(choice)}>
              {choice}
            </button>
          );
        })}
      </div>
      <div>{`Player choice: ${userChoice}`}</div>
    </Container>
  );
}

export default MainApp;