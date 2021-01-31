import {createConnection, Connection, getManager, EntityManager} from "typeorm";

import dotenv from 'dotenv'
dotenv.config();

export async function dbInit(): Promise<Connection> {
   return await createConnection(process.env.ENV)
}

export function dbGetManager(): EntityManager {
   return getManager(process.env.ENV)
}