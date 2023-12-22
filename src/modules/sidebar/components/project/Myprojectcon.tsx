'use client';

import { useEffect } from 'react';
import axios from 'axios';

type TodoListEntity = {
  id: number;
  title: string;
  description?: string;
};

const Myprojectcon = () => {
  const todolist: TodoListEntity[] = [
    {
      id: 1,
      title: 'MyWork'
    }
  ];

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3100/posts'
    })
      .then(_response => {
        // console.log(response.data);
      })
      .catch(_error => {
        // console.error(error);
      });
  }, []);

  return (
    <ul>
      {todolist.map((item, index) => (
        <li key={index} className="flex items-center space-x-4 border-b py-1.5 border-b-gray-100">
          <h1>{item.title}</h1>
        </li>
      ))}
    </ul>
  );
};

export default Myprojectcon;
