import {ITodo} from '../../types/types' 


export default function Favorite({ todo } : {todo:ITodo}) {
  const { id, title, completed } = todo;

  return (
    <div className="w-full flex mb-4 items-center justify-between">
      {completed ? (
        <p className="w-full text-gray-950 line-through">{title}</p>
      ) : (
        <p className="w-full text-gray-950">{title}</p>
      )}
      <div className="w-full flex items-center gap-x-5 justify-end">
        <button
        //   onClick={() => dispatch(removeFavorite(id))}
          className="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
