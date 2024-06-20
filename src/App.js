import React, { useState, useEffect } from 'react';
import './App.css';

function AimTrainer() {
    const [targets, setTargets] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const newTarget = {
                id: Date.now(),
                x: Math.random() * 550,  // Adjusted for new game size
                y: Math.random() * 350   // Adjusted for new game size
            };
            setTargets((prevTargets) => [...prevTargets, newTarget]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleClick = (id) => {
        setTargets((prevTargets) => prevTargets.filter(target => target.id !== id));
        setScore((prevScore) => prevScore + 1);
    };

    return (
        <div>
            <h1>Aim Trainer</h1>
            <p>Score: {score}</p>
            <div id="game">
                {targets.map(target => (
                    <div
                        key={target.id}
                        className="target"
                        style={{ left: `${target.x}px`, top: `${target.y}px` }}
                        onClick={() => handleClick(target.id)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default AimTrainer;
