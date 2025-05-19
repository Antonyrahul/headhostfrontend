import React, { Component } from "react";

import UserService from "../services/user.service";
import "../App.css"

export default class Waitlistform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (

<div class="flex flex-col items-center justify-center w-screen h-screen bg-[#F1F1F1] text-gray-700 mainclass">

<h1 class="font-bold text-2xl">Join Our Waitlist</h1>
<form class="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
    <label class="font-semibold text-xs" for="nameField">NAME</label>
    <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
    <label class="font-semibold text-xs mt-3" for="emailField">EMAIL</label>
    <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="email" />
    <button class="flex items-center justify-center h-12 px-6 w-64 bg-black mt-8 rounded font-semibold text-sm text-white hover:bg-[#F2D972] hover:text-black ">JOIN</button>

</form>


</div>
    );
  }
}
