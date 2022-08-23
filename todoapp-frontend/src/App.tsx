import React, { useState } from 'react';
import './App.css';
import List from './components/List/List'
import Form from './components/Form/Form'
import { ActivityItem } from './types/ActivityItem';


function App() {
  const [activitiesList, setActivitiesList] = useState<ActivityItem[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList with Typescript</h1>
      </header>
      <section>
        <div className="todoListWrapper">
          <List 
            activitiesList={activitiesList}
            setActivitiesList={setActivitiesList}/>
        </div>
        <div className="inputFormWrapper">
          <Form setActivities={setActivitiesList}/>
        </div>
      </section>
    </div>
  );
}

export default App;
