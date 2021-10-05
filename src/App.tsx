import { Modal } from './global-components/modal/Modal';
import './style/style.css';

function App() {
  return (
    <div className="app">
      <div className="app__head_panel"></div>
      <div className="app__left_patel"></div>
      <div className="app__dashboard">
      <Modal
        header='Authorization'
        contentMode='authorization'/>
      </div>
      <div className="app__footer"></div>
    </div>
  );
}

export default App;
