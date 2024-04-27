import { ITodo } from "../../types/types";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../api/apiSlice";
// import { useAppDispatch } from "../../redux/hooks";
// import { addFavorite } from "../../redux/stores/favoriteSlice";

export default function Todo({ todo }: { todo: ITodo }) {
  const { id, title, completed } = todo;
  const [editTodo] = useUpdateTodoMutation();
  const [removeTodo] = useDeleteTodoMutation();
  //   const dispatch = useAppDispatch();
  return (
    <div className="w-full flex mb-4 items-center justify-between">
      {completed ? (
        <p className="w-full text-gray-950 line-through">{title}</p>
      ) : (
        <p className="w-full text-gray-950">{title}</p>
      )}
      <div className="w-full flex items-center gap-x-5 justify-end">
        {!completed && (
          <button
            onClick={() => {
              editTodo({
                completed: true,
                id,
                title,
              });
            }}
            className="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500"
          >
            Done
          </button>
        )}

        <button
          //   onClick={() => {
          //     dispatch(addFavorite(todo));
          //   }}
          className="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-blue-500 border-blue-500 hover:bg-blue-500"
        >
        {id} :  Favorite
        </button>
        <button
          onClick={() => removeTodo(id)}
          className="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
