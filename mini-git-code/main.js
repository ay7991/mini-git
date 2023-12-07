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
theFirstStep.style.display = 'flex';
theFirstStep.style.alignItems = 'center';
theFirstStep.style.justifyContent = 'center';
theFirstStep.style.backgroundColor = 'lightblue';
theFirstStep.style.width = '100%';
theFirstStep.style.height = '50px';
theFirstStep.style.borderRadius = '8px';
theFirstStep.style.marginBottom = '5px';
theFirstStep.innerText = 'Fork this repo to your own repo';


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
theSecondStep.style.marginBottom = '5px';
theSecondStep.innerText = `git clone https://github.com/${userName}/${unit[1]}.git`;

//third step
const thirdStep = document.createElement('div');
thirdStep.setAttribute('id', 'thirdStep');
minigitwindow.appendChild(thirdStep);

const theThirdStep = document.getElementById('thirdStep');
theThirdStep.style.display = 'flex';
theThirdStep.style.alignItems = 'center';
theThirdStep.style.justifyContent = 'center';
theThirdStep.style.backgroundColor = 'lightblue';
theThirdStep.style.width = '100%';
theThirdStep.style.height = '50px';
theThirdStep.style.borderRadius = '8px';
theThirdStep.style.marginBottom = '5px';
theThirdStep.innerText = `git remote add upstream https://github.com/${unit[0]}/${unit[1]}.git`;

//fourth step
const fourthStep = document.createElement('div');
fourthStep.setAttribute('id', 'fourthStep');
minigitwindow.appendChild(fourthStep);

const theFourthStep = document.getElementById('fourthStep');
theFourthStep.style.display = 'flex';
theFourthStep.style.alignItems = 'center';
theFourthStep.style.justifyContent = 'center';
theFourthStep.style.backgroundColor = 'lightblue';
theFourthStep.style.width = '100%';
theFourthStep.style.height = '50px';
theFourthStep.style.borderRadius = '8px';
theFourthStep.style.marginBottom = '5px';
theFourthStep.innerText = `git remote add partner https://github.com/{PARTNER's USERNAME}/${unit[1]}.git`;

// fifth step - if you're making edits on your local machine
const fifthStep = document.createElement('div');
fifthStep.setAttribute('id', 'fifthStep');
minigitwindow.appendChild(fifthStep);

const theFifthStep = document.getElementById('fifthStep');
theFifthStep.style.display = 'flex';
theFifthStep.style.alignItems = 'center';
theFifthStep.style.justifyContent = 'center';
theFifthStep.style.backgroundColor = 'lightblue';
theFifthStep.style.width = '100%';
theFifthStep.style.height = '50px';
theFifthStep.style.borderRadius = '8px';
theFifthStep.style.marginBottom = '5px';
theFifthStep.innerText = `If the edits are being made on your machine: git push origin main`;


// Fork this repo to your repo
// Navigate to your own repo - Double check you're there! Copy the following into your command line 

