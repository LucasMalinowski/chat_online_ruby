import './App.css';
import Chat from './Chat';
import SideBar from './SideBar';

function App() {
  return (
    <div  style={{height: '100vh'}}>
      <div className='container'>
        <SideBar />
        <Chat />
      </div>
    </div>
  )
}

export default App;
