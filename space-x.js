console.log('this works!');
let container = document.querySelector('.container');

console.log(container);

// fetch('https://api.spacexdata.com/v3/capsules/upcoming')
// .then(function(response)) {

// }

//ES6 versions
fetch('https://api.spacexdata.com/v3/capsules/upcoming')
.then(response => {
    // console.log(response);
    return response.json();
})
.then(data => {
    // console.log(data);
    // let firstElement = data[0];
    // console.log(firstElement);
    // let capsuleID = firstElement.capsule_id;
    // console.log(capsuleID);
    // let details = firstElement.details;
    // console.log(details);
    // let landings = firstElement.landings;
    // console.log(landings);

    for(let i = 0; i < data.length; i++) {
        let eachCapsule = data[i];
        // console.log(eachCapsule);
        let obj = {
            capsuleID: eachCapsule.capsule_id,
            details: eachCapsule.details,
            landings: eachCapsule.landings
        }
        console.log(obj);

        let capsuleElement = document.createElement('p');
        capsuleElement.textContent = obj.capsuleID;

        container.appendChild(capsuleElement);
    }
})

