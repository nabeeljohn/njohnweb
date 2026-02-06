// firebase/nextUpServices.ts
import { collection, addDoc, onSnapshot, serverTimestamp, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export type TodoCard = {
  id: string;
  title: string;
  body: string;
  createdOn: string | { seconds: number; nanoseconds: number };
};

// Real-time listener
export function subscribeTodos(callback: (todos: TodoCard[]) => void) {
  return onSnapshot(
    collection(db, "ToDoCardsNJohn"),
    (snapshot) => {
      const todosData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title || "",
          body: data.body || "",
          createdOn: data.createdOn || "",
        };
      });
      callback(todosData);
    },
    (error) => console.error("Firestore subscription error:", error)
  );
}

// Add a new todo
export async function addTodoCard(newTodoCard: { title: string; body: string }) {
  return await addDoc(collection(db, "ToDoCardsNJohn"), {
    title: newTodoCard.title,
    body: newTodoCard.body,
    createdOn: serverTimestamp(),
  });
}
