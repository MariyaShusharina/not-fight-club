
// Variables

const charName = '';
const wins = 0;
const loses = 0;

// Generation of the Page content

const header = document.createElement('header');
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header-div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Not a Fight Club';

    const nav = document.createElement('nav');
      const battleBtn = document.createElement('button');
      battleBtn.classList.add('nav-btn', 'battle');
      battleBtn.addEventListener('click', battlePage());

      const profileBtn = document.createElement('button');
      profileBtn.classList.add('nav-btn', 'profile');
      profileBtn.addEventListener('click', profilePage());

      const editBtn = document.createElement('button');
      editBtn.classList.add('nav-btn', 'edit');
      editBtn.addEventListener('click', edit());
    nav.appendChild(battleBtn);
    nav.appendChild(profileBtn);
    nav.appendChild(editBtn);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(nav);
header.appendChild(headerDiv);

const main = document.createElement('main');

const footer = document.createElement('footer');
  const footerDiv = document.createElement('div');
  footerDiv.classList.add('footer-div');

    const gitHubCredit = document.createElement('div');
    gitHubCredit.classList.add('github-credit');
      const gitHubPar = document.createElement('p');
      gitHubPar.classList.add('github-paragraph');
        const gitHubText = document.createElement('span');
        gitHubText.textContent = 'The site created in 2025 by';
        const gitHubLink = document.createElement('a');
        gitHubLink.setAttribute('href', 'https://github.com/MariyaShusharina');
        gitHubLink.setAttribute('target', '_blank');
        gitHubLink.textContent = 'MariyaShusharina';
      gitHubPar.appendChild(gitHubText);
      gitHubPar.appendChild(gitHubLink);

      const credits = document.createElement('p');
      credits.textContent = 'Authorship of all images belongs to its legal owners';
    gitHubCredit.appendChild(gitHubPar);
    gitHubCredit.appendChild(credits);

    const rssDiv = document.createElement('div');
    rssDiv.classList.add('rss-div');
      const rssLink = document.createElement('a');
      rssLink.setAttribute('href', 'https://rs.school/courses/javascript-ru');
      rssLink.setAttribute('target', '_blank');
      rssLink.classList.add('rss-link');
        const rssImg = document.createElement('img');
        rssImg.setAttribute('src', './assets/rss-logo.svg');
        rssImg.setAttribute('width', '40');
        rssImg.setAttribute('height', '40');
        rssImg.setAttribute('alt', 'RS School');
      rssLink.appendChild(rssImg);
    rssDiv.appendChild(rssLink);

  footerDiv.appendChild(gitHubCredit);
  footerDiv.appendChild(rssDiv);
footer.appendChild(footerDiv);

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

/* Functionality */

function battlePage() {}

function profilePage() {}

function edit() {}

