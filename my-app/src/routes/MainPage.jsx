import React from "react";
import { Outlet, useLoaderData, Form, redirect } from "react-router-dom";
import { getTasks, createTask, updateTask } from "../tasks";
import { useEffect, useState } from "react";
import "../../src/index.css";
import TaskList from "../components/TaskList";
import SearchForm from "../components/SearchForm";
import FilterButtons from "../components/FilterButtons";

export async function action() {
  const task = await createTask();
  return redirect(`/task/${task.id}/edit`);
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const tasks = await getTasks(q);
  return { tasks, q };
}

export default function MainPage() {
  const { tasks: initialTasks, q } = useLoaderData();

  const [tasks, setTasks] = useState(initialTasks);

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const handleUpdateTaskStatus = async (taskId, isCompleted) => {
    try {
      await updateTask(taskId, { completed: isCompleted });
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: isCompleted } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <>
      <div id="sidebar">
        <h1>TO-DO LIST</h1>

        <div>
          <SearchForm q={q} />
          <Form method="post">
            <button type="submit" className="add">
              New
            </button>
          </Form>
        </div>
        <FilterButtons handleFilter={handleFilter} filter={filter} />

        {tasks.length ? (
          <TaskList
            tasks={tasks.filter((task) => {
              if (filter === "all") return true;
              if (filter === "completed") return task.completed;
              if (filter === "uncompleted") return !task.completed;
              return false;
            })}
            handleUpdateTaskStatus={handleUpdateTaskStatus}
          />
        ) : (
          <p>
            <i>No Tasks</i>
          </p>
        )}
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
