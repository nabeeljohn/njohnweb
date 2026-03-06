import { NextResponse } from "next/server";
import pkg from "pg";

const { Client } = pkg;

// helper delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
  const client = new Client({
    connectionString: process.env.NJOHNWEB_DATABASE_URL,
  });
    try {
    await client.connect();

    const res = await client.query(
      "SELECT taskid, title, description, createdon FROM tasks"
    );
    // Add 5 second delay
    await delay(5000);
    await client.end();
    console.log("Database query result:", res.rows);
    return NextResponse.json(res.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Database query failed" },
      { status: 500 }
    );
  }
}