import * as Knex from "knex";
import bcrypt from 'bcrypt';

const SALT_ROUNDS: number = parseInt(process.env.SALT_ROUNDS, 10);
const SEEDS_PASSWORD: string = process.env.SEEDS_PASSWORD;

interface Seed {
    email: string;
    password: string;
}

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    const hash = await bcrypt.hash(SEEDS_PASSWORD, SALT_ROUNDS);

    return knex("users").del()
        .then(() => {
            // Inserts seed entries
            const seeds: Array<Seed> = [];

            for (let i = 0; i < 10; i += 1) {
                seeds.push({email: `mail${i}@mail.com`, password: hash})
            }

            return knex("users").insert(seeds);
        });
};
