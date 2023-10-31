import express from "express"
import { addEvent, deleteEvent, getEvents, updateEvent } from "../controllers/event.controller";
const router = express.Router();

router.post('/', addEvent);
router.post('/update/:id',updateEvent);
router.delete('/:id', deleteEvent);
router.get('/', getEvents);

export {router};