"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addService = exports.getEntriesWithoutInfo = exports.findByID = exports.getEntries = void 0;
const service_json_1 = __importDefault(require("./service.json"));
const service = service_json_1.default;
const getEntries = () => service;
exports.getEntries = getEntries;
const findByID = (id) => {
    const entry = service.find(d => d.id === id);
    if (entry != null) {
        const { comments, ...restOfService } = entry;
        return restOfService;
    }
    return undefined;
};
exports.findByID = findByID;
const getEntriesWithoutInfo = () => {
    return service.map(({ id, creationDate, typeService, technical, clientId, visitDay, address, phone, email }) => {
        return {
            id,
            creationDate,
            typeService,
            technical,
            clientId,
            visitDay,
            address,
            phone,
            email
        };
    });
};
exports.getEntriesWithoutInfo = getEntriesWithoutInfo;
const addService = (newService) => {
    const newServiceEntry = {
        id: Math.max(...service.map(d => d.id)) + 1,
        ...newService
    };
    service.push(newServiceEntry);
    return newServiceEntry;
};
exports.addService = addService;
