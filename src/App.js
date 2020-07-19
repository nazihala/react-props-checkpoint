import React from 'react';
import Profile from './profile/Profile.js';
import HandleClick from './profile/Profile.js';



function App() {
  return (
    <Profile fullName="Naziha" bio="Je m'appelle Naziha LAHRACH, je suis née le 19 juin 1990
     à Gabès, je suis passionnée par le développement web." 
    profession="web developer" src="./photo.jpg" width="250px" alt="iamge" 
    HandleClick={HandleClick}/>

   
  );
}

export default App;
