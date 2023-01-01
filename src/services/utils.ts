import { TypeServices, newService } from '../types/types'

const isString = (string: string): boolean => {
  if (typeof string === 'string') {
    return true
  }
  return false
}
const isNumber = (number: any): boolean => {
  if (typeof number === 'number') {
    return true
  }
  return false
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isTypeServices = (param: any): boolean => {
  return Object.values(TypeServices).includes(param)
}

const isEmail = (param: any): boolean => {
  if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)+$/.test(param)) {
    return true
  }
  return false
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorret or missing date')
  }
  return dateFromRequest
}

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorret or missing comment')
  }
  return commentFromRequest
}

const parseTypeService = (typeServiceFromRequest: any): TypeServices => {
  if (!isString(typeServiceFromRequest) || !isTypeServices(typeServiceFromRequest)) {
    throw new Error('Incorret or missing TypeServices')
  }
  return typeServiceFromRequest
}

const parseTechnical = (technicalFromRequest: any): string => {
  if (!isString(technicalFromRequest)) {
    throw new Error('Incorret or missing Technical')
  }
  return technicalFromRequest
}

const parseClientId = (clientIdFromRequest: any): number => {
  if (!isNumber(clientIdFromRequest)) {
    throw new Error('Incorret or missing ClientId')
  }
  return clientIdFromRequest
}

const parseAddress = (technicalFromRequest: any): string => {
  if (!isString(technicalFromRequest)) {
    throw new Error('Incorret or missing Technical')
  }
  return technicalFromRequest
}

const parsePhone = (phoneFromRequest: any): number => {
  if (!isNumber(phoneFromRequest)) {
    throw new Error('Incorret or missing Phone')
  }
  return phoneFromRequest
}

const parseEmail = (emailFromRequest: any): string => {
  if (!isEmail(emailFromRequest)) {
    throw new Error('Incorret or missing Email')
  }
  return emailFromRequest
}

const toNewServiceEntry = (object: any): newService => {
  const newEntry: newService = {
    creationDate: parseDate(object.creationDate),
    visitDay: parseDate(object.visitDay),
    typeService: parseTypeService(object.typeService),
    technical: parseTechnical(object.technical),
    clientId: parseClientId(object.clientId),
    address: parseAddress(object.address),
    phone: parsePhone(object.phone),
    email: parseEmail(object.email),
    comments: parseComment(object.comments)
  }
  return newEntry
}

export default toNewServiceEntry
