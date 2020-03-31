import {EventService} from "./services";
import {EventSerializer} from "./serializer";
import express from 'express';

export class EventController {
    /**
     * @type {EventService}
     */
    eventService;
    /**
     * @type {EventSerializer}
     */
    eventSerializer;

    constructor(eventService,eventSerializer) {
        this.eventService = eventService;
        this.eventSerializer = eventSerializer
    }

    /**
     *
     * @param {Request} req
     * @param res
     * @param next
     */
    getAll(req, res, next){
        let events = this.eventService.getEvents();
        res.send(this.eventSerializer.serialize(events))
    }

    /**
     *
     * @param {Request} req
     * @param res
     * @param next
     */
    getFirst(req, res, next){
        let event = this.eventService.getFirstEvent();
        res.send(this.eventSerializer.serialize(event))
    }

    /**
     *
     * @param {Request} req
     * @param res
     * @param next
     */
    getLast(req, res, next){
        let event = this.eventService.getLastEvent();
        res.send(this.eventSerializer.serialize(event))
    }

    /**
     *
     * @param {Request} req
     * @param res
     * @param next
     */
    getLongest(req, res, next){
        //TODO
        res.send("{}");
    }

    /**
     *
     * @param {Request} req
     * @param res
     * @param next
     */
    getShortest(req, res, next){
        res.send("{}");
    }

}