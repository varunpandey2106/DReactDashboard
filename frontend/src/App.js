import { BrowserRouter as Router } from "react-router-dom";
import { Space } from "antd";
import "./App.css";
import AppFooter from "./components/AppFooter/index.js";
import AppHeader from "./components/AppHeader/index.js";
import PageContent from "./components/PageContent/index.js";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <div className="SideMenuAndPageContent">
          <SideMenu />
          <PageContent></PageContent>
        </div>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;