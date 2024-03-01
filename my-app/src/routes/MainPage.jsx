import React from "react";
import {Outlet,useLoaderData, Form, redirect, useNavigation} from "react-router-dom";
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