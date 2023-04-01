/// РАНДОМАЙЗЕРЫ

// РАНДОМ РОЛЕЙ В МАФИИ

let randomRoleMassive = [];
let resultRoleRole = []


// Функция перемешивающая массив в рандомном порядке
let shuffle = function (arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    resultRoleRole = [...arr]
    return arr;
}

// КНОПКИ РАНДОМА
mafiaBtn10.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Комиссар🤠','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Дон🕵🏻']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
`
let localStrg = mafiaRoleResult.innerHTML
localStorage.setItem('roleMafiaTournament', localStrg)
}


// РАНДОМ СЛОТОВ В МАФИИ

let randomSlotMassive = [];
let resultSlotRole = []

// Функция перемешивающая массив в рандомном порядке
let shuffleSlots = function (arr) {
  for (let i = arr.length - 1; i > 0 ; i--) {
      let tmp = arr[i];
      let rnd = Math.floor(Math.random() * (i + 1));

      arr[i] = arr[rnd];
      arr[rnd] = tmp;
  }
  resultSlotRole = [...arr]
  return arr;
}
//

// КНОПКИ РАНДОМА
slotBtn10.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
`
let localStrg = slotRoleResult.innerHTML
localStorage.setItem('slotsMafiaTournament', localStrg)
}
///

function storage() {
  mafiaRoleResult.innerHTML = localStorage.getItem('roleMafiaTournament')
  slotRoleResult.innerHTML = localStorage.getItem('slotsMafiaTournament')
}
setTimeout(storage, 1);
//
///

// Кнопка скрыть/раскрыть боковое меню
mafiaBtnClose.onclick = () => {
  mafiaRole.classList.toggle('offRole')
  textAriaMafia.classList.toggle('offRole')
  mafiaSlots.classList.toggle('offRole')
  mafiaInfo.classList.toggle('offRole')
}
mCPButtonHide.onclick = () => {
  mafiaCloseRandomGlobal.classList.toggle('offRoleGlobal')
  mafiaControlPanel.classList.toggle('idMafiaControlPanelMore')
  if (mCPButtonHide.value === `►`){
    mCPButtonHide.value = `◀`
  }
  else if (mCPButtonHide.value === `◀`) {
    mCPButtonHide.value = `►`
  }
}
///


/// CONTROL PANEL MAFIA

const controlPanelResult = document.querySelector('#controlPanelResult') // ПАНЕЛЬ УПРАВЛЕНИЯ ИГРОКАМИ 9-15
const textAriaMafia = document.querySelector("#textAriaMafia") // ИНФОРМАЦИОННОЕ ПОЛЕ ОБ ИГРЕ С РЕДАКТИРУЕМОЙ ИНФОРМАЦИЕЙ

let localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

// Размер шрифта выставленных игроков, взависимости от кол-ва выставленных
function fSResultVoteMafia() {
  if (localArrVote.length > 4) {
    resultVoteMafia.style.fontSize = '35px'
  }
  else if (localArrVote.length <= 4){
    resultVoteMafia.style.fontSize = '50px'
  }
}
//

// 9 ИГРОКОВ

// Функция создает 9 строчек в которых указаны: Номер игрока и кнопка выставить
function mP9() {
  controlPanelResult.innerHTML = 
  `
  <span id = "mafiaPlayer1"><span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
  <span id = "mafiaPlayer2"><span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
  <span id = "mafiaPlayer3"><span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
  <span id = "mafiaPlayer4"><span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
  <span id = "mafiaPlayer5"><span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
  <span id = "mafiaPlayer6"><span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
  <span id = "mafiaPlayer7"><span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
  <span id = "mafiaPlayer8"><span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
  <span id = "mafiaPlayer9"><span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
  <div id="mafiaVoteResultString">
  </div>
  `
  document.querySelector('#clearBtnVote').innerHTML = `<button id="clearVoteMafia">Очистить</button>`
}
//

// Функционал кнопок 'Выставить' на 9 игроков
function funcPushVoting9() {

  localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

  pushVoting1.onclick = () => {
    // Run
    if (pushVoting1.value === 'Выставить') {
      pushVoting1.classList.toggle('mafiaVotingBtnOff')
      pushVoting1.value = 'Отменить'
      localArrVote.push(1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting1.value === 'Отменить') {
      pushVoting1.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote1 = localArrVote.indexOf(1)
      localArrVote.splice(localIndexVote1, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting1.value = 'Выставить'
    }

    fSResultVoteMafia()
  }
  
  pushVoting2.onclick = () => {
    // Run
    if (pushVoting2.value === 'Выставить') {
      pushVoting2.classList.toggle('mafiaVotingBtnOff')
      pushVoting2.value = 'Отменить'
      localArrVote.push(2)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting2.value === 'Отменить') {
      pushVoting2.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote2 = localArrVote.indexOf(2)
      localArrVote.splice(localIndexVote2, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting2.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting3.onclick = () => {
    // Run
    if (pushVoting3.value === 'Выставить') {
      pushVoting3.classList.toggle('mafiaVotingBtnOff')
      pushVoting3.value = 'Отменить'
      localArrVote.push(3)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting3.value === 'Отменить') {
      pushVoting3.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote3 = localArrVote.indexOf(3)
      localArrVote.splice(localIndexVote3, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting3.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting4.onclick = () => {
    // Run
    if (pushVoting4.value === 'Выставить') {
      pushVoting4.classList.toggle('mafiaVotingBtnOff')
      pushVoting4.value = 'Отменить'
      localArrVote.push(4)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting4.value === 'Отменить') {
      pushVoting4.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote4 = localArrVote.indexOf(4)
      localArrVote.splice(localIndexVote4, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting4.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting5.onclick = () => {
    // Run
    if (pushVoting5.value === 'Выставить') {
      pushVoting5.classList.toggle('mafiaVotingBtnOff')
      pushVoting5.value = 'Отменить'
      localArrVote.push(5)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting5.value === 'Отменить') {
      pushVoting5.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote5 = localArrVote.indexOf(5)
      localArrVote.splice(localIndexVote5, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting5.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting6.onclick = () => {
    // Run
    if (pushVoting6.value === 'Выставить') {
      pushVoting6.classList.toggle('mafiaVotingBtnOff')
      pushVoting6.value = 'Отменить'
      localArrVote.push(6)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting6.value === 'Отменить') {
      pushVoting6.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote6 = localArrVote.indexOf(6)
      localArrVote.splice(localIndexVote6, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting6.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting7.onclick = () => {
    // Run
    if (pushVoting7.value === 'Выставить') {
      pushVoting7.classList.toggle('mafiaVotingBtnOff')
      pushVoting7.value = 'Отменить'
      localArrVote.push(7)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting7.value === 'Отменить') {
      pushVoting7.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote7 = localArrVote.indexOf(7)
      localArrVote.splice(localIndexVote7, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting7.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting8.onclick = () => {
    // Run
    if (pushVoting8.value === 'Выставить') {
      pushVoting8.classList.toggle('mafiaVotingBtnOff')
      pushVoting8.value = 'Отменить'
      localArrVote.push(8)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting8.value === 'Отменить') {
      pushVoting8.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote8 = localArrVote.indexOf(8)
      localArrVote.splice(localIndexVote8, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting8.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
  
  pushVoting9.onclick = () => {
    // Run
    if (pushVoting9.value === 'Выставить') {
      pushVoting9.classList.toggle('mafiaVotingBtnOff')
      pushVoting9.value = 'Отменить'
      localArrVote.push(9)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting9.value === 'Отменить') {
      pushVoting9.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote9 = localArrVote.indexOf(9)
      localArrVote.splice(localIndexVote9, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting9.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
}
//

// Функция очищающая поле 'Выставлены' на 9 игроков

// База значений для функции - на 9 игроков
function funcClearVoteMafia9base() { 
  pushVoting1.value = 'Выставить'
  pushVoting2.value = 'Выставить'
  pushVoting3.value = 'Выставить'
  pushVoting4.value = 'Выставить'
  pushVoting5.value = 'Выставить'
  pushVoting6.value = 'Выставить'
  pushVoting7.value = 'Выставить'
  pushVoting8.value = 'Выставить'
  pushVoting9.value = 'Выставить'
  localArrVote = []
  resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")

  pushVoting1.classList.remove('mafiaVotingBtnOff')
  pushVoting2.classList.remove('mafiaVotingBtnOff')
  pushVoting3.classList.remove('mafiaVotingBtnOff')
  pushVoting4.classList.remove('mafiaVotingBtnOff')
  pushVoting5.classList.remove('mafiaVotingBtnOff')
  pushVoting6.classList.remove('mafiaVotingBtnOff')
  pushVoting7.classList.remove('mafiaVotingBtnOff')
  pushVoting8.classList.remove('mafiaVotingBtnOff')
  pushVoting9.classList.remove('mafiaVotingBtnOff')
}
//

// Исполнительная функция
function funcClearVoteMafia9() {
  clearVoteMafia.onclick = () => {
    funcClearVoteMafia9base()
  }
}
//

//

// Функция добавляющая кнопки 4 фолов и +30 на 9 игроков
function funcFalls4Players9() {
  mafiaPlayer1.innerHTML += 
  `
  <button id="player1Fall1" class="mafiaGreenBtn">1</button>
  <button id="player1Fall2" class="mafiaGreenBtn">2</button>
  <button id="player1Fall3" class="mafiaGreenBtn">3</button>
  <button id="player1Fall4" class="mafiaGreenBtn">4</button>
  `
  mafiaPlayer2.innerHTML += 
  `
  <button id="player2Fall1" class="mafiaGreenBtn">1</button>
  <button id="player2Fall2" class="mafiaGreenBtn">2</button>
  <button id="player2Fall3" class="mafiaGreenBtn">3</button>
  <button id="player2Fall4" class="mafiaGreenBtn">4</button>
  `
  mafiaPlayer3.innerHTML += 
  `
  <button id="player3Fall1" class="mafiaGreenBtn">1</button>
  <button id="player3Fall2" class="mafiaGreenBtn">2</button>
  <button id="player3Fall3" class="mafiaGreenBtn">3</button>
  <button id="player3Fall4" class="mafiaGreenBtn">4</button>
  `
  mafiaPlayer4.innerHTML += 
  `
  <button id="player4Fall1" class="mafiaGreenBtn">1</button>
  <button id="player4Fall2" class="mafiaGreenBtn">2</button>
  <button id="player4Fall3" class="mafiaGreenBtn">3</button>
  <button id="player4Fall4" class="mafiaGreenBtn">4</button>
  `
  mafiaPlayer5.innerHTML += 
  `
  <button id="player5Fall1" class="mafiaGreenBtn">1</button>
  <button id="player5Fall2" class="mafiaGreenBtn">2</button>
  <button id="player5Fall3" class="mafiaGreenBtn">3</button>
  <button id="player5Fall4" class="mafiaGreenBtn">4</button>
  `
  mafiaPlayer6.innerHTML += 
  `
  <button id="player6Fall1" class="mafiaGreenBtn">1</button>
  <button id="player6Fall2" class="mafiaGreenBtn">2</button>
  <button id="player6Fall3" class="mafiaGreenBtn">3</button>
  <button id="player6Fall4" class="mafiaGreenBtn">4</button>
  `
  mafiaPlayer7.innerHTML += 
  `
  <button id="player7Fall1" class="mafiaGreenBtn">1</button>
  <button id="player7Fall2" class="mafiaGreenBtn">2</button>
  <button id="player7Fall3" class="mafiaGreenBtn">3</button>
  <button id="player7Fall4" class="mafiaGreenBtn">4</button>
  `
  mafiaPlayer8.innerHTML += 
  `
  <button id="player8Fall1" class="mafiaGreenBtn">1</button>
  <button id="player8Fall2" class="mafiaGreenBtn">2</button>
  <button id="player8Fall3" class="mafiaGreenBtn">3</button>
  <button id="player8Fall4" class="mafiaGreenBtn">4</button>
  `
  mafiaPlayer9.innerHTML += 
  `
  <button id="player9Fall1" class="mafiaGreenBtn">1</button>
  <button id="player9Fall2" class="mafiaGreenBtn">2</button>
  <button id="player9Fall3" class="mafiaGreenBtn">3</button>
  <button id="player9Fall4" class="mafiaGreenBtn">4</button>
  `
}
//


// Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 9 игроков
function funcGreenRedFalls4Players9() { 
  player1Fall1.onclick = () => {
    player1Fall1.classList.toggle('mafiaRedBtn')
  }
  player1Fall2.onclick = () => {
    player1Fall2.classList.toggle('mafiaRedBtn')
  }
  player1Fall3.onclick = () => {
    player1Fall3.classList.toggle('mafiaRedBtn')
  }
  player1Fall4.onclick = () => {
    player1Fall4.classList.toggle('mafiaRedBtn')
  }
  
  player2Fall1.onclick = () => {
    player2Fall1.classList.toggle('mafiaRedBtn')
  }
  player2Fall2.onclick = () => {
    player2Fall2.classList.toggle('mafiaRedBtn')
  }
  player2Fall3.onclick = () => {
    player2Fall3.classList.toggle('mafiaRedBtn')
  }
  player2Fall4.onclick = () => {
    player2Fall4.classList.toggle('mafiaRedBtn')
  }
  
  player3Fall1.onclick = () => {
    player3Fall1.classList.toggle('mafiaRedBtn')
  }
  player3Fall2.onclick = () => {
    player3Fall2.classList.toggle('mafiaRedBtn')
  }
  player3Fall3.onclick = () => {
    player3Fall3.classList.toggle('mafiaRedBtn')
  }
  player3Fall4.onclick = () => {
    player3Fall4.classList.toggle('mafiaRedBtn')
  }
  
  player4Fall1.onclick = () => {
    player4Fall1.classList.toggle('mafiaRedBtn')
  }
  player4Fall2.onclick = () => {
    player4Fall2.classList.toggle('mafiaRedBtn')
  }
  player4Fall3.onclick = () => {
    player4Fall3.classList.toggle('mafiaRedBtn')
  }
  player4Fall4.onclick = () => {
    player4Fall4.classList.toggle('mafiaRedBtn')
  }
  
  player5Fall1.onclick = () => {
    player5Fall1.classList.toggle('mafiaRedBtn')
  }
  player5Fall2.onclick = () => {
    player5Fall2.classList.toggle('mafiaRedBtn')
  }
  player5Fall3.onclick = () => {
    player5Fall3.classList.toggle('mafiaRedBtn')
  }
  player5Fall4.onclick = () => {
    player5Fall4.classList.toggle('mafiaRedBtn')
  }
  
  player6Fall1.onclick = () => {
    player6Fall1.classList.toggle('mafiaRedBtn')
  }
  player6Fall2.onclick = () => {
    player6Fall2.classList.toggle('mafiaRedBtn')
  }
  player6Fall3.onclick = () => {
    player6Fall3.classList.toggle('mafiaRedBtn')
  }
  player6Fall4.onclick = () => {
    player6Fall4.classList.toggle('mafiaRedBtn')
  }
  
  player7Fall1.onclick = () => {
    player7Fall1.classList.toggle('mafiaRedBtn')
  }
  player7Fall2.onclick = () => {
    player7Fall2.classList.toggle('mafiaRedBtn')
  }
  player7Fall3.onclick = () => {
    player7Fall3.classList.toggle('mafiaRedBtn')
  }
  player7Fall4.onclick = () => {
    player7Fall4.classList.toggle('mafiaRedBtn')
  }
  
  player8Fall1.onclick = () => {
    player8Fall1.classList.toggle('mafiaRedBtn')
  }
  player8Fall2.onclick = () => {
    player8Fall2.classList.toggle('mafiaRedBtn')
  }
  player8Fall3.onclick = () => {
    player8Fall3.classList.toggle('mafiaRedBtn')
  }
  player8Fall4.onclick = () => {
    player8Fall4.classList.toggle('mafiaRedBtn')
  }
  
  player9Fall1.onclick = () => {
    player9Fall1.classList.toggle('mafiaRedBtn')
  }
  player9Fall2.onclick = () => {
    player9Fall2.classList.toggle('mafiaRedBtn')
  }
  player9Fall3.onclick = () => {
    player9Fall3.classList.toggle('mafiaRedBtn')
  }
  player9Fall4.onclick = () => {
    player9Fall4.classList.toggle('mafiaRedBtn')
  }
}
//


// 10 игроков

// Функция создает 10 строчек в которых указаны: Номер игрока и кнопка выставить
function mP10() {
controlPanelResult.innerHTML =
`
<span id = "mafiaPlayer1"><span>01</span><input type="button" id="pushVoting1" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer2"><span>02</span><input type="button" id="pushVoting2" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer3"><span>03</span><input type="button" id="pushVoting3" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer4"><span>04</span><input type="button" id="pushVoting4" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer5"><span>05</span><input type="button" id="pushVoting5" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer6"><span>06</span><input type="button" id="pushVoting6" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer7"><span>07</span><input type="button" id="pushVoting7" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer8"><span>08</span><input type="button" id="pushVoting8" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer9"><span>09</span><input type="button" id="pushVoting9" class = "voteBtn mafiaVotingBtn" value = "Выставить"></span>
<span id = "mafiaPlayer10"><span>10</span><input type="button" id="pushVoting10" class = "voteBtn10 mafiaVotingBtn" value = "Выставить"></span>
<div id="mafiaVoteResultString">
</div>
`
document.querySelector('#clearBtnVote').innerHTML = `<button id="clearVoteMafia">Очистить</button>`
}
//

// Функционал кнопок 'Выставить' на 10 игроков
function funcPushVoting10() {
  funcPushVoting9()
  pushVoting10.onclick = () => {
    // Run
    if (pushVoting10.value === 'Выставить') {
      pushVoting10.classList.toggle('mafiaVotingBtnOff')
      pushVoting10.value = 'Отменить'
      localArrVote.push(10)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
    }
    else if (pushVoting10.value === 'Отменить') {
      pushVoting10.classList.toggle('mafiaVotingBtnOff')
      let localIndexVote10 = localArrVote.indexOf(10)
      localArrVote.splice(localIndexVote10, 1)
      resultVoteMafia.innerHTML = `<span></span>` + localArrVote.join(" ")
      pushVoting10.value = 'Выставить'
  }
  
  fSResultVoteMafia()
  }
}
//

// Функция очищающая поле 'Выставлены' на 10 игроков

// База значений для функции - на 10 игроков
function funcClearVoteMafia10base() { 
  funcClearVoteMafia9base()
  pushVoting10.value = 'Выставить'
  pushVoting10.classList.remove('mafiaVotingBtnOff')
}
//

// Исполнительная функция
function funcClearVoteMafia10() {
  clearVoteMafia.onclick = () => {
    funcClearVoteMafia10base()
  }
}
//

//

// Функция добавляющая кнопки 4 фолов и +30 на 10 игроков
function funcFalls4Players10() {
  funcFalls4Players9()
  mafiaPlayer10.innerHTML += 
  `
  <button id="player10Fall1" class="mafiaGreenBtn">1</button>
  <button id="player10Fall2" class="mafiaGreenBtn">2</button>
  <button id="player10Fall3" class="mafiaGreenBtn">3</button>
  <button id="player10Fall4" class="mafiaGreenBtn">4</button>
  `
}
//


// Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 10 игроков
function funcGreenRedFalls4Players10() { 
  funcGreenRedFalls4Players9()
  player10Fall1.onclick = () => {
    player10Fall1.classList.toggle('mafiaRedBtn')
  }
  player10Fall2.onclick = () => {
    player10Fall2.classList.toggle('mafiaRedBtn')
  }
  player10Fall3.onclick = () => {
    player10Fall3.classList.toggle('mafiaRedBtn')
  }
  player10Fall4.onclick = () => {
    player10Fall4.classList.toggle('mafiaRedBtn')
  }
}
//


// КНОПКА НА 10 ИГРОКОВ
(function() {
  mP10() // Функция создает 10 строчек в которых указаны: Номер игрока и кнопка выставить
  funcFalls4Players10() // Функция добавляющая кнопки 4 фолов и +30 на 9 игроков
  funcPushVoting10() // Функционал кнопок 'Выставить' на 10 игроков
  funcClearVoteMafia10() // Функция очищающая поле 'Выставлены' на 10 игроков
  funcGreenRedFalls4Players10() // Функция окрашивающая в зеленый/красный цвет кнопки 4 фолов и +30 на 10 игроков

  localArrVote = [] // МАССИВ, СОДЕРЖАЩИЙ ВЫСТАВЛЕННЫХ ИГРОКОВ

// Вывод информации об игре в текстовое поле
  textAriaMafia.innerHTML =
  `Подъем со стола за:
🤍 Метаинфу 
🤍 Оскорбление Ведущего/Игроков
🤍 Спор с ведущим
🤍 4 фолл
=================
🤍 3 фолл - мут
🤍 Правильное выставление: Я ВЫСТАВЛЯЮ [НОМЕР]
=================
🤍 На столе: 
2 Мафии🔫
1 Дон🕵🏻
1 Комиссар🤠
=================
ЕСЛИ ВАМ НЕ ПРИСЛАЛИ РОЛЬ - ВЫ МИРНЫЙ ЖИТЕЛЬ!
  `
//

})();

// КОНЕЦ КНОПОЧЕК
///

// Секундомер
let timer = 0;
let timerInterval;
let ms = document.getElementById('ms');
let second = document.getElementById('second');
let minute = document.getElementById('minute');

const puskSec = document.querySelector('#vpered')
const stopSec = document.querySelector('.sanovka')
const resetSec = document.querySelector('#reset')


function vpered() {
  sanovka();
  timerInterval = setInterval(function() {
  timer += 1/60;
  msVal = Math.floor((timer - Math.floor(timer))*100);
  secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
  minuteVal = Math.floor(timer/60);
  ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
  second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
  minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000/60);
}

function ClearСlock() { 
  ms.innerHTML = '00';
  second.innerHTML = '00';
  minute.innerHTML = '00';
  timer = 0;
  msVal = 0;
  secondVal = 0;
  minuteVal = 0;
} 

function sanovka() {
  clearInterval(timerInterval);
}
//

puskSec.onclick = () => {
  if (puskSec.classList.contains('vpered')) {
    vpered()
    puskSec.classList.remove('vpered')
    puskSec.classList.add('sanovka')
    puskSec.querySelector('img').setAttribute('src', './img/timerBtns/pause.png');
  }
  else if (puskSec.classList.contains('sanovka')) {
    sanovka()
    puskSec.classList.remove('sanovka')
    puskSec.classList.add('vpered')
    puskSec.querySelector('img').setAttribute('src', './img/timerBtns/play.png');
  }

}

resetSec.onclick = () => {
  ClearСlock()
}



// Ширина mafiaUpBlockGlobal = ширине mafiaControlPanel
setInterval(function () {
  document.querySelector('#mafiaUpBlockGlobal').style.width = `${document.querySelector('#mafiaControlPanel').offsetWidth -4}px`
}, 10);
//
