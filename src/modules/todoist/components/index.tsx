import MyWork from './bott/MyWork';
import Cha from './mid/cha';
import Inspiration from './top/Inspiration';

const TodoList = () => {
  return (
    <div className="w-10/12 px-64 pt-16">
      <MyWork />
      <Cha />
      <Inspiration />
    </div>
  );
};

export default TodoList;
