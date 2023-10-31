import { Event } from "../models/event.model";

const addEvent = async (req, res) => {
  try {
    const { name, date, location, description, volunteerRoles, registeredVolunteers } = req.body;
    const newEvent = new Event({
      name,
      date,
      location,
      description,
      volunteerRoles,
      registeredVolunteers,
    });
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add an event' });
  }
};

const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const updatedEventData = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedEventData, {
      new: true,
    });
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to edit the event' });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const deletedEvent = await Event.findByIdAndRemove(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(deletedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the event' });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('registeredVolunteers');
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};



export {
  addEvent,
  updateEvent,
  deleteEvent,
  getEvents,
}
