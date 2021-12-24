
import './App.css';
import LikeDetail from './Components/LikeDetail/LikeDetail';
import PostDetail from './Components/PostDetail/PostDetail';
import Segment from './Components/Segment/Segment';
import Geolocation from './Components/Geolocation/Geolocation';
import UserEvents from './Components/UserEvents/UserEvents';
import FormSubmission from './Components/FormSubmission/FormSubmission';

import segment_aray from './json_dumps/segment_data';

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
      <LikeDetail key={data.id}>
        <PostDetail post_detail={data} />
      </LikeDetail>
    );
  });

  const display_segments = segment_aray.map((segment) => <Segment key={segment.id} segment={segment}/>);

  return (
    <>
      <h1>Hello {date}</h1>
      <p>Time : {time}</p>

      {datas}

      {display_segments}
      <Geolocation />

      <UserEvents />
      <FormSubmission />
    </>
  );
}

export default App;
