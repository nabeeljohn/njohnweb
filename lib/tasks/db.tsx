import pkg from "pg";
import { Pool } from "pg";

const { Client } = pkg;

export const pool = new Pool({
  connectionString: process.env.NJOHNWEB_DATABASE_URL,
});

export async function getTasksByMemberId(memberId: string) {
        const client = new Client({
        connectionString: process.env.NJOHNWEB_DATABASE_URL,
    });
    await client.connect();
    const res = await client.query(
        "SELECT contactid, taskid, title, description, createdon, is_completed FROM tasks WHERE contactid = $1",
        [memberId]
    );
    await client.end();
    console.log("Fetched tasks new:", res.rows); // check terminal
    return res.rows;
}

export async function createTaskByMemberId(memberId: string, title: string, description: string) {
  const client = new Client({
    connectionString: process.env.NJOHNWEB_DATABASE_URL,
  });
  await client.connect();
  const contactid = memberId; // use the provided member ID
  await client.query(
    "INSERT INTO tasks (title, description, contactid) VALUES ($1, $2, $3)",
    [title, description, contactid]
  );
  await client.end();
}

export async function deleteTask(taskid: string) {
  const client = new Client({
    connectionString: process.env.NJOHNWEB_DATABASE_URL,
  });
  await client.connect();
  await client.query("DELETE FROM tasks WHERE taskid = $1", [taskid]);
  await client.end();
}

export async function editTask(taskid: string, title: string, description: string) {
  const client = new Client({
    connectionString: process.env.NJOHNWEB_DATABASE_URL,
  });
  await client.connect();
  await client.query("UPDATE tasks SET title = $1, description = $2 WHERE taskid = $3", [title, description, taskid]);
  await client.end();
}

export async function deleteAllTasks(memberId: string) {
  const client = new Client({
    connectionString: process.env.NJOHNWEB_DATABASE_URL,
  });
  await client.connect();
  await client.query("DELETE FROM tasks WHERE contactid = $1", [memberId]); // deletes all rows for the specified member
  await client.end();
}

export async function toggleIsCompleted(taskId: string) {
  await pool.query(
    "UPDATE tasks SET is_completed = NOT is_completed WHERE taskid = $1",
    [taskId]
  );
}