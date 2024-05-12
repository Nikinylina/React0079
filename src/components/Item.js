import React, { useState } from 'react';

const Item = () => {
    const [riddles, setRiddles] = useState([
        {
            id: 1,
            description: 'Сколько мне лет',
            options: ['10', '19', '22', '67'],
            correct: 2
        },
        {
            id: 2,
            description: 'Сколько раз я могу отжаться от пола?',
            options: ['2', '10', '20', '100'],
            correct: 2
        },
       
    ]);

    const [newRiddle, setNewRiddle] = useState({
        id: '',
        description: '',
        options: ['', '', '', ''],
        correct: ''
    });

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedRiddle = { ...newRiddle };
        if (name === 'options') {
            updatedRiddle[name][index] = value;
        } else {
            updatedRiddle[name] = value;
        }
        setNewRiddle(updatedRiddle);
    };

    const addRiddle = () => {
        setRiddles([...riddles, { ...newRiddle, id: riddles.length + 1 }]);
        setNewRiddle({
            id: '',
            description: '',
            options: ['', '', '', ''],
            correct: ''
        });
    };

    return (
        <div className="riddles-container">
            <h2>Мои загадки</h2>
            <ul className="riddles-list">
                {riddles.map(riddle => (
                    <li key={riddle.id}>
                        <p>{riddle.description}</p>
                        <ul>
                            {riddle.options.map((option, index) => (
                                <li key={index}>
                                    <button>{option}</button>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <div className="new-riddle-form">
                <h3>Добавить новую загадку</h3>
                <input
                    type="text"
                    placeholder="Описание"
                    name="description"
                    value={newRiddle.description}
                    onChange={e => handleInputChange(e)}
                />
                {newRiddle.options.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Вариант ${index + 1}`}
                        name="options"
                        value={option}
                        onChange={e => handleInputChange(e, index)}
                    />
                ))}
                <input
                    type="text"
                    placeholder="Номер правильного ответа"
                    name="correct"
                    value={newRiddle.correct}
                    onChange={e => handleInputChange(e)}
                />
                <button onClick={addRiddle}>Добавить</button>
            </div>
        </div>
    );
};

export default Item;