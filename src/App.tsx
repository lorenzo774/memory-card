import GameContainer from "./components/GameContainer";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Memory card</h1>
      </header>
      <main>
        <GameContainer />
      </main>
      <footer>
        <p>
          By{" "}
          <a
            target="_blank"
            href="https://github.com/lorenzo774"
          >
            Lorenzo774
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
