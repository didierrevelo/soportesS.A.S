import { ServiceEntry, newService, nSISE } from '../types/types'
import servicesData from './service.json'

const service: ServiceEntry[] = servicesData as ServiceEntry[]

export const getEntries = (): ServiceEntry[] => service

export const findByID = (id: number): nSISE | undefined => {
  const entry = service.find(d => d.id === id)
  if (entry != null) {
    const { comments, ...restOfService } = entry
    return restOfService
  }
  return undefined
}

export const getEntriesWithoutInfo = (): nSISE[] => {
  return service.map(
    ({
      id,
      creationDate,
      typeService,
      technical,
      clientId,
      visitDay,
      address,
      phone,
      email
    }) => {
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
      }
    }
  )
}

export const addService = (newService: newService): ServiceEntry => {
  const newServiceEntry = {
    id: Math.max(...service.map(d => d.id)) + 1,
    ...newService
  }
  service.push(newServiceEntry)
  return newServiceEntry
}
