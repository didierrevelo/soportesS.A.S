"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types/types");
const isString = (string) => {
    if (typeof string === 'string' || String instanceof string) {
        return true;
    }
    return false;
};
const isNumber = (param) => {
    if (typeof Number === 'string' || Number instanceof param) {
        return true;
    }
    return false;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isTypeServices = (param) => {
    return Object.values(types_1.TypeServices).includes(param);
};
const isEmail = (param) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3,4})+$/.test(param)) {
        return true;
    }
    return false;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorret or missing date');
    }
    return dateFromRequest;
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorret or missing comment');
    }
    return commentFromRequest;
};
const parseTypeService = (typeServiceFromRequest) => {
    if (!isString(typeServiceFromRequest) || !isTypeServices(typeServiceFromRequest)) {
        throw new Error('Incorret or missing TypeServices');
    }
    return typeServiceFromRequest;
};
const parseTechnical = (technicalFromRequest) => {
    if (!isString(technicalFromRequest)) {
        throw new Error('Incorret or missing Technical');
    }
    return technicalFromRequest;
};
const parseClientId = (clientIdFromRequest) => {
    if (!isNumber(clientIdFromRequest)) {
        throw new Error('Incorret or missing ClientId');
    }
    return clientIdFromRequest;
};
const parseAddress = (technicalFromRequest) => {
    if (!isString(technicalFromRequest)) {
        throw new Error('Incorret or missing Technical');
    }
    return technicalFromRequest;
};
const parsePhone = (phoneFromRequest) => {
    if (!isNumber(phoneFromRequest)) {
        throw new Error('Incorret or missing Phone');
    }
    return phoneFromRequest;
};
const parseEmail = (emailFromRequest) => {
    if (!isEmail(emailFromRequest)) {
        throw new Error('Incorret or missing Email');
    }
    return emailFromRequest;
};
const toNewServiceEntry = (object) => {
    const newEntry = {
        comments: parseComment(object.comments),
        creationDate: parseDate(object.creationDate),
        visitDay: parseDate(object.visitDay),
        typeService: parseTypeService(object.typeService),
        technical: parseTechnical(object.technical),
        clientId: parseClientId(object.clientId),
        address: parseAddress(object.address),
        phone: parsePhone(object.phone),
        email: parseEmail(object.email)
    };
    return newEntry;
};
exports.default = toNewServiceEntry;
