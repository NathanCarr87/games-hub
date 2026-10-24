import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders main site heading and hero tagline', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: 'Games Hub' });
    expect(heading).toBeInTheDocument();
    expect(
      screen.getByText(/discover and play exciting browser games directly in your web browser/i)
    ).toBeInTheDocument();
  });

  test('renders Games section header', () => {
    render(<App />);
    const sectionHeading = screen.getByRole('heading', { level: 2, name: 'Games' });
    expect(sectionHeading).toBeInTheDocument();
  });

  test('renders Word Search game card with Play Now link pointing to /word-search/', () => {
    render(<App />);
    const wordSearchHeading = screen.getByRole('heading', { level: 3, name: 'Word Search' });
    expect(wordSearchHeading).toBeInTheDocument();

    const playNowLink = screen.getByRole('link', { name: /play now/i });
    expect(playNowLink).toBeInTheDocument();
    expect(playNowLink).toHaveAttribute('href', '/word-search/');
  });

  test('renders two placeholder cards clearly marked "Coming Soon"', () => {
    render(<App />);
    const comingSoonBadges = screen.getAllByText('Coming Soon');
    expect(comingSoonBadges.length).toBeGreaterThanOrEqual(2);
  });
});
