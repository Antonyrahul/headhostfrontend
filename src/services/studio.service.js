import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class StudioService {
  addstudio(studioname,userdetails) {
    return axios
      .post(API_URL + "addstudio", {
        studioname,
        userdetails
      })
      .then(response => {
        console.log(response)
        // if (response.data.accessToken) {
        //   localStorage.setItem("user", JSON.stringify(response.data));
        // }

        return response.data;
      });

    // console.log(userdetails)
    // return userdetails
  }

  getStudios(userdetails){
    return axios
    .post(API_URL + "getstudios", {
      
      userdetails
    })
    .then(response => {
      console.log(response)


      return response.data;
    });
  }

  uploadimages(userdetails,studioID,files){
    return axios
    .post(API_URL + "uploadimages", {
      
      userdetails,
      studioID,
      files
    })
    .then(response => {
      console.log(response)


      return response.data;
    });
  }
  updateUploadFileLocation(userdetails,studioID,filelocation){
    return axios
    .post(API_URL + "updateuploadfilelocation", {
      
      userdetails,
      studioID,
      filelocation
    })
    .then(response => {
      console.log(response)


      return response.data;
    });
  }

  startTraining(userdetails,studioID){
    return axios
    .post(API_URL + "starttraining", {
      
      userdetails,
      studioID
      
    })
    .then(response => {
      console.log(response)


      return response.data;
    });
  }
  getPaymentStatus(paymentID,studioID,currentUser){
    return axios.post(API_URL + "checkpaymentstatus", {
      paymentID,
      studioID,
      currentUser
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new StudioService();