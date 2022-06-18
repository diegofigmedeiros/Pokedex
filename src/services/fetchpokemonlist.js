export const fetchAPI = async () => {
  try {
    return fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((json) => {
      setList(json.results);
    });
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}