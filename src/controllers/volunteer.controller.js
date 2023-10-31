import { Volunteer } from "../models/volunteer.model";

const addVolunteer = async (req, res) => {
  try {
    const { name, contactInformation, skills, availability, areasOfInterest, events } = req.body;
    const newVolunteer = new Volunteer({
      name,
      contactInformation,
      skills,
      availability,
      areasOfInterest,
      events,
    });
    const savedVolunteer = await newVolunteer.save();
    res.json(savedVolunteer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add a volunteer' });
  }
};

const updateVolunteer = async (req, res) => {
  try {
    const volunteerId = req.params.id;
    const updatedVolunteerData = req.body;
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(volunteerId, updatedVolunteerData, {
      new: true,
    });
    if (!updatedVolunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    res.json(updatedVolunteer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to edit the volunteer' });
  }
};

const deleteVolunteer = async (req, res) => {
  try {
    const volunteerId = req.params.id;
    const deletedVolunteer = await Volunteer.findByIdAndRemove(volunteerId);
    if (!deletedVolunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }
    res.json(deletedVolunteer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the volunteer' });
  }
};

const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find().populate('events');
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch volunteers' });
  }
};

export {
  addVolunteer,
  updateVolunteer,
  deleteVolunteer,
  getVolunteers,
}
