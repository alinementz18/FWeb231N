

const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonWeight = document.querySelector('.pokemon_peso');
const pokemonType = document.querySelector('.pokemon_tipo');
const pokemonSound = document.querySelector('.pokemon_sound');
const backgroundAudio = document.querySelector('.background_audio')

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

// Variável global para armazenar o ID do Pokémon atual

let searchPokemon = 1;

// Ajusta o volume do áudio de fundo
backgroundAudio.volume = 0.1;

// Função assíncrona para buscar dados do Pokémon na API
const fetchPokemon = async(pokemon) => {
   
    // Faz a requisição à API do Pokémon
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    // Se a resposta for bem-sucedida, extrai os dados em JSON
    if(APIResponse.status == 200){
      
    const data = await APIResponse.json();
    console.log(data)
    return data; 

    }
}

// Função assíncrona para buscar dados alternativos (Pokémon fictício
const fetchAlternativeData = async() => {

    return {
        name: 'Doguinho',
        id: '1101',
        image: pokemonImage.src ='./icone/doguinho.jpg',
        weight: pokemonWeight.innerHTML = '100 kg',
        type: pokemonType.innerHTML = 'Dog',
        sound: pokemonSound.src = './audio/dog.mp3'
    };
}


// Função para renderizar as informações do Pokémon no DOM
const renderPokemon = async(pokemon) => {

    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = '';
    
    let data;
    
    // Busca dados alternativos se o nome do Pokémon for 'tata', caso contrário, busca na API
    if(pokemon === 'doguinho'){
        data = await fetchAlternativeData();
    }else{
        data = await fetchPokemon(pokemon);
    }
    
    // Se os dados forem obtidos com sucesso, atualiza os elementos HTML com as informações do Pokémon
    if(data){
    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id

    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;

    pokemonSound.src = data['cries']['latest'];
    pokemonSound.volume = 0.5

    pokemonWeight.innerHTML = data.weight / 10 + ' kg'; 
    pokemonType.innerHTML = data.types.map(type => type.type.name).join(', ');

    }else{
        // Se os dados não forem encontrados, exibe "Not found"
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not found';
        pokemonNumber.innerHTML = '';
    }

    
}

// Manipulador de eventos para o envio do formulário de busca
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    renderPokemon(input.value.toLowerCase());
    
});


// Manipulador de eventos para o botão "Anterior"
buttonPrev.addEventListener('click', () =>{
    if(searchPokemon > 1){
    searchPokemon -= 1
    renderPokemon(searchPokemon)
    }
});

buttonNext.addEventListener('click', () =>{
    searchPokemon += 1
    renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon);