import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>ENGLISH DICTIONARY</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer">
          Coded by {""}
          <a
            href="https://github.com/Amanda-Choi/Simple-Dictionary-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amanda Choi
          </a>
        </footer>
      </div>
    </div>
  );
}
