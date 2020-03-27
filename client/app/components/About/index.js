import React, { useState, useEffect, useMemo } from 'react';

import Draggable from '../Draggable';
import badgesData from './badges.json';

const getRandom = () => {
  return Math.floor(Math.random() * 100);
};

const About = () => {
  const [badges] = useState(badgesData);

  useEffect(() => {
    document.body.classList.add('about');
  }, []);

  const random = useMemo(() => getRandom(), []);

  return (
    <div className="relative bg-gray-800 border rounded-lg min-h-300 h-screen overflow-auto">
      {badges &&
        badges.map((badge, index) => {
          return (
            <Draggable
              key={index}
              position={{
                x: 30 + index * random,
                y: 30 + index * random,
              }}
              radius={20}
            >
              <span className="bg-teal-200 text-teal-800 text-xs px-4 mx-2 rounded-full select-none shadow-outline uppercase font-semibold tracking-wide">
                {badge.title}
              </span>
            </Draggable>
          );
        })}
    </div>
  );
};

export default About;
