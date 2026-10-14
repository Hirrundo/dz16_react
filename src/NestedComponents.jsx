import DeepWelcome from './DeepWelcome';

function LevelThree() {
  return (
    <div>
      <h3>Уровень 3</h3>
      <DeepWelcome />
    </div>
  );
}

function LevelTwo() {
  return (
    <div>
      <h3>Уровень 2</h3>
      <LevelThree />
    </div>
  );
}

function LevelOne() {
  return (
    <div>
      <h3>Уровень 1</h3>
      <LevelTwo />
    </div>
  );
}

export default LevelOne;