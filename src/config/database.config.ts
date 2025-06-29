import { PrismaClient } from "@prisma/client";

//create client
const database: PrismaClient = new PrismaClient();

//re-export client
export default database;