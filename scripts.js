
/* Variables */

const hit = 10;
const critHit = 15;
const playerCrit= 0.7;

const charBody = [
  'Head',
  'Neck',
  'Body',
  'Belly',
  'Legs'
];

const enemyBody = [
  'Head',
  'Neck',
  'Body',
  'Belly',
  'Legs/Tail'
];

const chars = [
  'Alhaitham',
  'Arlecchino',
  'Furina',
  'Zhongli'
];

const enemies = [
  {
    src: 'Dragon',
    title: 'Dragon',
    hp: 200,
    attack: 2,
    defence: 1,
    crit: 0.5,
  },
  {
    src: 'Frost_Operative',
    title: 'Frost Operative',
    hp: 120,
    attack: 1,
    defence: 2,
    crit: 0.7,
  },
  {
    src: 'Golden_Wolflord',
    title: 'Golden Wolflord',
    hp: 300,
    attack: 1,
    defence: 1,
    crit: 0.3,
  },
  {
    src: 'The_guy_who_calls_himself_Sanka',
    title: 'The guy who calls himself Sanka',
    hp: 100,
    attack: 2,
    defence: 1,
    crit: 0.6,
  },
  {
    src: 'Thunder_Manifestation',
    title: 'Thunder Manifestation',
    hp: 170,
    attack: 3,
    defence: 1,
    crit: 0.5,
  },
];

/* Data Object */

let data = {
  charName: '',
  avatar: 0,
  wins: 0,
  loses: 0,
  inBattle: false,
  char: {
    hp: 100,
    attack: -1,
    defence: [-1, -1]
  },
  enemy: {
    id: 0,
    hp: 200,
    attackChoice: [],
    defenceChoice: [],
  }
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
    battlePage.classList.add('column-div');
      const battleH2 = document.createElement('h2');
      battleH2.textContent = 'Start the battle!';

      const fightBtn = document.createElement('button');
      fightBtn.classList.add('btn');
      fightBtn.textContent = 'Fight!';
      fightBtn.addEventListener('click', startBattle);
    battlePage.appendChild(battleH2);
    battlePage.appendChild(fightBtn);

    const arenaPage = document.createElement('div');
    arenaPage.classList.add('column-div');
      const arenaH2 = document.createElement('h2');
      arenaH2.classList.add('arena-h2');
      arenaH2.textContent = 'Arena';

      const colliseum = document.createElement('div');
      colliseum.classList.add('colliseum');
        const charCard = document.createElement('div');
        charCard.classList.add('column-div', 'char-card');
          charTitle = document.createElement('p');
          charTitle.textContent = data.charName;

          const charPic = document.createElement('img');
          charPic.classList.add('character-pic');
          charPic.setAttribute('src', `./assets/chars/${chars[data.avatar]}.png`);
          charPic.setAttribute('alt', 'Character Picture');

          const charHPbar = document.createElement('progress');
          charHPbar.classList.add('health-bar');
          charHPbar.setAttribute('value', data.char.hp);
          charHPbar.setAttribute('max', 100);

          const charHPdiv = document.createElement('div');
          charHPdiv.classList.add('flat-div');
            const charHPnum = document.createElement('span');
            charHPnum.textContent = data.char.hp;

            const charHPfixed = document.createElement('span');
            charHPfixed.textContent = '/100';
          charHPdiv.appendChild(charHPnum);
          charHPdiv.appendChild(charHPfixed);
        charCard.appendChild(charTitle);
        charCard.appendChild(charPic);
        charCard.appendChild(charHPbar);
        charCard.appendChild(charHPdiv);

        const controls = document.createElement('div');

        const enemyCard = document.createElement('div');
        enemyCard.classList.add('column-div', 'char-card');
          enemyTitle = document.createElement('p');
          enemyTitle.textContent = enemies[data.enemy.id].title;

          const enemyPic = document.createElement('img');
          enemyPic.classList.add('character-pic');
          enemyPic.setAttribute('src', `./assets/enemies/${enemies[data.enemy.id].src}.png`);
          enemyPic.setAttribute('alt', 'Enemy Picture');

          const enemyHPbar = document.createElement('progress');
          enemyHPbar.classList.add('enemy-health-bar');
          enemyHPbar.setAttribute('value', data.enemy.hp);
          enemyHPbar.setAttribute('max', enemies[data.enemy.id].hp);

          const enemyHPdiv = document.createElement('div');
          enemyHPdiv.classList.add('flat-div');
            const enemyHPnum = document.createElement('span');
            enemyHPnum.textContent = data.enemy.hp;

            const enemyHPfixed = document.createElement('span');
            enemyHPfixed.textContent = `/${enemies[data.enemy.id].hp}`;
          enemyHPdiv.appendChild(enemyHPnum);
          enemyHPdiv.appendChild(enemyHPfixed);
        enemyCard.appendChild(enemyTitle);
        enemyCard.appendChild(enemyPic);
        enemyCard.appendChild(enemyHPbar);
        enemyCard.appendChild(enemyHPdiv);
      colliseum.appendChild(charCard);
      colliseum.appendChild(controls);
      colliseum.appendChild(enemyCard);
      
      const logsWrap = document.createElement('div');
      logsWrap.classList.add('column-div', 'logs-wrap');
        const logsH3 = document.createElement('h3');
        logsH3.textContent = 'Battle logs:';

        const logsDiv = document.createElement('div');
        logsDiv.classList.add('logs-div');
      logsWrap.appendChild(logsH3);
      logsWrap.appendChild(logsDiv);
    arenaPage.appendChild(arenaH2);
    arenaPage.appendChild(colliseum);
    arenaPage.appendChild(logsWrap);

    const profilePage = document.createElement('div');
    profilePage.classList.add('profile-div');
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
    settingsPage.classList.add('settings-div');
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
    error404Page.classList.add('column-div');
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
  mainDiv.appendChild(arenaPage);
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

checkLS();
if (data.charName !== '') {
  loadBattlePage();
} else {
  loadRegPage();
}

/* Navigation */

function loadRegPage() {
  getLS();
  if (data.charName === '') {
    mainDiv.textContent = '';
    mainDiv.appendChild(regPage);
    regInput.value = '';
  }
}

function loadBattlePage() {
  getLS();
  if (data.charName !== '') {
    mainDiv.textContent = '';
    mainDiv.appendChild(battlePage);;
  } else {
    loadError404Page();
  }
}

function loadArenaPage() {
  getLS();
  if (data.charName !== '') {
    mainDiv.textContent = '';
    mainDiv.appendChild(arenaPage);
    charTitle.textContent = data.charName;
    charPic.setAttribute('src', `./assets/chars/${chars[data.avatar]}.png`);
  } else {
    loadError404Page();
  }
}

function loadProfilePage() {
  getLS();
  if (data.charName !== '') {
    mainDiv.textContent = '';
    mainDiv.appendChild(profilePage);

    profileName.textContent = data.charName;
    avatar.setAttribute('src', `./assets/chars/${chars[data.avatar]}.png`);
  } else {
    loadError404Page();
  }
}

function loadSettingsPage() {
  getLS();
  if (data.charName !== '') {
    mainDiv.textContent = '';
    mainDiv.appendChild(settingsPage);
  
    playerName.textContent = data.charName;
    playerName.classList.remove('hid');
    nameInputDiv.classList.add('hid');
  } else {
    loadError404Page();
  }
}

function loadError404Page() {
  getLS();
  if (data.charName === '') {
    mainDiv.textContent = '';
    mainDiv.appendChild(error404Page);
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

function startBattle() {
  getLS();
  //check if battle started
  //restore battle or
  //init battle and generate random enemy
  loadArenaPage();
}

function updateAvatar() {
  val = selectAvatar.selectedIndex;
  if (val !== '') {
    data.avatar = parseInt(val);
    writeLS(data);
    avatar.setAttribute('src', `./assets/chars/${chars[data.avatar]}.png`);
    charPic.setAttribute('src', `./assets/chars/${chars[data.avatar]}.png`);
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
  data.avatar = 0;
  data.wins = 0;
  data.loses = 0;
  clearBattleData();
  closeDialog();
  loadRegPage();
}

function clearBattleData() {
  data.inBattle = false;
  data.char.hp = 100;
  data.char.attack = -1;
  data.char.defence = [-1, -1];
  data.enemy.id = 0;
  data.enemy.hp = 150;
  data.enemy.attackChoice = [];
  data.enemy.defenceChoice = [];
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

function checkLS() {
  if (localStorage.NotGenshinClub) {
    data = JSON.parse(localStorage.getItem('NotGenshinClub'));
  } else {
    writeLS(data);
  }
}

function getLS() {
  if (localStorage.NotGenshinClub) {
    data = JSON.parse(localStorage.getItem('NotGenshinClub'));
  }
}

function removeLS() {
  if (localStorage.NotGenshinClub) {
    localStorage.removeItem('NotGenshinClub');
  }
}

