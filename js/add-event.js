
import { addEvent } from './storage.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('eventForm');
    const cancelBtn = document.getElementById('cancelBtn');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newEvent = {
            id: Date.now().toString(),
            title: document.getElementById('title').value,
            date: document.getElementById('date').value,
            category: document.getElementById('category').value,
            description: document.getElementById('description').value
        };
        
        addEvent(newEvent);
        window.location.href = '/index.html';
    });
    
    cancelBtn.addEventListener('click', function() {
        window.location.href = '/index.html';
    });
});