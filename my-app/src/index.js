import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage, {loader as mainLoader, action as mainAction} from "./routes/MainPage";
import ErrorPage from "./routes/error-page";
import EditTask, { action as editAction } from "./routes/EditPage";
import TaskDetail, { loader as taskDetailLoader } from "./routes/TaskDetail";
import { action as destroyAction } from "./routes/destroy";