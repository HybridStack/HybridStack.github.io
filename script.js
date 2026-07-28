document.getElementById('year').textContent = new Date().getFullYear();

const GITHUB_USER = 'HybridStack';

const descriptions = {
  'QuickCopy': 'A fast clipboard manager for developers.',
  'promptly': 'AI prompt management tool.',
  'quick-foto': 'Photo utility app for quick image processing.',
  'GridCopy': 'Grid-based clipboard utility for organized copying.',
  'id-card-scanner': 'ID card scanning and data extraction tool.',
};

async function fetchRepos() {
  const grid = document.getElementById('repo-grid');
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`);
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const repos = await res.json();

    const own = repos.filter(r => !r.fork);

    if (own.length === 0) {
      grid.innerHTML = '<p>No public repositories yet.</p>';
      return;
    }

    grid.innerHTML = own.map(r => `
      <div class="repo-card">
        <h3><a href="${r.html_url}" target="_blank">${r.name}</a></h3>
        <p>${descriptions[r.name] || r.description || 'No description'}</p>
        <div class="repo-meta">
          ${r.language ? `<span class="lang">${r.language}</span>` : ''}
          ${r.stargazers_count > 0 ? `<span>${r.stargazers_count} star${r.stargazers_count > 1 ? 's' : ''}</span>` : ''}
          ${r.homepage ? `<a href="${r.homepage}" target="_blank">Live</a>` : ''}
        </div>
      </div>
    `).join('');
  } catch (err) {
    grid.innerHTML = `<p>Could not load projects. <a href="https://github.com/${GITHUB_USER}" target="_blank">View on GitHub &rarr;</a></p>`;
  }
}

fetchRepos();
