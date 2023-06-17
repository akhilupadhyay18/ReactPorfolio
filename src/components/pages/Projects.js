import React from 'react';
import '../../App.css';

const projectsList = [
  'PROJECTS-',
'Nexus Sphere ',
'TruChain',
'Flavor Flow',
'Park Here',
'DHWANI',
'ClimaScope'

  // Add more achievements as needed
];

export default function Projects() {
  return (
    <div className='projects'>
   
      {projectsList.length > 0 ? (
        <ul>
          {projectsList.map((projects, index) => (
            <li key={index}>{projects}</li>
          ))}
        </ul>
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}
