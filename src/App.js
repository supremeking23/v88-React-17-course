
import './App.css';
import LikeDetail from './Components/LikeDetail/LikeDetail';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const array_data = [
    {
      id: 1,
      name: "Ivan Christian Jay Funcion"
    },
    {
      id: 2,
      name: "Mavis Vermillion"
    },
    {
      id: 3,
      name: "Sarah Vermillion"
    },
    {
      id: 4,
      name: "Rury Ishigami"
    },
    {
      id: 5,
      name: "Kikyo Shimihu"
    },
  ];

  const datas = array_data.map((data) => {
    return(
      <LikeDetail key={data.id} >
        <PostDetail post_detail={data} />
      </LikeDetail>
    );
  });

  return (
    <>
      <h1>Hello {date}</h1>
      <p>Time : {time}</p>

      {datas}
    </>
  );
}

export default App;
