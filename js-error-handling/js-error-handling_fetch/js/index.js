console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");


// Lösungsoption 1:

// async function fetchUserData(url) {
//   let contentType = "";
//        // wir initialisieren mit einem leeren String, um zu verhindern, auf eine nicht definierte Variable
//        // zugreifen zu wollen, was zu einem Fehler führen könnte
//        // code ist damit robuster
//   try {
//     const response = await fetch(url);
//     contentType = response.headers.get("content-type");
//       // console.log(contentType);    // -> hier überprüfen wir, welcher Datentyp vorliegt
    
//     if (!response.ok) {
//       throw new Error (`Failed to show user! Status Code: ${response.status}`);
//     }
//     const userData = await response.json()
//     return userData;
//     // Zeile 14 und 15 zusammengefasst: return await response.json();
//   } catch (error) {
//     // Überprüfen, ob der Fehler auf ein ungültiges JSON hinweist:
//     if (error.message.includes("Unexpected token")) {
//       return {
//           error: `Received content-type: ${contentType}. The response is not valid JSON.`,
//           contentType: contentType || "unknown" 
//       }
//     }
//     return { 
//       error: error.message
//   };
// }
// };


// Lösungsoption 2:

async function fetchUserData(url) {
  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");
      // console.log(contentType);    // -> hier überprüfen wir, welcher Datentyp vorliegt
    
    if (!response.ok) {
      throw new Error (`Failed to show user! Status Code: ${response.status}`);
    }

    if (!contentType || !contentType.includes("application/json"))
      throw new Error (`Received content-type: ${contentType}. The response is not valid JSON.`);

    const userData = await response.json()
    return userData;
    // Zeile 14 und 15 zusammengefasst: return await response.json();
  } catch (error) {
    // Überprüfen, ob der Fehler auf ein ungültiges JSON hinweist:
    if (error.message.includes("not valid JSON.")) {
      return {
          error: error.message 
      }
    }
    return { 
      error: error.message
  };
}
};





const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);

    if (result.error) {
      errorElement.textContent = result.error;
      userElement.innerHTML = "No user data available.";
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});




// This application fetches information from the https://reqres.in API, but some buttons are trying to retrieve information from problematic URLs.

// - [x] User 1 should work fine
// - [x] User 2 should work fine
// - [ ] User 99 does not exist, the response is not okay

// Handle the corresponding exception in the JavaScript code and display an error message in the `<p class="error" data-js="error"></p>` element that includes the status code. 

// > 💡 We are expecting the API response to contain a status code of 404 if the user is not found.

// ---

// **Bonus Challenge**

// With the button "Invalid API Link", we do not receive the right content-type as response, this is already written into the `<p class="error" data-js="error"></p>` element like this:

// ```code
//  Unexpected token '<', "<!DOCTYPE "... is not valid JSON
//  ```

// Can you be more specific and inform the user which content-type we received instead?

// > 💡 This is how you can get the content-type:

// ```js
// const response = await fetch(url);
// const contentType = response.headers.get("content-type");
// ```