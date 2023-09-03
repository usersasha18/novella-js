document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
      document.querySelector('.start-menu').classList.add('show-menu');
  }, 1000)
  startgame();
  endGame();
  nextText()
})

const startGameButton = document.querySelector('.start-game');
const endGameButton = document.querySelector('.end-game');
const bg = document.querySelector('.novel-container');
  const nextButton = document.querySelector('.nextButton');

const startText = [
  "Я - персонаж этой игры, рада тебя видеть! Нажимай далее",
  "Кстати меня зовут Оля и я буду твоим чатов гпт",
  "В этой игре пока нет сюжета, это так скажем самая первая версия",
  "Вот и конец, спасибо за игру) Пока!"
]
let currentScene = 0;

const startgame = () => {
  startGameButton.onclick = () => {
    showFirstPesr()
  }
}

const endGame = () => {
  endGameButton.onclick = () => {
    console.log("игры окончена")
    return
  }
}


const showFirstPesr = () => {
  document.querySelector('.start-menu').classList.remove('show-menu');
    const pers = document.querySelector('.pers');
    const dialodWindow = document.querySelector('.dialogWindow');
    bg.style.backgroundImage = 'url("./secondBg.webp")';
    
    dialodWindow.classList.add('showWindow')
    pers.classList.add('showPers');

    if (currentScene < startText.length) {
      // Обновляем текстовое содержание в окне диалога
      document.querySelector('.text').innerHTML = startText[currentScene];
    }
}

const nextText = () => {
  nextButton.addEventListener('click', function() {
    // Переходим к следующему тексту, если есть еще сообщения
    if (currentScene < startText.length - 1) {
      currentScene++;
      showFirstPesr();
    } else {
      alert("Игра закончена");
    }
  })
}