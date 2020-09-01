// Add your code here

// fetch(destinationURL, configurationObject);
function submitData(name,email){
    let formData = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(function(object){
            document.querySelector("body").append(object.id)
        })
        .catch(function(error){
            document.querySelector("body").append(error.message)
        })
} 



// also correct 

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     });
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });