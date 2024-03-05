import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateTask } from "../tasks";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateTask(params.taskId, updates);
  return redirect(`/task/${params.taskId}`);
}

export default function EditTask() {
  const { task } = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <h2>Edit Task</h2>
      <Form method="post" id="task-form">
        <p className="edit-par">Title</p>
        <input
          placeholder="Title..."
          aria-label="Title"
          type="text"
          name="title"
          defaultValue={task.title}
        />

        <label>
          <p className="edit-par">Description</p>
          <textarea
            name="description"
            placeholder="Description..."
            defaultValue={task.description}
            rows={6}
          />
        </label>

        <button type="submit" className="save-btn">
          Save
        </button>
        <button
          type="button"
          className="cancel-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </Form>
    </>
  );
}
