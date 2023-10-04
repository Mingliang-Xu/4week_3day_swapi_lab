
let swButton = document.querySelector('#sw-button')
let myDiv = document.getElementById('myDiv')
function clickMe (){

    console.log('button clicked')
}

swButton.addEventListener('click', (event) => {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((response) => {

        let residentsArray = response.data.results[0].residents
        for(let i = 0; i < residentsArray.length; i++){
            axios.get(residentsArray[i]).then((res)=>{
                let newElement = document.createElement('h2');
                newElement.innerHTML = res.data.name;
                myDiv.appendChild(newElement);
                console.log(res.data.name)
            }).catch((error) => {})
        }
    })
    .catch((error) => {

    })

})
