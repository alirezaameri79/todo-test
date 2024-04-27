import FavoriteItem from "../favorite";
// import {useAppSelector} from './redux/hooks'


function Favorite() {
//   const favoriteTodoList = useAppSelector((state) => state.favorite.todoList);
const favoriteTodoList = [{
    id: 1,
    title: 'this is not Done todo',
    completed: false,
},
{
    id: 2,
    title: 'this is Done todo',
    completed: true,
}
]
  return (
    <div className="bg-white rounded shadow p-6 m-4 w-full h-fit lg:max-w-lg">
      <div className="mb-4">
        <h1 className="text-gray-950">Favorite List</h1>
      </div>
      <div>
        {favoriteTodoList?.map((item) => {
          return <FavoriteItem key={item.id} todo={item} />;
        })}
      </div>
    </div>
  );
}

export default Favorite;
