import { useLoaderData } from "react-router-dom";
import { getTask } from "../tasks";

export async function loader({ params }) {
  const task = await getTask(params.taskId);
  return { task };
}

export default function TaskDetail() {
    const { task } = useLoaderData();
    return (
      <div id="task-details">
        <div>
          <p>Title: {task.title}</p>
  
          <p>Description:{task.description}</p>
        </div>
      </div>
    );
  }