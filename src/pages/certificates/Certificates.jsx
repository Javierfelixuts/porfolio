import React, { useState, useEffect } from 'react';

const CharacterAttributes = ({ totalPoints= 15 }) => {
  const [health, setHealth] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [remainingPoints, setRemainingPoints] = useState(totalPoints);

  useEffect(() => {
    setRemainingPoints(totalPoints - health - stamina - speed);
  }, [totalPoints, health, stamina, speed]);

  const handleHealthChange = (value) => {
    const maxPoints = Math.min(totalPoints * 0.7, totalPoints - stamina - speed);
    setHealth(Math.min(value, maxPoints));
  };

  const handleStaminaChange = (value) => {
    const maxPoints = Math.min(totalPoints * 0.7, totalPoints - health - speed);
    setStamina(Math.min(value, maxPoints));
  };

  const handleSpeedChange = (value) => {
    const maxPoints = Math.min(totalPoints * 0.7, totalPoints - health - stamina);
    setSpeed(Math.min(value, maxPoints));
  };

  return (
    <div>
      Character stats: <span id="points">{remainingPoints}</span> points left.
      <div>
        <input
          type="range"
          min="0"
          max={String(Math.min(totalPoints * 0.7, totalPoints - stamina - speed))}
          value={health}
          onChange={(e) => handleHealthChange(parseInt(e.target.value))}
        />
        Health
      </div>
      <div>
        <input
          type="range"
          min="0"
          max={String(Math.min(totalPoints * 0.7, totalPoints - health - speed))}
          value={stamina}
          onChange={(e) => handleStaminaChange(parseInt(e.target.value))}
        />
        Stamina
      </div>
      <div>
        <input
          type="range"
          min="0"
          max={String(Math.min(totalPoints * 0.7, totalPoints - health - stamina))}
          value={speed}
          onChange={(e) => handleSpeedChange(parseInt(e.target.value))}
        />
        Speed
      </div>
    </div>
  );
};

export default CharacterAttributes;
