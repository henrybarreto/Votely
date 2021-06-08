import {createConnection, Connection, getManager, EntityManager} from "typeorm";

import dotenv from 'dotenv'

export async function dbInit(): Promise<Connection> {
   dotenv.config();
   return await createConnection(process.env.ENV)
}

export function dbGetManager(): EntityManager {
   dotenv.config();
   return getManager(process.env.ENV)
}