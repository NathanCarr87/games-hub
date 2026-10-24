import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="site-header">
        <div className="header-content">
          <a href="/" className="site-logo-link">
            <span className="logo-icon">🎮</span>
            <span className="logo-text">Games Hub</span>
          </a>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">Games Hub</h1>
          <p className="hero-tagline">
            Discover and play exciting browser games directly in your web browser. Instant fun, no installation required!
          </p>
        </section>

        <section className="games-section" aria-labelledby="games-heading">
          <div className="section-header">
            <h2 id="games-heading">Games</h2>
          </div>

          <div className="games-grid">
            {/* Featured Game Card: Word Search */}
            <article className="game-card featured">
              <div className="game-card-content">
                <div className="game-badge">Featured</div>
                <h3 className="game-title">Word Search</h3>
                <p className="game-description">
                  Challenge your mind! Find all hidden words in the grid in this classic word puzzle game.
                </p>
                <div className="game-card-action">
                  <a href="/word-search/" className="play-button">
                    Play Now
                  </a>
                </div>
              </div>
            </article>

            {/* Placeholder Card 1 */}
            <article className="game-card placeholder">
              <div className="game-card-content">
                <div className="game-badge coming-soon">Coming Soon</div>
                <h3 className="game-title">Puzzle Challenge</h3>
                <p className="game-description">
                  A brand new logic puzzle game is currently under development. Stay tuned for updates!
                </p>
                <div className="game-card-action">
                  <button className="play-button disabled" disabled>
                    Coming Soon
                  </button>
                </div>
              </div>
            </article>

            {/* Placeholder Card 2 */}
            <article className="game-card placeholder">
              <div className="game-card-content">
                <div className="game-badge coming-soon">Coming Soon</div>
                <h3 className="game-title">Arcade Runner</h3>
                <p className="game-description">
                  Fast-paced arcade action is coming your way. Test your reflexes and set high scores!
                </p>
                <div className="game-card-action">
                  <button className="play-button disabled" disabled>
                    Coming Soon
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Games Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
