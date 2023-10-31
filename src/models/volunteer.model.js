import mongoose from "mongoose";
import { Event } from "./event.model";

const volunteerSchema = new mongoose.Schema({
    name: String,
    contactInformation: String,
    skills: [String],
    availability: String,
    areasOfInterest: [String],
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
export { Volunteer }