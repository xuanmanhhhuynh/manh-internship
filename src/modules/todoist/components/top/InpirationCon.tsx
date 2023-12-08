"use client";
import axios from "axios";

import { useEffect } from "react";

type TodoListEntity = {
  id: number;
  title: string;
  description?: string;
};

const InpirationCon = () => {
  const todolist: TodoListEntity[] = [
    {
      id: 1,
      title: "Explo todoList",
    },
    {
      id: 2,
      title: " I'm happy today",
    },
    {
      id: 3,
      title: "Today I'm very focused ",
    },
  ];

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3100/posts",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {todolist.map((item, index) => (
        <li
          key={index}
          className="flex items-center space-x-4 border-b py-1.5 border-b-gray-100"
        >
          <input type="radio" id={`radio_${index}`} name="boss" />
          <h1>{item.title}</h1>
        </li>
      ))}
    </ul>
  );
};

export default InpirationCon;
