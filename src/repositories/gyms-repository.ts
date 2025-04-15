import { Gym, Prisma } from 'generated/prisma'

export interface findManyNearby {
  latitude: number
  longitude: number
}

export interface GymsRepository {
  findById(id: string): Promise<Gym | null>
  searchMany(query: string, page: number): Promise<Gym[]>
  findManyNearby(params: findManyNearby): Promise<Gym[]>
  create(data: Prisma.GymCreateInput): Promise<Gym>
}
