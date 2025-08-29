
/* Variables */

const chars = [
  'Alhaitham',
  'Arlecchino',
  'Furina',
  'Zhongli'
];

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

  const dialogBtnsDiv = document.createElement('div');
  dialogBtnsDiv.classList.add('dialg-btns-div');
    const okErrorBtn = document.createElement('button');
    okErrorBtn.classList.add('btn', 'hid');
    okErrorBtn.textContent = 'OK';
    okErrorBtn.addEventListener('click', deleteData);

    const closeErrorBtn = document.createElement('button');
    closeErrorBtn.classList.add('btn');
    closeErrorBtn.textContent = 'Close';
    closeErrorBtn.addEventListener('click', closeDialog);
  dialogBtnsDiv.appendChild(okErrorBtn);
  dialogBtnsDiv.appendChild(closeErrorBtn);
errorDialog.appendChild(errorText);
errorDialog.appendChild(dialogBtnsDiv);

document.body.appendChild(errorDialog);

const header = document.createElement('header');
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header-div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Not a Fight Club';

    const nav = document.createElement('nav');
      const battleBtn = document.createElement('button');
      battleBtn.classList.add('nav-btn', 'battle');
      battleBtn.addEventListener('click', loadBattlePage);

      const profileBtn = document.createElement('button');
      profileBtn.classList.add('nav-btn', 'profile');
      profileBtn.addEventListener('click', loadProfilePage);

      const settingsBtn = document.createElement('button');
      settingsBtn.classList.add('nav-btn', 'settings');
      settingsBtn.addEventListener('click', loadSettingsPage);
    nav.appendChild(battleBtn);
    nav.appendChild(profileBtn);
    nav.appendChild(settingsBtn);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(nav);
header.appendChild(headerDiv);

const main = document.createElement('main');
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main-div');
    const regPage = document.createElement('form');
    regPage.setAttribute('action', 'javascript:void(0)');
    regPage.classList.add('column-div');
    regPage.setAttribute('name', 'charname');
      const regH2 = document.createElement('h2');
      regH2.textContent = 'Create your character';

      const regLabel = document.createElement('label');
      regLabel.textContent = 'Character name:';
      regLabel.setAttribute('for', 'charname');

      const regInput = document.createElement('input');
      regInput.setAttribute('id', 'charname');
      regInput.setAttribute('name', 'charname');
      regInput.setAttribute('type', 'text');
      regInput.setAttribute('autocomplete', 'on');
      regInput.setAttribute('minlength', 1);
      regInput.setAttribute('maxlength', 40);

      const regBtn = document.createElement('button');
      regBtn.setAttribute('type', 'submit');
      regBtn.setAttribute('name', 'charname');
      regBtn.classList.add('btn');
      regBtn.textContent = 'Create!';
      regBtn.setAttribute('value', 'Create!');
      regBtn.addEventListener('click', createCharacter);
    regPage.appendChild(regH2);
    regPage.appendChild(regLabel);
    regPage.appendChild(regInput);
    regPage.appendChild(regBtn);

    const battlePage = document.createElement('div');
    battlePage.classList.add('column-div', 'hid');
      const battleH2 = document.createElement('h2');
      battleH2.textContent = 'Start the battle!';

      const fightBtn = document.createElement('button');
      fightBtn.classList.add('btn');
      fightBtn.textContent = 'Fight!';
      fightBtn.addEventListener('click', startBattle);
    battlePage.appendChild(battleH2);
    battlePage.appendChild(fightBtn);

    const profilePage = document.createElement('div');
    profilePage.classList.add('profile-div', 'hid');
      const profileH2 = document.createElement('h2');
      profileH2.textContent = 'Character profile';

      const charDiv = document.createElement('div');
      charDiv.classList.add('char-div');
        const avatar = document.createElement('img');
        avatar.classList.add('character-pic');
        avatar.setAttribute('src', `./assets/chars/${chars[data.avatar]}.png`);
        avatar.setAttribute('alt', 'Character Picture');

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description-div');
          const profileName = document.createElement('p');
          profileName.textContent = data.charName;

          const resultsDiv = document.createElement('div');
          resultsDiv.classList.add('results-div');
            const winsDiv = document.createElement('div');
            winsDiv.classList.add('wins-loses-div');
              const winsPar = document.createElement('p');
              winsPar.classList.add('wins');
              winsPar.textContent = 'Wins:';

              const winsNum = document.createElement('p');
              winsNum.classList.add('wins');
              winsNum.textContent = data.wins;
            winsDiv.appendChild(winsPar);
            winsDiv.appendChild(winsNum);

            const losesDiv = document.createElement('div');
            losesDiv.classList.add('wins-loses-div');
              const losesPar = document.createElement('p');
              losesPar.classList.add('loses');
              losesPar.textContent = 'Loses:';

              const losesNum = document.createElement('p');
              losesNum.classList.add('loses');
              losesNum.textContent = data.loses;
            losesDiv.appendChild(losesPar);
            losesDiv.appendChild(losesNum);
          resultsDiv.appendChild(winsDiv);
          resultsDiv.appendChild(losesDiv);

          const selectAvatar = document.createElement('select');
          selectAvatar.addEventListener('change', updateAvatar);
            const optionDefault = document.createElement('option');
            optionDefault.setAttribute('value', '');
            optionDefault.setAttribute('disabled', true);
            optionDefault.setAttribute('selected', true);
            optionDefault.textContent = 'Change character';

            const option0 = document.createElement('option');
            option0.setAttribute('value', 0);
            option0.textContent = 'Alhaitham';

            const option1 = document.createElement('option');
            option1.setAttribute('value', 1);
            option1.textContent = 'Arlecchino';

            const option2 = document.createElement('option');
            option2.setAttribute('value', 2);
            option2.textContent = 'Furina';

            const option3 = document.createElement('option');
            option3.setAttribute('value', 3);
            option3.textContent = 'Zhongli';
          selectAvatar.appendChild(option0);
          selectAvatar.appendChild(option1);
          selectAvatar.appendChild(option2);
          selectAvatar.appendChild(option3);
          selectAvatar.appendChild(optionDefault);
        descriptionDiv.appendChild(profileName);
        descriptionDiv.appendChild(resultsDiv);
        descriptionDiv.appendChild(selectAvatar);
      charDiv.appendChild(avatar);
      charDiv.appendChild(descriptionDiv);
    profilePage.appendChild(profileH2);
    profilePage.appendChild(charDiv);

    const settingsPage = document.createElement('div');
    settingsPage.classList.add('settings-div', 'hid');
      const settingsH2 = document.createElement('h2');
      settingsH2.textContent = 'Settings';

      const playerNameDiv = document.createElement('div');
      playerNameDiv.classList.add('player-name-div');
        const playerNameText = document.createElement('p');
        playerNameText.classList.add('player-name-p');
        playerNameText.textContent = 'Player name:';
        const playerName = document.createElement('p');
        playerName.classList.add('player-name-p');
        playerName.textContent = data.charName;
        const editBtn = document.createElement('button');
        editBtn.classList.add('btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editName);

        const nameInputDiv = document.createElement('div');
        nameInputDiv.classList.add('name-input-div', 'hid');
          const nameInput = document.createElement('input');
          nameInput.setAttribute('type', 'text');
          nameInput.setAttribute('minlength', 1);
          nameInput.setAttribute('maxlength', 40);
          const doneBtn = document.createElement('button');
          doneBtn.classList.add('btn');
          doneBtn.textContent = 'Done';
          doneBtn.addEventListener('click', changeName);
        nameInputDiv.appendChild(nameInput);
        nameInputDiv.appendChild(doneBtn);
      playerNameDiv.appendChild(playerNameText);
      playerNameDiv.appendChild(playerName);
      playerNameDiv.appendChild(editBtn);
      playerNameDiv.appendChild(nameInputDiv);

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'delete-btn');
      deleteBtn.textContent = 'Delete Data';
      deleteBtn.addEventListener('click', showDeleteDialog);
    settingsPage.appendChild(settingsH2);
    settingsPage.appendChild(playerNameDiv);
    settingsPage.appendChild(deleteBtn);

    const error404Page = document.createElement('div');
    error404Page.classList.add('column-div', 'hid');
      const error404h2 = document.createElement('h2');
      error404h2.textContent = 'Error 404!';

      const error404p = document.createElement('p');
      error404p.textContent = 'Page not found.';

      const error404btn = document.createElement('button');
      error404btn.classList.add('btn');
      error404btn.textContent = 'Go Home';
      error404btn.addEventListener('click', loadRegPage);
    error404Page.appendChild(error404h2);
    error404Page.appendChild(error404p);
    error404Page.appendChild(error404btn);
  mainDiv.appendChild(regPage);
  mainDiv.appendChild(battlePage);
  mainDiv.appendChild(profilePage);
  mainDiv.appendChild(settingsPage);
  mainDiv.appendChild(error404Page);
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
  loadBattlePage();
}

/* Navigation */

function loadRegPage() {
  checkLS();
  if (data.charName === '') {
    regPage.classList.remove('hid');
    regInput.value = '';
    battlePage.classList.add('hid');
    profilePage.classList.add('hid');
    settingsPage.classList.add('hid');
    error404Page.classList.add('hid');
  }
}

function loadBattlePage() {
  checkLS();
  if (data.charName !== '') {
    regPage.classList.add('hid');
    battlePage.classList.remove('hid');
    profilePage.classList.add('hid');
    settingsPage.classList.add('hid');
  } else {
    loadError404Page();
  }
}

function loadProfilePage() {
  checkLS();
  if (data.charName !== '') {
    regPage.classList.add('hid');
    battlePage.classList.add('hid');
    profilePage.classList.remove('hid');
    settingsPage.classList.add('hid');

    profileName.textContent = data.charName;
    avatar.setAttribute('src', `./assets/chars/${chars[data.avatar]}.png`);
  } else {
    loadError404Page();
  }
}

function loadSettingsPage() {
  checkLS();
  if (data.charName !== '') {
    regPage.classList.add('hid');
    battlePage.classList.add('hid');
    profilePage.classList.add('hid');
    settingsPage.classList.remove('hid');
  
    playerName.textContent = data.charName;
    playerName.classList.remove('hid');
    nameInputDiv.classList.add('hid');
  } else {
    loadError404Page();
  }
}

function loadError404Page() {
  checkLS();
  if (data.charName === '') {
    regPage.classList.add('hid');
    battlePage.classList.add('hid');
    profilePage.classList.add('hid');
    settingsPage.classList.add('hid');
    error404Page.classList.remove('hid');
  }
}

/* Functionality */

function createCharacter() {
  const val = regInput.value.toString();
  if (val.length > 1 && val.length < 41) {
    data.charName = val;
    writeLS(data);
    loadBattlePage();
  } else {
    throwDialogError('Error: Invalid Character Name!');
  }
}

function startBattle() {}

function updateAvatar() {
  val = selectAvatar.selectedIndex;
  if (val !== '') {
    data.avatar = parseInt(val);
    console.log(data.avatar);
    console.log(data);
    writeLS(data);
    avatar.setAttribute('src', `./assets/chars/${chars[data.avatar]}.png`);
  }
}

function editName() {
  playerName.classList.add('hid');
  editBtn.classList.add('hid');
  nameInputDiv.classList.remove('hid');
  nameInput.value = data.charName;
}

function changeName() {
  playerName.classList.remove('hid');
  editBtn.classList.remove('hid');
  nameInputDiv.classList.add('hid');

  const val = nameInput.value.toString();
  if (val.length > 1 && val.length < 41) {
    data.charName = val;
    writeLS(data);
    playerName.textContent = data.charName;
    profileName.textContent = data.charName;
  } else {
    throwDialogError('Error: Invalid Character Name!');
  }
}

function showDeleteDialog() {
  nameInputDiv.classList.add('hid');
  nameInput.value = '';
  playerName.classList.remove('hid');

  throwDialogError('Delete character data?');
  okErrorBtn.classList.remove('hid');
}

function deleteData() {
  okErrorBtn.classList.add('hid');
  removeLS();
  data.charName = '';
  closeDialog()
  loadRegPage();
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

function checkLS() {
  if (localStorage.NotGenshinClub) {
    data = JSON.parse(localStorage.getItem('NotGenshinClub'));
  }
}

function removeLS() {
  if (localStorage.NotGenshinClub) {
    localStorage.removeItem('NotGenshinClub');
  }
}

