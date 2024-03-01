import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage, {loader as mainLoader, action as mainAction} from "./routes/MainPage";
import ErrorPage from "./routes/error-page";
import EditTask, { action as editAction } from "./routes/EditPage";
import TaskDetail, { loader as taskDetailLoader } from "./routes/TaskDetail";
import { action as destroyAction } from "./routes/destroy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      loader: mainLoader,
      action: mainAction,
      children: [
        {
          path: "task/:taskId",
          element: <TaskDetail />,
          loader: taskDetailLoader,
        },
        {
          path: "task/:taskId/edit",
          element: <EditTask />,
          loader: taskDetailLoader,
          action: editAction,
        },
  
        {
          path: "task/:taskId/destroy",
          action: destroyAction,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  
