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
  uniqueTabId.tabidCallback = (tabid, wasDuplicated, isNewTab) => setText(`TabId: ${tabid}; Duplicated: ${wasDuplicated}; New Tab: ${isNewTab}`);
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
