
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addEventBtn').addEventListener('click', function() {
        window.location.href = '/add-event.html';
    });
    
});

function navigateToEdit(eventId) {
    window.location.href = `/edit-event.html?id=${eventId}`;
}