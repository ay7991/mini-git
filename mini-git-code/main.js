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
minigitwindow.style.borderRadius = '8px';

// first step
const firstStep = document.createElement('div');
firstStep.setAttribute('id', 'firstStep');
minigitwindow.appendChild(firstStep);

const theFirstStep = document.getElementById('firstStep');
theFirstStep.style.backgroundColor = 'lightblue';
theFirstStep.style.width = '100%';
theFirstStep.style.height = '50px';
theFirstStep.style.borderRadius = '8px';
theFirstStep.style.marginBottom = '5px';
theFirstStep.innerText = 'Fork this repo';


// second step
const secondStep = document.createElement('div');
secondStep.setAttribute('id', 'secondStep');
minigitwindow.appendChild(secondStep);

const theSecondStep = document.getElementById('secondStep');
theSecondStep.style.display = 'flex';
theSecondStep.style.alignItems = 'center';
theSecondStep.style.justifyContent = 'center';
theSecondStep.style.backgroundColor = 'lightblue';
theSecondStep.style.width = '100%';
theSecondStep.style.height = '50px';
theSecondStep.style.borderRadius = '8px';
theFirstStep.style.marginBottom = '5px';
theSecondStep.innerText = `git clone https://github.com/${userName}/${unit[1]}.git`

// Fork this repo to your repo
// Navigate to your own repo - Double check you're there! Copy the following into your command line 

