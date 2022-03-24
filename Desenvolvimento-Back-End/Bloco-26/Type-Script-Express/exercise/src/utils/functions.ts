import fs from 'fs/promises';
import User from '../interfaces/User';
import path from 'path';

async function read(): Promise<User[]> {
  try {
    const data = await fs.readFile(path.resolve("./", "./src/users.json"), "utf-8");
    const users: User[] = JSON.parse(data);
    return users;
    } catch (error) {
    console.log(error);
    throw new Error("Error Reading File");
    } 
}

async function write(data: User[]): Promise<void> {
  await fs.writeFile('../..users.json', JSON.stringify(data));
}

export { read, write };
