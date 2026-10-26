import './App.css'

function App() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Games Hub</h1>
        <p className="tagline">A home for browser games.</p>
      </header>

      <section className="games-section">
        <h2>Games</h2>
        <div className="cards-grid">
          <div className="card card-playable">
            <h3>Word Search</h3>
            <p>Find hidden words in a fun puzzle.</p>
            <a href="/word-search/" className="card-link">Play Word Search</a>
          </div>

          <div className="card card-upcoming">
            <h3>Rails Between Us</h3>
            <p>Build railway connections and complete your routes.</p>
            <span className="badge">Coming Soon</span>
          </div>

          <div className="card card-upcoming">
            <h3>Hexagon Game</h3>
            <p>A tactical, turn-based strategy game.</p>
            <span className="badge">Coming Soon</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
