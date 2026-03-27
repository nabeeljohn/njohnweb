import pkg from "pg";
import { Pool } from "pg";

const { Client } = pkg;

export const pool = new Pool({
    connectionString: process.env.NJOHNWEB_DATABASE_URL,
});

export async function signUpContact(firstName: string, lastName: string, email: string, hashedPassword: string) {
    const client = new Client({
        connectionString: process.env.NJOHNWEB_DATABASE_URL,
    });
    await client.connect();

    await client.query(
        "INSERT INTO contact (first_name, last_name, email_address, password) VALUES ($1, $2, $3, $4)",
        [firstName, lastName, email, hashedPassword]
    );
    await client.end();
}
