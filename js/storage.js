
const EVENT_STORAGE_KEY = 'calendarEvents';

function saveEvents(events) {
    localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(events));
}

function getEvents() {
    const events = localStorage.getItem(EVENT_STORAGE_KEY);
    return events ? JSON.parse(events) : [];
}

function getEventById(id) {
    const events = getEvents();
    return events.find(event => event.id === id);
}

function addEvent(newEvent) {
    const events = getEvents();
    events.push(newEvent);
    saveEvents(events);
}

function updateEvent(updatedEvent) {
    const events = getEvents();
    const index = events.findIndex(event => event.id === updatedEvent.id);
    if (index !== -1) {
        events[index] = updatedEvent;
        saveEvents(events);
    }
}

function deleteEvent(id) {
    const events = getEvents();
    const filteredEvents = events.filter(event => event.id !== id);
    saveEvents(filteredEvents);
}

export { getEvents, getEventById, addEvent, updateEvent, deleteEvent };