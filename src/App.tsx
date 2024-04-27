import React from "react";
import { useState } from "react";
import Todo from "./components/todo";
import { useGetTodosQuery, useAddTodoMutation } from "./api/apiSlice";
import Favorite from "./components/favoriteList";

function App() {
  const { data: todos, isError, isFetching, error } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [newTodo, setNewTodo] = useState("");

  if (isFetching) return <p>Loading...</p>;
  if (isError) return <p data-testid="error"> Error: {JSON.stringify(error)}</p>;

  return (
    <div className="h-full w-full flex  gap-x-10">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl">
        <div className="mb-4">
          <h1 className="text-gray-950">Todo List</h1>
          <div className="flex mt-4">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800"
              placeholder="Add Todo"
            />
            <button
              onClick={() => {
                addTodo({
                  completed: false,
                  id: Number(todos?.length),
                  title: newTodo,
                })
                  .unwrap()
                  .then(() => setNewTodo(""));
              }}
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-slate-600"
            >
              Add
            </button>
          </div>
        </div>
        <div>
          {todos?.map((todo) => {
            return <Todo key={todo.id} test-id="test-data" todo={todo} />;
          })}
        </div>
      </div>
      <Favorite />
    </div>
  );
}

export default App;
