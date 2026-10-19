import navbar from "./components/navbar";

function App() {
  return (
    <div>
      <nav>
        <a>Home</a>
        <a>category</a>
        <a>task</a>
      </nav>

      <hr></hr>

      <div>
        <h2>main content</h2>
        <div>
          <h3>Posts</h3>
        </div>
      </div>

      <hr></hr>

      <footer>
        <h2>support</h2>
        <h2>location</h2>
        <h2>contact</h2>
      </footer>
    </div>
  );
}

export default App;
