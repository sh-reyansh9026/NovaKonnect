import { Button } from "@chakra-ui/button";
import './App.css';
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact/>
      <Route path='/chats' component={ChatPage}/>
      <Button colorScheme="blue">Button</Button>
    </div>
  );
}

export default App;
