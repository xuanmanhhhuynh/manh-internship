import React from 'react';

import Sidebar from '../sidebar/page';
import TodoList from '../todoist/components';

function TodoApp() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <TodoList />
    </main>
  );
}

export default TodoApp;
