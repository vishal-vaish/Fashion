let baseUrl = "https://fakestoreapi.com";

const fetchFromApi = async (path) => {
  const res = await fetch(`${baseUrl}/${path}`);
  const data = await res.json();
  return data;
}

export default fetchFromApi;