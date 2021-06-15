// let data = {
//   entries: [],
//   editing: null,
//   nextEntryId: 1
// };

// const localData = localStorage.getItem('data');
// if (localData !== null) {
//   data = JSON.parse(localData);
// }

const addEntry = document.querySelector('.addEntry');
const submit = document.querySelector('.submit');
const mondayButton = document.querySelector('.monday');
const tuesdayButton = document.querySelector('.tuesday');
const wednesdayButton = document.querySelector('.wednesday');
const thursdayButton = document.querySelector('.thursday');
const fridayButton = document.querySelector('.friday');
const saturdayButton = document.querySelector('.saturday');
const sundayButton = document.querySelector('.sunday');
const mondayTaskList = document.querySelector('.mondayTaskList');
const tuesdayTaskList = document.querySelector('.tuesdayTaskList');
const wednesdayTaskList = document.querySelector('.wednesdayTaskList');
const thursdayTaskList = document.querySelector('.thursdayTaskList');
const fridayTaskList = document.querySelector('.fridayTaskList');
const saturdayTaskList = document.querySelector('.saturdayTaskList');
const sundayTaskList = document.querySelector('.sundayTaskList');

mondayButton.addEventListener('click', handleMondayButton);
tuesdayButton.addEventListener('click', handleTuesdayButton);
wednesdayButton.addEventListener('click', handleWednesdayButton);
thursdayButton.addEventListener('click', handleThursdayButton);
fridayButton.addEventListener('click', handleFridayButton);
saturdayButton.addEventListener('click', handleSaturdayButton);
sundayButton.addEventListener('click', handleSundayButton);
addEntry.addEventListener('click', lightUp);
submit.addEventListener('click', removeModal);

function lightUp() {
  document.querySelector('.blackBox').classList.add('active');
}

function removeModal() {
  document.querySelector('.blackBox').classList.remove('active');
}

function handleMondayButton() {
  mondayTaskList.classList.remove('hidden');
  tuesdayTaskList.classList.add('hidden');
  wednesdayTaskList.classList.add('hidden');
  thursdayTaskList.classList.add('hidden');
  fridayTaskList.classList.add('hidden');
  saturdayTaskList.classList.add('hidden');
  sundayTaskList.classList.add('hidden');
}

function handleTuesdayButton() {
  mondayTaskList.classList.add('hidden');
  tuesdayTaskList.classList.remove('hidden');
  wednesdayTaskList.classList.add('hidden');
  thursdayTaskList.classList.add('hidden');
  fridayTaskList.classList.add('hidden');
  saturdayTaskList.classList.add('hidden');
  sundayTaskList.classList.add('hidden');
}

function handleWednesdayButton() {
  mondayTaskList.classList.add('hidden');
  tuesdayTaskList.classList.add('hidden');
  wednesdayTaskList.classList.remove('hidden');
  thursdayTaskList.classList.add('hidden');
  fridayTaskList.classList.add('hidden');
  saturdayTaskList.classList.add('hidden');
  sundayTaskList.classList.add('hidden');
}

function handleThursdayButton() {
  mondayTaskList.classList.add('hidden');
  tuesdayTaskList.classList.add('hidden');
  wednesdayTaskList.classList.add('hidden');
  thursdayTaskList.classList.remove('hidden');
  fridayTaskList.classList.add('hidden');
  saturdayTaskList.classList.add('hidden');
  sundayTaskList.classList.add('hidden');
}

function handleFridayButton() {
  mondayTaskList.classList.add('hidden');
  tuesdayTaskList.classList.add('hidden');
  wednesdayTaskList.classList.add('hidden');
  thursdayTaskList.classList.add('hidden');
  fridayTaskList.classList.remove('hidden');
  saturdayTaskList.classList.add('hidden');
  sundayTaskList.classList.add('hidden');
}

function handleSaturdayButton() {
  mondayTaskList.classList.add('hidden');
  tuesdayTaskList.classList.add('hidden');
  wednesdayTaskList.classList.add('hidden');
  thursdayTaskList.classList.add('hidden');
  fridayTaskList.classList.add('hidden');
  saturdayTaskList.classList.remove('hidden');
  sundayTaskList.classList.add('hidden');
}

function handleSundayButton() {
  mondayTaskList.classList.add('hidden');
  tuesdayTaskList.classList.add('hidden');
  wednesdayTaskList.classList.add('hidden');
  thursdayTaskList.classList.add('hidden');
  fridayTaskList.classList.add('hidden');
  saturdayTaskList.classList.add('hidden');
  sundayTaskList.classList.remove('hidden');
}
