import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateTask } from "../tasks";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateTask(params.taskId, updates);
    return redirect(`/task/${params.taskId}`);
  }