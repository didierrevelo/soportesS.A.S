export enum TypeServices {
  Install = 'instalacion',
  Maintenance = 'matenimiento',
  Fix = 'reparacion'
}

export interface ServiceEntry {
  id: number
  creationDate: string
  typeService: TypeServices
  technical: string
  clientId: number
  visitDay: string
  address: string
  phone: number
  email: string
  comments: string
}

export type nSISE = Omit<ServiceEntry, 'comments'>

export type newService = Omit<ServiceEntry, 'id'>
