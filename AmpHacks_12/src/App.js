
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from 'shared/pages/home/home.jsx';
import Education from 'shared/pages/education/education.jsx';
import LessonPage from 'shared/pages/lessonPage/lessonPage.jsx';
import Chatbot from 'shared/pages/chatbot/Chatbot.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/education" component={Education} exact /> 
          <Route path="/chatbot" component={Chatbot} exact />
          <Route exact path="/education/:lessonID" render={(props) => <LessonPage {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;