import pkg from "pg";

const { Client } = pkg;

export async function getTasks() {
        const client = new Client({
        connectionString: process.env.NJOHNWEB_DATABASE_URL,
    });
    await client.connect();
    const res = await client.query(
        "SELECT contactid, taskid, title, description, createdon FROM tasks"
    );
    await client.end();
    console.log("Fetched tasks new:", res.rows); // check terminal
    return res.rows;
}

export async function createTask(title: string, description: string) {
  const client = new Client({
    connectionString: process.env.NJOHNWEB_DATABASE_URL,
  });
  await client.connect();
  const contactid = "21d65c44-c18d-4da8-884b-ccb0f598f44e"; // placeholder
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

export async function deleteAllTasks() {
  const client = new Client({
    connectionString: process.env.NJOHNWEB_DATABASE_URL,
  });
  await client.connect();
  await client.query("DELETE FROM tasks"); // deletes all rows
  await client.end();
}