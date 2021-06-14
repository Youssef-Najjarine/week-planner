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

addEntry.addEventListener('click', lightUp);
submit.addEventListener('click', removeModal);

function lightUp() {
  document.querySelector('.blackBox').classList.add('active');
}

function removeModal() {
  document.querySelector('.blackBox').classList.remove('active');
}
