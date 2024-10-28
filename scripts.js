let flashcards = [];

// Add a flashcard
function addFlashcard() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    if (question && answer) {
        flashcards.push({ question, answer });
        document.getElementById('question').value = '';
        document.getElementById('answer').value = '';
        displayFlashcards();
    } else {
        alert('Please enter both a question and an answer!');
    }
}

// Display flashcards
function displayFlashcards() {
    const flashcardDeck = document.getElementById('flashcard-deck');
    flashcardDeck.innerHTML = '';

    // Shuffle the flashcards randomly
    const shuffledFlashcards = flashcards.sort(() => 0.5 - Math.random());

    shuffledFlashcards.forEach((flashcard, index) => {
        const flashcardElement = document.createElement('div');
        flashcardElement.classList.add('flashcard');
        
        flashcardElement.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">${flashcard.question}</div>
                <div class="flashcard-back">${flashcard.answer}</div>
                <button class="delete-btn" onclick="deleteFlashcard(${index})">Delete</button>
            </div>
        `;

        // Add a right-click event listener to show the delete button
        flashcardElement.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Prevent the context menu from showing
            this.classList.add('show-delete');
        });

        flashcardDeck.appendChild(flashcardElement);
    });
}

// Delete a flashcard
function deleteFlashcard(index) {
    flashcards.splice(index, 1);
    displayFlashcards();
}

// Download flashcards as CSV
function downloadCSV() {
    let csvContent = "data:text/csv;charset=utf-8,Question,Answer\n";

    flashcards.forEach(flashcard => {
        const row = `${flashcard.question},${flashcard.answer}`;
        csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "flashcards.csv");
    document.body.appendChild(link);
    link.click();
}

// Upload flashcards from CSV
function uploadCSV(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            const rows = contents.split("\n").slice(1); // Skip header

            rows.forEach(row => {
                const [question, answer] = row.split(",");
                if (question && answer) {
                    flashcards.push({ question: question.trim(), answer: answer.trim() });
                }
            });

            displayFlashcards();
        };
        reader.readAsText(file);
    }
}
