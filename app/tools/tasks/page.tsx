import TaskList from "./tasklist";
import pkg from "pg";

const { Client } = pkg;

export default async function Tasks() {
    const client = new Client({
        connectionString: process.env.NJOHNWEB_DATABASE_URL,
    });

    await client.connect();
    const res = await client.query(
        "SELECT taskid, title, description, createdon FROM tasks"
    );
    await client.end();

    console.log("Fetched tasks new:", res.rows); // check terminal

    return (
        <div className="bg-gray-700 text-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl font-bold mb-4">Tasks</h1>
                <TaskList tasks={res.rows} />
            </div>
        </div>
    );
}