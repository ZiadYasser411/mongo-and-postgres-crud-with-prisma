import { PrismaClient as PostgresClient } from '../prisma/generated/postgres'
import { PrismaClient as MongoClient } from '../prisma/generated/mongodb'

export const pg = new PostgresClient()
export const mongo = new MongoClient()
