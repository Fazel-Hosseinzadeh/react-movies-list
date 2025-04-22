
async function Movies() {
  const movies = await process.env.REACT_APP_MOVIES

try{
  // const movies = await fetch('/data.json')
  return await movies.json();

}catch(err){
  console.log(err);
}
}
export default Movies;
