export default class Board {
  constructor() {
    this.id = null;
    this.flag = true;
  }
  async setId(id) {
    let tokenId = id.result.substring(id.result.indexOf(':'));
    tokenId = tokenId.substring(tokenId.lastIndexOf(':') + 1, tokenId.lastIndexOf(' '));
    this.id = tokenId;
  }

  getId() {
    return this.id;
  }

   createGame=async (name) => {
     const gameName = { name };
     const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
     const response = await this.fetchApi(url, 'POST', gameName);
     if (this.flag === false) {
       document.getElementById('errorDiv').textContent = 'Bad Request, Please Try Again!!!';
       setTimeout(() => {
         document.getElementById('errorDiv').innerHTML = '';
       }, 3500);
     } else { this.setId(response); }
   }
}
