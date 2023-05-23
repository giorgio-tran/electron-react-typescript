import Choice from "./components/Choice";
import Container from "./components/Container";

const MainApp = () => {
  return (
    <Container>
      <div className='title-xl'>Hello</div>
      <div className="choices-container">
        <Choice name="rock" />
        <Choice name="paper" />
        <Choice name="scissors" />
      </div>
    </Container>
  );
}

export default MainApp;