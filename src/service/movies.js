async function Movies() {

try{
  const movies = await fetch('/data.json')
  return await movies.json();

}catch(err){
  console.log(err);
}
}
export default Movies;
