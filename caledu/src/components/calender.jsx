import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css"; // Import the CSS file

function Calendar() {
  const [events, setEvents] = useState([
    { title: "Sample Event", date: "2025-01-10" },
  ]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "" }); // Reset the form
    } else {
      alert("Please fill in both the event title and date.");
    }
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Event Calendar</h2>

      {/* Form for adding events */}
      <div className="event-form">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
          className="form-input"
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          className="form-input"
        />
        <button onClick={handleAddEvent} className="add-event-button">
          Add Event
        </button>
      </div>

      {/* FullCalendar Component */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next", // Left side
          center: "title", // Center
          end: "dayGridMonth,timeGridWeek,timeGridDay", // Right side
        }}
        height="90vh"
        events={events} // Pass events to FullCalendar
      />
    </div>
  );
}

export default Calendar;
