export const goHome = (navigate) => {
  navigate('/');
};

export const changePokemonPage = (page, navigate, setCurrentPage) => {
  const currentPage = page * 20;
  setCurrentPage(page);
  navigate(`/${currentPage}`);
};

export const backPage = (navigate) => {
  navigate(-1);
};

export const goToPokemonDetailPage = (navigate, id) => {
  navigate(`/pokemonDetails/${id}`);
};

export const goToPokedex = (navigate) => {
  navigate('/pokedex/pokedex');
};
