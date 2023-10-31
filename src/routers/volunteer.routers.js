
import express from "express"
import { addVolunteer, deleteVolunteer, updateVolunteer, getVolunteers } from "../controllers/volunteer.controller";
const router = express.Router();


router.post('/', addVolunteer);
router.post('/update/:id', updateVolunteer);
router.delete('/:id', deleteVolunteer);
router.get('/', getVolunteers);


export {router};
