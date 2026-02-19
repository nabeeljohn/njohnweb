import { NextResponse } from "next/server";
import pkg from "pg";

const { Client } = pkg;

export async function GET() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();

    const res = await client.query(
      "SELECT first_name, last_name, email_address FROM contact"
    );

    await client.end();

    return NextResponse.json(res.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Database query failed" },
      { status: 500 }
    );
  }
}
