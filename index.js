document.getElementById("btn").addEventListener("click", async (e)=>{
    e.preventDefault();
    const inputElement = document.getElementById('searchR');
    searchR = inputElement.value;
try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchR}`)
    const recipes = await response.json();
    console.log(recipes);
}catch(error){
    console.error("Error fetching recipes",error)
}});
