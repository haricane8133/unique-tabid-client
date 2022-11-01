import {useEffect, useState} from "react";
import uniqid from "uniqid";
import UniqueTabId from "unique-tabid";
import logo from './logo.svg';
import './App.css';

const uniqueTabId = new UniqueTabId("testapp");
uniqueTabId.WAIT_TIMEOUT = 2000;
uniqueTabId.uniqIdFunc = uniqid;

function App() {
  const [text, setText] = useState("");
  uniqueTabId.tabIdCallback = ({tabId, isTabNew, parentTabId}) => setText(`TabId: ${tabId}; New Tab: ${isTabNew}; Duplicated: ${parentTabId !== null ? `Yes, parentTabId = ${parentTabId}` : "No"}`);
  useEffect(() => uniqueTabId.initTab(), []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
