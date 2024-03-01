import { redirect } from "react-router-dom";
import { deleteTask } from "../tasks";

export async function action({ params }) {
  await deleteTask(params.taskId);
  return redirect("/");
}