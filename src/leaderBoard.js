export default function leaderBoard() {
  const scores = [
    { name: 'Elyor', score: 100 },
    { name: 'Henry', score: 100 },
    { name: 'Ali', score: 100 },
    { name: 'Rosine', score: 100 },
  ];
  const container = document.createElement('div');
  container.className = 'container';
  const leaderboardTitle = document.createElement('h1');
  leaderboardTitle.textContent = 'Leaderboard';
  container.appendChild(leaderboardTitle);
  const leaderboard = document.createElement('div');
  leaderboard.className = 'leaderboard';
  const scoresdiv = document.createElement('div');
  scoresdiv.className = 'scoresdiv';
  const refresh = document.createElement('div');
  refresh.className = 'refresh';
  const recentScores = document.createElement('h2');
  recentScores.textContent = 'Recent scores';
  const refreshBtn = document.createElement('div');
  const refreshBtnInput = document.createElement('input');
  refreshBtnInput.type = 'button';
  refreshBtnInput.id = 'refresh-btn';
  refreshBtnInput.value = 'Refresh';
  refresh.appendChild(recentScores);
  refresh.appendChild(refreshBtn);
  refreshBtn.appendChild(refreshBtnInput);
  scoresdiv.appendChild(refresh);
  const scoreList = document.createElement('div');
  scoreList.className = 'scoreList';
  const list = document.createElement('ul');
  scores.forEach((s) => {
    const items = document.createElement('li');
    items.textContent = `${s.name}:${s.score}`;
    list.appendChild(items);
  });
  scoreList.appendChild(list);
  scoresdiv.appendChild(scoreList);
  leaderboard.appendChild(scoresdiv);

  const addScore = document.createElement('div');
  addScore.className = 'add-score';
  const addScoreTitle = document.createElement('h2');
  addScoreTitle.className = 'addScore-title';
  addScoreTitle.textContent = 'Add Your Scores';
  const addScoreForm = document.createElement('div');
  addScoreForm.className = 'add-form';
  const addForm = document.createElement('form');
  const playerNameDiv = document.createElement('div');
  const playername = document.createElement('input');
  playername.type = 'text';
  playername.id = 'name';
  playername.placeholder = 'Your name';
  playerNameDiv.appendChild(playername);
  const playerScoreDiv = document.createElement('div');
  const playerScore = document.createElement('input');
  playerScore.type = 'text';
  playerScore.id = 'score';
  playerScore.placeholder = 'Your score';
  playerScoreDiv.appendChild(playerScore);
  const submitBtnDiv = document.createElement('div');
  const submitBtn = document.createElement('input');
  submitBtn.type = 'button';
  submitBtn.id = 'submit';
  submitBtn.value = 'Submit';
  submitBtnDiv.appendChild(submitBtn);
  addForm.appendChild(playerNameDiv);
  addForm.appendChild(playerScoreDiv);
  addForm.appendChild(submitBtnDiv);
  addScoreForm.appendChild(addForm);
  addScore.appendChild(addScoreTitle);
  addScore.appendChild(addScoreForm);
  leaderboard.appendChild(addScore);
  container.appendChild(leaderboard);

  return container;
}