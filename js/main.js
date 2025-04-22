
import { getEvents, deleteEvent } from './storage.js';

document.addEventListener('DOMContentLoaded', function() {
    renderEvents();
    setupFilters();
});

function renderEvents(events = getEvents()) {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p>Дата: ${new Date(event.date).toLocaleDateString()}</p>
            <p>Категория: ${getCategoryName(event.category)}</p>
            <p>${event.description || ''}</p>
        `;
        eventCard.addEventListener('click', () => navigateToEdit(event.id));
        eventsList.appendChild(eventCard);
    });
}

function setupFilters() {
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('dateSort').addEventListener('change', applyFilters);
}

function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('dateSort').value;
    
    let events = getEvents();
    
    // Фильтрация по категории
    if (category !== 'all') {
        events = events.filter(event => event.category === category);
    }
    
    // Сортировка по дате
    events.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    renderEvents(events);
}

function getCategoryName(category) {
    const categories = {
        personal: 'Личное',
        work: 'Работа',
        public: 'Общественное'
    };
    return categories[category] || category;
}