import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("group").del()
        .then(() => {
            // Inserts seed entries
            return knex("group").insert([
                { name: "JSCommunity" },
                { name: "PHPCommunity" },
                { name: "C++Community" },
            ]);
        });
};
