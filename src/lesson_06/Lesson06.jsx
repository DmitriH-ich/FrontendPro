import React from 'react';
import {brotherhood} from './data';
import './style.css'
import { v4 } from 'uuid';

export default function Lesson06() {
    return (
        <div className='container-brotherhood'>
            <h1>Lesson 06</h1>
            {brotherhood.map((brother) => (
                <div key={brother.id}>
                    <h2>{brother.name}</h2>
                    <p>{brother.race}</p>
                    <ul>
                    {brother.skills.map((skill) => (
                    <li key={v4()}>{skill}</li>
                    ))}
                    </ul>
                    <img src={brother.image} alt="Foto"></img>
                </div>
            ))}
        </div>
    );
}



//  Вариант прописания кода с использованием компонентов для карточек


//  File: Lesson06.jsx



/* import React from 'react';

import { brotherhood } from './data';
import './style.css';
import BrotherCard from '../../components/brotherCard/BrotherCard';

export default function Lesson06() {
  return (
    <div className="container-brotherhood">
      <h1>Lesson 06</h1>
      {brotherhood.map(brother => (
        <BrotherCard key={brother.id} brotherProp={brother} />
      ))}
    </div>
  );
} */



// File: BrotherCard.jsx



/* import { v4 } from 'uuid';

export default function brotherPropCard({ brotherProp }) {
  return (
    <div>
      <h2>{brotherProp.name}</h2>
      <p>race: {brotherProp.race}</p>
      <ol>
        {brotherProp.skills.map(skill => (
          <li key={v4()}>{skill}</li>
        ))}
      </ol>
      <img src={brotherProp.image} alt="" />
    </div>
  );
} */