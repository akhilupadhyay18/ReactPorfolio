import React from 'react';
import '../../App.css';

const achievementsList = [
  'ACHIEVEMENTS-',
'Winner of inter-school debate competitions',
'Runner up of inter-branch basketball competition',
  // Add more achievements as needed
];

export default function Achievements() {
  return (
    <div className='achievements'>
      {/* <h1>Achievements</h1> */}
      {achievementsList.length > 0 ? (
        <ul>
          {achievementsList.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      ) : (
        <p>No achievements found.</p>
      )}
    </div>
  );
}
