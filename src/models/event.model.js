import mongoose from "mongoose";
import { Volunteer } from "./volunteer.model";
const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    description: String,
    volunteerRoles: [
      {
        role: String,
        requiredVolunteers: Number,
      },
    ],
    registeredVolunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' }],
  });
  
  const Event = mongoose.model('Event', eventSchema);
  export { Event }
  