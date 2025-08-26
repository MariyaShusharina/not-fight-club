
/* Variables */

const charName = '';
const wins = 0;
const loses = 0;

/* Data Object */

let data = {
  charName: '',
  avatar: 0,
  wins: 0,
  loses: 0,
};

/* Generation of the Page content */

const errorDialog = document.createElement('dialog');
errorDialog.classList.add('error-dialog');
  const errorText = document.createElement('p');
  errorText.textContent = 'Error occured!';

  const closeErrorBtn = document.createElement('button');
  closeErrorBtn.classList.add('btn');
  closeErrorBtn.textContent = 'Close';
  closeErrorBtn.addEventListener('click', closeDialog);
errorDialog.appendChild(errorText);
errorDialog.appendChild(closeErrorBtn);

document.body.appendChild(errorDialog);

const header = document.createElement('header');
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header-div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Not a Fight Club';

    const nav = document.createElement('nav');
      const battleBtn = document.createElement('button');
      battleBtn.classList.add('nav-btn', 'battle');
      battleBtn.addEventListener('click', battlePage);

      const profileBtn = document.createElement('button');
      profileBtn.classList.add('nav-btn', 'profile');
      profileBtn.addEventListener('click', profilePage);

      const editBtn = document.createElement('button');
      editBtn.classList.add('nav-btn', 'edit');
      editBtn.addEventListener('click', edit);
    nav.appendChild(battleBtn);
    nav.appendChild(profileBtn);
    nav.appendChild(editBtn);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(nav);
header.appendChild(headerDiv);

const main = document.createElement('main');
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main-div');
    const regPage = document.createElement('div');
    regPage.classList.add('reg-div');
      const regH2 = document.createElement('h2');
      regH2.textContent = 'Create your character';

      const regLabel = document.createElement('label');
      regLabel.textContent = 'Character name:';
      regLabel.setAttribute('for', 'charname');

      const regInput = document.createElement('input');
      regInput.setAttribute('id', 'charname');
      regInput.setAttribute('type', 'text');
      regInput.setAttribute('minlength', 1);
      regInput.setAttribute('maxlength', 40);

      const regBtn = document.createElement('button');
      regBtn.classList.add('btn');
      regBtn.textContent = 'Create!';
      regBtn.addEventListener('click', createCharacter);
    regPage.appendChild(regH2);
    regPage.appendChild(regLabel);
    regPage.appendChild(regInput);
    regPage.appendChild(regBtn);
  mainDiv.appendChild(regPage);
main.appendChild(mainDiv);

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

/* Onload functionality */

getLS();
if (data.charName !== '') {
  regPage.classList.add('hid');
}

/* Navigation */

function battlePage() {}

function profilePage() {}

function edit() {}

/* Functionality */

function createCharacter() {
  const val = regInput.value.toString();
  if (val.length > 1 && val.length < 41) {
    data.charName = val;
    writeLS(data);
    regPage.classList.add('hid');
  } else {
    throwDialogError('Error: Invalid Character Name!');
  }
}

/* Error Dialog functionality */

function throwDialogError(message = 'Error occured!') {
  errorDialog.showModal();
  errorText.textContent = message;
}

function closeDialog() {
  errorDialog.close();
}

/* Local Storage helper */

function writeLS(val) {
  localStorage.setItem('NotGenshinClub', JSON.stringify(val));
}

function getLS() {
  if (localStorage.NotGenshinClub) {
    data = JSON.parse(localStorage.getItem('NotGenshinClub'));
  } else {
    writeLS(data);
  }
}

