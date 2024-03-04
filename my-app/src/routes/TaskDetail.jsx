import { useLoaderData } from "react-router-dom";
import { getTask } from "../tasks";

export async function loader({ params }) {
  const task = await getTask(params.taskId);
  return { task };
}

export default function TaskDetail() {
  const { task } = useLoaderData();
  return (
    <>
      <h2>Task Details</h2>
      <div id="task-details" className="task-details-container">
        <div className="task-details-content">
          <p className="task-details-title">
            Title: <span className="task-title">{task.title}</span>
          </p>
          <p className="task-details-description">
            Description: <span className="task-description">{task.description}</span>
          </p>
        </div>
      </div>
    </>
  );
}