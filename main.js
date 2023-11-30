const enteredWeight = document.getElementById('enteredWeight');

    var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];

    planets.reverse(planets).forEach((planet) => {
        const options = document.createElement('option'); 
        options.textContent = planet[0];
        document.getElementById('planets').appendChild(options);
    });

const enteredWeightHandler = value => /^[A-Z][a-z]+$/.test(value) ? input === '' || isNaN(input) : `Please enter a valid weight.`;

    function calculateWeight(weight, planetName) { 
        const selectedPlanet = planets.find(planet => planet[0] === planetName);
        if (selectedPlanet) {
            const newWeight = selectedPlanet[1] * weight;
            return newWeight;
        }
    }

    function handleClickEvent() {
        const planetName = document.querySelector('#planets').value;
        const newWeight = document.querySelector('#user-weight').value;
        const output = document.getElementById('output');
        if(newWeight == '' || isNaN(newWeight)){
            output.innerHTML = `Please enter a valid weight.`
        } else if(planetName === 'Sun'){
            output.innerHTML = `If you were on the ${planetName}, you would weigh ${calculateWeight(newWeight, planetName)} lbs.`;
        } else {
            output.innerHTML = `If you were on ${planetName}, you would weigh ${calculateWeight(newWeight, planetName)} lbs.`;
        }
    }
    
enteredWeight.addEventListener('input', enteredWeightHandler);