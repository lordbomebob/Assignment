const API_URL = "https://reqres.in/api/users";

let userInfoData = [];
const userContainer = document.getElementById("user-container");
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
async function getUserInfo() {
  // JUST TO UNDERSTAND HOW IT WORKS WITH THEN CATCH BLOCK
  // fetch(API_URL).then((data) => {
  //     return data.json();
  // }).then((dataJSON) => {
  //     createCardUI();
  // }).catch((error) => {
  //     userInfoData = dataInJson.data || [];
  // })
  try {
    const data = await fetch(API_URL);
    const dataInJson = await data.json();
    userInfoData = dataInJson.data;
    generateAllCards(userInfoData)
  } catch (error) {
    console.log("There was an error", error);
    userInfoData = [];
  }
}

function createCardUI(user) {
  let cardUI = `
    <div class="card  m-4" style="width: 18rem;">
  <img src=${user.avatar} class="card-img-top" alt="...">
  <div class="card-body">
    <h1>${user.first_name} ${user.last_name}</h1>
    <p class="card-text">${user.email}</p>
  </div>
  <button class="btn btn-primary" onclick="getThisInfo(${user.id})">Get Details Of ${user.first_name}</button>
</div>
    `;

  userContainer.innerHTML += cardUI;
}

function generateAllCards(userData = []) {
    for(let i = 0 ; i < userData.length; i++) {
        createCardUI(userData[i]);
    }
}

getUserInfo();
async function getThisInfo(userId){
  const data = await fetch(API_URL);
  const dataInJson = await data.json();
  userInfoData = dataInJson.data;
  person=userInfoData[userId-1]
  //alert(`First Name: ${person.first_name}\nLast Name: ${person.last_name}\nEmail: ${person.email}`)
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${person} alert-dismissible" role="alert">`,
    `   <div><strong>First Name: ${person.first_name}  Last Name: ${person.last_name}  Email: ${person.email}</strong></div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}