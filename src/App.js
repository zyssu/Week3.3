import logo from './logo.svg';
import './App.css';
import Post from './Post';
import pfp from './mrbeast.jpg';
import mrbeast from './mrbeast2.jfif';
import checkmark from './twitter.JPG';
import com from './com.JPG';
import share from './share.JPG';
import like from './like.JPG';
import view from './view.JPG';


function App() {
  return (
    <div className="App">
        <Post
          pfp = {pfp}
          mrbeast = {mrbeast}
          checkmark={checkmark}
          com={com}
          share={share}
          like={like}
          view={view}
          description={"We built 100 homes and gave them away for free! New video is my favorite, give it a watch ❤️"}
          info={"@MrBeast · 29 cze"}
          username={"MrBeast"}
        />
    </div>
  );
}

export default App;