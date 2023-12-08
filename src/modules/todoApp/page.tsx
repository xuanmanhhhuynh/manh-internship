import React from "react";
import TodoList from "../todoist/components";
import Sidebar from "../sidebar/page";

function TodoApp() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <TodoList />
    </main>
  );
}

export default TodoApp;
