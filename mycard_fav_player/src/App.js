import React from 'react';
import MyCard from './MyCard'; // Import child component
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Favourite Player</h1>

      <MyCard
        name="Virat Kohli"
        image="https://im.rediff.com/cricket/2022/sep/08vk.gif"
        description="Virat Kohli is an Indian international cricketer and former captain of the Indian national team. He is considered one of the best batsmen in the world."
      />
      {/* <MyCard
        name="MS Dhoni"
        image="https://www.crictracker.com/wp-content/uploads/2020/05/MS-Dhoni-1.jpg"
        description="Mahendra Singh Dhoni, commonly known as MS Dhoni, is a former Indian international cricketer and captain of the Indian national team. He is regarded as one of the greatest wicket-keeper batsmen and captains in the history of cricket."
      /> */}
    </div>
  );
}

export default App;
