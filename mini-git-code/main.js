let unit = document.getElementsByTagName("title")[0].innerText;
const userName = document.getElementsByName('octolytics-actor-login')[0].content;

unit = unit.split('/');
console.log(unit[1]);

const container = document.createElement('div');
container.setAttribute('id', 'minigitwindow');
document.body.appendChild(container);

const minigitwindow = document.getElementById('minigitwindow');

minigitwindow.style.position = 'sticky';
minigitwindow.style.bottom = '0px';
minigitwindow.style.left = '100%';
minigitwindow.style.width = '350px';
minigitwindow.style.height = '400px';
minigitwindow.style.backgroundColor = 'lightpink';

// first step
const firstStep = document.createElement('div');
firstStep.setAttribute('id', 'firstStep');
minigitwindow.appendChild(firstStep);

const theFirstStep = document.getElementById('firstStep');
theFirstStep.style.backgroundColor = 'lightblue';
theFirstStep.style.width = '100%';
theFirstStep.style.height = '50px';
theFirstStep.innerHTML = `git clone https://github.com/${userName}/${unit[1]}.git`



