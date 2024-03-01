import { useLoaderData } from "react-router-dom";
import { getTask } from "../tasks";

export async function loader({ params }) {
  const task = await getTask(params.taskId);
  return { task };
}