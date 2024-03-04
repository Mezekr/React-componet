import { MainView } from "./components/mainView/main-view";

import "./index.scss";

const App = () => {
  return (
    <div>
      <h1 className="app"> Books App</h1>

      <MainView />
    </div>
  );
};

export default App;
