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