const PokemonType = (props) => {
  var types = [
    { type: 'fire', color: '#FB6C6B' },
    { type: 'grass', color: '#47D1AF' },
    { type: 'water', color: '#145EAB' },
    { type: 'normal', color: '#ACABAA' },
    { type: 'fighting', color: '#B64D19' },
    { type: 'flying', color: '#277BA1' },
    { type: 'poison', color: '#823EC3' },
    { type: 'ground', color: '#8A8331' },
    { type: 'rock', color: '#715C3D' },
    { type: 'bug', color: '#2F9651' },
    { type: 'ghost', color: '#83417A' },
    { type: 'steel', color: '#6C6C6C' },
    { type: 'electric', color: '#FED86D' },
    { type: 'psychic', color: '#452A8D' },
    { type: 'ice', color: '#659DBA' },
    { type: 'dragon', color: '#D57931' },
    { type: 'dark', color: '#232424' },
    { type: 'fairy', color: '#BA65A0' },
    { type: 'unknown', color: '#9A9A9A' },
    { type: 'shadow', color: '#414141' },
  ];
  var typeColor;

  for (var i = 0; i < types.length; i++) {
    if (props.type === types[i].type) {
      typeColor = types[i].color;
    }
  }

  const typeStyle = {
    color: 'white',
    backgroundColor: `${typeColor}`,
    width: 'fit-content',
    margin: '10px auto',
    padding: '5px 10px',
    borderRadius: '15px',
  };

  return <p style={typeStyle}>{props.type.toUpperCase()}</p>;
};

export default PokemonType;
