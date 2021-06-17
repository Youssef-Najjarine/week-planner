let data = {
  monday: {
    nextEntryId: 1,
    editing: null,
    mondayEvents: []
  },
  tuesday: {
    nextEntryId: 1,
    editing: null,
    tuesdayEvents: []
  },
  wednesday: {
    nextEntryId: 1,
    editing: null,
    wednesdayEvents: []
  },
  thursday: {
    nextEntryId: 1,
    editing: null,
    thursdayEvents: []
  },
  friday: {
    nextEntryId: 1,
    editing: null,
    fridayEvents: []
  },
  saturday: {
    nextEntryId: 1,
    editing: null,
    saturdayEvents: []
  },
  sunday: {
    nextEntryId: 1,
    editing: null,
    sundayEvents: []
  }
};

const localData = localStorage.getItem('data');
if (localData !== null) {
  data = JSON.parse(localData);
}

const addEntry = document.querySelector('.addEntry');
// const submit = document.querySelector('.submit');
const mondayButton = document.querySelector('.monday');
const tuesdayButton = document.querySelector('.tuesday');
const wednesdayButton = document.querySelector('.wednesday');
const thursdayButton = document.querySelector('.thursday');
const fridayButton = document.querySelector('.friday');
const saturdayButton = document.querySelector('.saturday');
const sundayButton = document.querySelector('.sunday');
const form = document.querySelector('form');
const days = document.querySelector('#days');
const time = document.querySelector('#time');
const description = document.querySelector('#description');
const tableBody = document.querySelector('tbody');
const h2 = document.querySelector('h2');

window.addEventListener('DOMContentLoaded', defaultEvent);
addEntry.addEventListener('click', lightUp);
form.addEventListener('submit', handleSubmit);
mondayButton.addEventListener('click', handleMondayButton);
tuesdayButton.addEventListener('click', handleTuesdayButton);
wednesdayButton.addEventListener('click', handleWednesdayButton);
thursdayButton.addEventListener('click', handleThursdayButton);
fridayButton.addEventListener('click', handleFridayButton);
saturdayButton.addEventListener('click', handleSaturdayButton);
sundayButton.addEventListener('click', handleSundayButton);

function lightUp() {
  document.querySelector('.blackBox').classList.add('active');
}

function defaultEvent() {
  tableBody.innerHTML = '';
  h2.textContent = 'Scheduled Events for Monday';
  for (let i = 0; i < data.monday.mondayEvents.length; i++) {
    tableBody.appendChild(createEntries(data.monday.mondayEvents[i]));
  }
}
function handleSubmit(event) {
  event.preventDefault();
  document.querySelector('.blackBox').classList.remove('active');
  if (days.value === 'Monday') {
    const newObject = {};
    newObject.time = time.value;
    newObject.description = description.value;
    newObject.EntryId = data.monday.nextEntryId;
    data.monday.mondayEvents.unshift(newObject);
    data.monday.nextEntryId++;
    form.reset();
    saveData();
    // const dataEntryId = event.target.getAttribute('data-entry-id');
    // data.monday.mondayEvents.splice(data.monday.mondayEvents.length - dataEntryId, 1);
    tableBody.innerHTML = '';
    h2.textContent = 'Scheduled Events for Monday';
    for (let i = 0; i < data.monday.mondayEvents.length; i++) {
      tableBody.appendChild(createEntries(data.monday.mondayEvents[i]));
    }
  } else if (days.value === 'Tuesday') {
    const newObject = {};
    newObject.time = time.value;
    newObject.description = description.value;
    newObject.EntryId = data.tuesday.nextEntryId;
    data.tuesday.tuesdayEvents.unshift(newObject);
    data.tuesday.nextEntryId++;
    form.reset();
    saveData();
    // const dataEntryId = event.target.getAttribute('data-entry-id');
    // data.tuesday.tuesdayEvents.splice(data.tuesday.tuesdayEvents.length - dataEntryId, 1);
    tableBody.innerHTML = '';
    h2.textContent = 'Scheduled Events for Tuesday';
    for (let i = 0; i < data.tuesday.tuesdayEvents.length; i++) {
      tableBody.appendChild(createEntries(data.tuesday.tuesdayEvents[i]));
    }
  } else if (days.value === 'Wednesday') {
    const newObject = {};
    newObject.time = time.value;
    newObject.description = description.value;
    newObject.EntryId = data.wednesday.nextEntryId;
    data.wednesday.wednesdayEvents.unshift(newObject);
    data.wednesday.nextEntryId++;
    form.reset();
    saveData();
    // const dataEntryId = event.target.getAttribute('data-entry-id');
    // data.wednesday.wednesdayEvents.splice(data.wednesday.wednesdayEvents.length - dataEntryId, 1);
    tableBody.innerHTML = '';
    h2.textContent = 'Scheduled Events for Wednesday';
    for (let i = 0; i < data.wednesday.wednesdayEvents.length; i++) {
      tableBody.appendChild(createEntries(data.wednesday.wednesdayEvents[i]));
    }
  } else if (days.value === 'Thursday') {
    const newObject = {};
    newObject.time = time.value;
    newObject.description = description.value;
    newObject.EntryId = data.thursday.nextEntryId;
    data.thursday.thursdayEvents.unshift(newObject);
    data.thursday.nextEntryId++;
    form.reset();
    saveData();
    // const dataEntryId = event.target.getAttribute('data-entry-id');
    // data.thursday.thursdayEvents.splice(data.thursday.thursdayEvents.length - dataEntryId, 1);
    tableBody.innerHTML = '';
    h2.textContent = 'Scheduled Events for Thursday';
    for (let i = 0; i < data.thursday.thursdayEvents.length; i++) {
      tableBody.appendChild(createEntries(data.thursday.thursdayEvents[i]));
    }
  } else if (days.value === 'Friday') {
    const newObject = {};
    newObject.time = time.value;
    newObject.description = description.value;
    newObject.EntryId = data.friday.nextEntryId;
    data.friday.fridayEvents.unshift(newObject);
    data.friday.nextEntryId++;
    form.reset();
    saveData();
    // const dataEntryId = event.target.getAttribute('data-entry-id');
    // data.friday.fridayEvents.splice(data.friday.fridayEvents.length - dataEntryId, 1);
    tableBody.innerHTML = '';
    h2.textContent = 'Scheduled Events for Friday';
    for (let i = 0; i < data.friday.fridayEvents.length; i++) {
      tableBody.appendChild(createEntries(data.friday.fridayEvents[i]));
    }
  } else if (days.value === 'Saturday') {
    const newObject = {};
    newObject.time = time.value;
    newObject.description = description.value;
    newObject.EntryId = data.saturday.nextEntryId;
    data.saturday.saturdayEvents.unshift(newObject);
    data.saturday.nextEntryId++;
    form.reset();
    saveData();
    // const dataEntryId = event.target.getAttribute('data-entry-id');
    // data.saturday.saturdayEvents.splice(data.saturday.saturdayEvents.length - dataEntryId, 1);
    tableBody.innerHTML = '';
    h2.textContent = 'Scheduled Events for Saturday';
    for (let i = 0; i < data.saturday.saturdayEvents.length; i++) {
      tableBody.appendChild(createEntries(data.saturday.saturdayEvents[i]));
    }
  } else if (days.value === 'Sunday') {
    const newObject = {};
    newObject.time = time.value;
    newObject.description = description.value;
    newObject.EntryId = data.sunday.nextEntryId;
    data.sunday.sundayEvents.unshift(newObject);
    data.sunday.nextEntryId++;
    form.reset();
    saveData();
    // const dataEntryId = event.target.getAttribute('data-entry-id');
    // data.sunday.sundayEvents.splice(data.sunday.sundayEvents.length - dataEntryId, 1);
    tableBody.innerHTML = '';
    h2.textContent = 'Scheduled Events for Sunday';
    for (let i = 0; i < data.sunday.sundayEvents.length; i++) {
      tableBody.appendChild(createEntries(data.sunday.sundayEvents[i]));
    }
  }
}

function saveData() {
  localStorage.setItem('data', JSON.stringify(data));
}

function createEntries(entry) {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  tr.appendChild(td1);
  td1.textContent = entry.time;
  tr.appendChild(td2);
  td2.appendChild(div1);
  div1.setAttribute('class', 'secondTd');
  td2.textContent = entry.description;
  div1.appendChild(div2);
  div2.setAttribute('class', 'updateAndDelete');
  div2.appendChild(button1);
  button1.setAttribute('class', 'update');
  div2.appendChild(button2);
  button2.setAttribute('class', 'delete');

  // const tr = document.createElement('tr');
  // const td1 = document.createElement('td');
  // td1.textContent = entry.time;
  // tr.appendChild(td1);
  // const td2 = document.createElement('td');
  // td2.textContent = entry.description;
  // tr.appendChild(td2);

  return tr;
}

function handleMondayButton() {
  tableBody.innerHTML = '';
  h2.textContent = 'Scheduled Events for Monday';
  for (let i = 0; i < data.monday.mondayEvents.length; i++) {
    tableBody.appendChild(createEntries(data.monday.mondayEvents[i]));
  }
}

function handleTuesdayButton() {
  tableBody.innerHTML = '';
  h2.textContent = 'Scheduled Events for Tuesday';
  for (let i = 0; i < data.tuesday.tuesdayEvents.length; i++) {
    tableBody.appendChild(createEntries(data.tuesday.tuesdayEvents[i]));
  }
}

function handleWednesdayButton() {

  tableBody.innerHTML = '';
  h2.textContent = 'Scheduled Events for Wednesday';
  for (let i = 0; i < data.wednesday.wednesdayEvents.length; i++) {
    tableBody.appendChild(createEntries(data.wednesday.wednesdayEvents[i]));
  }
}

function handleThursdayButton() {
  tableBody.innerHTML = '';
  h2.textContent = 'Scheduled Events for Thursday';
  for (let i = 0; i < data.thursday.thursdayEvents.length; i++) {
    tableBody.appendChild(createEntries(data.thursday.thursdayEvents[i]));
  }
}

function handleFridayButton() {
  tableBody.innerHTML = '';
  h2.textContent = 'Scheduled Events for Friday';
  for (let i = 0; i < data.friday.fridayEvents.length; i++) {
    tableBody.appendChild(createEntries(data.friday.fridayEvents[i]));
  }
}

function handleSaturdayButton() {
  tableBody.innerHTML = '';
  h2.textContent = 'Scheduled Events for Saturday';
  for (let i = 0; i < data.friday.fridayEvents.length; i++) {
    tableBody.appendChild(createEntries(data.saturday.saturdayEvents[i]));
  }
}

function handleSundayButton() {
  tableBody.innerHTML = '';
  h2.textContent = 'Scheduled Events for Sunday';
  for (let i = 0; i < data.sunday.sundayEvents.length; i++) {
    tableBody.appendChild(createEntries(data.sunday.sundayEvents[i]));
  }
}

createEntries();
