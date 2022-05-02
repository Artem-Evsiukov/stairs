// Объект квиза
var Quiz = new Object();
//Инициализация квиза по id
Quiz.init = function (id_name) {
  let ScreenForSearch = '#' + id_name + ' .quizScreen';
  // массив  id экранов
  Quiz.screen_ids = [];
  // заполняем массив
  $(ScreenForSearch).each(function (index) {
    let idForSearch = '#' + $(this)[0].id;
    Quiz.screen_ids.push(idForSearch);
  });
  // передаем кол-во элементов
  Quiz.screen_count = Quiz.screen_ids.length;
  // задаем значение предыдущего элемента при стартре
  Quiz.prev = -1;
  // Позицию текущего
  Quiz.curent = 0;
  // Позицию следующего
  Quiz.next = 1;
  // Скрываем все элементы кроме первого
  for (let i = 0; i < Quiz.screen_count; i++) {
    if (i != 0) {
      $(this.screen_ids[i]).css('display', 'none');
    }
  }
  let persents_bar = ((Quiz.curent + 1) * 100) / Quiz.screen_count;
  let css_persents_bar = persents_bar + '%';
  $('#quizProgressbar span').css('width', css_persents_bar);
};
// Переход к следующего экрану квиза
Quiz.gonext = function () {
  if (this.curent != this.screen_count - 1) {
    let checked = 0;
    $(Quiz.screen_ids[Quiz.curent] + ' input').each(function (index) {
      if (this.checked) {
        checked = 1;
        return true;
      }
    });
    if (checked) {
      $(this.screen_ids[this.curent]).css('display', 'none');
      ++this.prev;
      ++this.curent;
      ++this.next;
      $(this.screen_ids[this.curent]).css('display', 'block');
      let persents_bar = ((Quiz.curent + 1) * 100) / Quiz.screen_count;
      let css_persents_bar = persents_bar + '%';
      $('#quizProgressbar span').css('width', css_persents_bar);
    }
  }
};
// Переход к предыдущему экрану квиза
Quiz.goprev = function () {
  if (this.curent != 0) {
    $(this.screen_ids[this.curent]).css('display', 'none');
    --this.prev;
    --this.curent;
    --this.next;
    $(this.screen_ids[this.curent]).css('display', 'block');
    let persents_bar = ((Quiz.curent + 1) * 100) / Quiz.screen_count;
    let css_persents_bar = persents_bar + '%';
    $('#quizProgressbar span').css('width', css_persents_bar);
  }
};

function convertFormToJSON(form) {
  const array = $(form).serializeArray();
  const json = {};
  $.each(array, function () {
    json[this.name] = this.value || '';
  });
  return json;
}

window.onload = function () {
  Quiz.init('Quiz');
  let curent = Quiz.curent + 1;
  let сount = Quiz.screen_count - 1;
  $('#curent').html(curent);
  $('#count').html(сount);
  $('#idForPrevButton').on('click', function (e) {
    e.preventDefault();
    Quiz.goprev();
    let curent = Quiz.curent + 1;
    $('#curent').html(curent);
  });
  $('#idForNextButton').on('click', function (e) {
    e.preventDefault();
    Quiz.gonext();
    let curent = Quiz.curent + 1;
    $('#curent').html(curent);
    if (Quiz.screen_count - 1 == Quiz.curent) {
      $('#idForNextButton').css('display', 'none');
      $('#idForPrevButton').css('display', 'none');
      $('#stages').css('display', 'none');
    }
  });
  $('#quizsubmit').on('click', function (e) {
    e.preventDefault();
    let json = convertFormToJSON('#Quiz');
    console.log(json);
  });
};
