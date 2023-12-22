const date = new Date ();
const dayWeek = date.getDay();
const dayMonth = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const dayWeekText = getDayWeek(dayWeek);
const monthText = getMonth(month);

const text = document.querySelector('#text');

function getDayWeek (dayWeek) {
    let dayWeekText;

    switch (dayWeek) {
      case 0:
        dayWeekText = 'Domingo';
        return dayWeekText;
      case 1:
        dayWeekText = 'Segunda-Feira';
        return dayWeekText;
      case 2:
        dayWeekText = 'Terça-Feira';
        return dayWeekText;
      case 3:
        dayWeekText = 'Quarta-Feira';
        return dayWeekText;
      case 4:
        dayWeekText = 'Quinta-Feira';
        return dayWeekText;
      case 5:
        dayWeekText = 'Sexta-Feira';
        return dayWeekText;
      case 6:
        dayWeekText = 'Sábado';
        return dayWeekText;
    }
}

function getMonth(month) {
    let monthText;

    switch (month) {
        case 0:
            monthText = 'Janeiro';
            return monthText;
        case 1:
            monthText = 'Fevereiro';
            return monthText;
        case 2:
            monthText = 'Março';
            return monthText;
        case 3:
            monthText = 'Abril';
            return monthText;
        case 4:
            monthText = 'Maio';
            return monthText;
        case 5:
            monthText = 'Junho';
            return monthText;
        case 6:
            monthText = 'Julho';
            return monthText;
        case 7:
            monthText = 'Agosto';
            return monthText;
        case 8:
            monthText = 'Setembro';
            return monthText;
        case 9:
            monthText = 'Outubro';
            return monthText;
        case 10:
            monthText = 'Novembro';
            return monthText;
        case 11:
            monthText = 'Dezembro';
            return monthText;
    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

text.innerHTML += `${dayWeekText}, ${dayMonth} de ${monthText} de ${year} <br> ${zeroAEsquerda(hours)}:${zeroAEsquerda(minutes)}`;