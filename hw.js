const form1 = document.querySelector('#test_data')

console.log(form1)

form1.addEventListener('submit', (e)=>{
    e.preventDefault();
    const first_name = e.path[0][0].value
    loadData(first_name)
});







// use async
const getPoke = async(first_name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${first_name}`)
    const data = await res.json()
    return data
};

const loadData = async(first_name) => {
    const data = await getPoke(first_name)
    const poke = [data]
    // const pokeimg = data.sprites.front_default
    console.log(poke)
    poke.map(addPoke)
};

const addPoke = async (poke) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${poke.sprites.front_default}"  alt="">
  <div class="card-body">
    <h5 class="card-title">${poke.name}</h5>
    </div>
    </div>
    
    `
    document.body.append(div)

}