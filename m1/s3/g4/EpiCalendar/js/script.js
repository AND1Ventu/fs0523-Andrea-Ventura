const calendar = document.getElementById('calendar');
const currentMonthElement = document.getElementById('current-month');
const daysElement = document.getElementById('days');

// Funzione per ottenere il numero di giorni in un mese
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// Funzione per aggiornare la visualizzazione del calendario del mese corrente
function updateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const daysInMonth = getDaysInMonth(year, month);
    const startDate = new Date(year, month, 1 - firstDay.getDay() + 1); // Modifica qui

    currentMonthElement.textContent = new Date(year, month, 1).toLocaleDateString('it-IT', { year: 'numeric', month: 'long' });

    daysElement.innerHTML = '';

    for (let i = 0; i < daysInMonth; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        const dayDiv = document.createElement('div');
        dayDiv.textContent = date.getDate();
        dayDiv.classList.add('day');

        if (date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            dayDiv.classList.add('current-day');
        }

        daysElement.appendChild(dayDiv);
    }
}

// Aggiorna il calendario al caricamento della pagina
const currentDate = new Date();
updateCalendar(currentDate.getFullYear(), currentDate.getMonth());

// Gestione dei pulsanti per il mese successivo e precedente
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});
