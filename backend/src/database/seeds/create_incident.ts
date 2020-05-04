import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  return knex("incidents").del()
    .then(() => {
      return knex("incidents").insert([
        {
          title: "incidentTest",
          description: "describeTest",
          value: 150,
          ong_id: '1',
        }
      ]);
    });
};
