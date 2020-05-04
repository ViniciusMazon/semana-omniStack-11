import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    return knex('ongs').del()
        .then(() => {
            return knex('ongs').insert([
                { id: '1',
                  name: 'OngTest',
                  email: 'test@ong.com',
                  whatsapp: '1100000000',
                  city: 'São Paulo',
                  uf: 'SP'
                },
            ]);
        });
};
