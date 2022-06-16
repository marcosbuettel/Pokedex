import PokemonStatsBar from '../PokemonStatsBar/PokemonStatsBar';
import { PokemonStatsStyled } from './PokemonStatsStyled';

export const PokemonStats = (props) => {
  const stats = [
    {
      name: 'HP',
      completed: props.pokemonStats.stats[0].base_stat,
    },
    {
      name: 'Attack',
      completed: props.pokemonStats.stats[1].base_stat,
    },
    {
      name: 'Defense',
      completed: props.pokemonStats.stats[2].base_stat,
    },
    {
      name: 'Special Attack',
      completed: props.pokemonStats.stats[3].base_stat,
    },
    {
      name: 'Special Defense',
      completed: props.pokemonStats.stats[4].base_stat,
    },
    {
      name: 'Speed',
      completed: props.pokemonStats.stats[5].base_stat,
    },
  ];
  return (
    <PokemonStatsStyled>
      {stats.map((item, id) => (
        <PokemonStatsBar key={id} name={item.name} completed={item.completed} />
      ))}
    </PokemonStatsStyled>
  );
};
