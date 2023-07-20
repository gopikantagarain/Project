const noteList = document.getElementById('note-list');
const noteEditor = document.getElementById('note-editor');
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');
const addNoteBtn = document.getElementById('add-note-btn');
const saveNoteBtn = document.getElementById('save-note-btn');
const notes = [
  { id: 1, title: 'Note 1', content: 'This is the content of note 1' },
  { id: 2, title: 'Note 2', content: 'This is the content of note 2' },
  { id: 3, title: 'Note 3', content: 'This is the content of note 3' }
];
function displayNotes() {
  noteList.innerHTML = '';
  notes.forEach(note => {
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');
    noteCard.innerHTML = `<h3 class="note-title">${note.title}</h3><p>${note.content}</p>`;
    noteCard.addEventListener('click', () => editNoteForm(note));
    noteList.appendChild(noteCard);
  });
}
function editNoteForm(note) {
  noteTitleInput.value = note.title;
  noteContentInput.value = note.content;
  noteEditor.style.display = 'block';
}
function addNote() {
  noteTitleInput.value = '';
  noteContentInput.value = '';
  noteEditor.style.display = 'block';
}
function saveNote() {
  const newNote = {
    id: notes.length + 1,
    title: noteTitleInput.value,
    content: noteContentInput.value
  };
  notes.push(newNote);
  displayNotes();
  noteEditor.style.display = 'none';
}
addNoteBtn.addEventListener('click', addNote);
saveNoteBtn.addEventListener('click', saveNote);
displayNotes();