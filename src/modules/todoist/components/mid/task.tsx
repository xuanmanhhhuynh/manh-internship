type TodoListEntity = {
  id: number;
  title: string;
  description?: string;
};

const Mid = () => {
  const todolist: TodoListEntity[] = [
    {
      id: 1,
      title: "ngày 1",
    },
    {
      id: 2,
      title: "ngày 2 ",
    },
    {
      id: 3,
      title: "ngày 3 ",
    },
  ];

  return (
    <ul>
      {todolist.map((item, index) => (
        <li key={index}>
          <h1>{item.title}</h1>
        </li>
      ))}
    </ul>
  );
};

export default Mid;
