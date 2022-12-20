

const Character = ({character}) => {
    const { characterName, characterClass } = character;
    return (
        <div>
            <h2>{characterName}</h2>
            <h3>{characterClass}</h3>
        </div>
    )
};

export default Character;