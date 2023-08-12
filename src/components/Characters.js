
export default function Characters(props) {
  const { characters, setCharacters } = props;
  const resetCharacters = () => {

    // Lo establecemos a null para que muestre la home principal
    setCharacters(null);
  }

  //console.log(characters);
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          // hacemos un return implicito, por eso va entre los parentesis
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name}></img>
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p className="text-grey">
                <span>Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p className="text-grey">
                <span>Especies: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
    </div>
  );
}
