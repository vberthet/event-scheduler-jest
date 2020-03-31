import express from 'express';
import {EventController} from "../controller"
import {EventRepository, InMemoryEventRepository} from "../repository";
import {EventService} from "../services";
import {EventSerializer} from "../serializer";
var router = express.Router();

/// Wire app dependencies
// Should be done using DI

// We use in-memory Repository we shall use a real database
let eventRepository = new InMemoryEventRepository();
let eventService = new EventService(eventRepository);
let eventSerializer = new EventSerializer();
let eventController = new EventController(eventService,eventSerializer);

/* GET users listing. */
router.get('/', eventController.getAll.bind(eventController));

/* GET users listing. */
router.get('/first', eventController.getFirst.bind(eventController));

/* GET users listing. */
router.get('/last', eventController.getLast.bind(eventController));

/* GET users listing. */
router.get('/longest', eventController.getLast.bind(eventController));

/* GET users listing. */
router.get('/shortest', eventController.getShortest.bind(eventController));

module.exports = router;
