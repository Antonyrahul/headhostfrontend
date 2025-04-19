import React, { Component } from "react";
import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Flex } from "@chakra-ui/react";
import AuthService from "../services/auth.service";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { withRouter } from '../common/with-router';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    //this.form.validateAll();

    if (this.state.username && this.state.password) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.router.navigate("/profile");
          //window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      // <div className="col-md-12">
      //   <div className="card card-container">
      //     <img
      //       src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
      //       alt="profile-img"
      //       className="profile-img-card"
      //     />

      //     <Form
      //       onSubmit={this.handleLogin}
      //       ref={c => {
      //         this.form = c;
      //       }}
      //     >
      //       <div className="form-group">
      //         <label htmlFor="username">Username</label>
      //         <Input
      //           type="text"
      //           className="form-control"
      //           name="username"
      //           value={this.state.username}
      //           onChange={this.onChangeUsername}
      //           validations={[required]}
      //         />
      //       </div>

      //       <div className="form-group">
      //         <label htmlFor="password">Password</label>
      //         <Input
      //           type="password"
      //           className="form-control"
      //           name="password"
      //           value={this.state.password}
      //           onChange={this.onChangePassword}
      //           validations={[required]}
      //         />
      //       </div>

      //       <div className="form-group">
      //         <button
      //           className="btn btn-primary btn-block"
      //           disabled={this.state.loading}
      //         >
      //           {this.state.loading && (
      //             <span className="spinner-border spinner-border-sm"></span>
      //           )}
      //           <span>Login</span>
      //         </button>
      //       </div>

      //       {this.state.message && (
      //         <div className="form-group">
      //           <div className="alert alert-danger" role="alert">
      //             {this.state.message}
      //           </div>
      //         </div>
      //       )}
      //       <CheckButton
      //         style={{ display: "none" }}
      //         ref={c => {
      //           this.checkBtn = c;
      //         }}
      //       />
      //     </Form>
      //   </div>
      // </div>
    //   <section class="bg-gray-50 dark:bg-gray-900">
    //   <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //       <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              
    //           HEADSHOT    
    //       </a>
    //       <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    //               <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //                   Sign in to your account
    //               </h1>
    //               <form class="space-y-4 md:space-y-6" action="#" onSubmit={this.handleLogin}>
    //                   <div>
    //                       <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
    //                       <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required=""
                          
    //                                       value={this.state.username}
    //             onChange={this.onChangeUsername}
    //             validations={[required]}
    //                       />
    //                   </div>
    //                   <div>
    //                       <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    //                       <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
    //                                       value={this.state.password}
    //             onChange={this.onChangePassword}
    //             validations={[required]}
                          
                          
    //                       />
    //                   </div>
    //                   {/* <div class="flex items-center justify-between">
    //                       <div class="flex items-start">
    //                           <div class="flex items-center h-5">
    //                             <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
    //                           </div>
    //                           <div class="ml-3 text-sm">
    //                             <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
    //                           </div>
    //                       </div>
    //                       <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
    //                   </div> */}
    //                   <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
    //                   <p class="text-sm font-light text-gray-500 dark:text-gray-400">
    //                       Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
    //                   </p>
    //               </form>
    //           </div>
    //       </div>
    //   </div>
    // </section>
    <Flex flex="1" align="center" justify="center">
        <Stack spacing={4} width="100%" mx="auto" maxW="md" py={12} px={6}>
      <Stack textAlign="center" align="center" spacing={0}>
        <Text fontWeight="extrabold" as="h2" fontSize="4xl">
          Sign in to Headshot.
        </Text>
        <Text fontSize="lg">Use your email address to sign in</Text>
      </Stack>
      <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
        <Stack
          as="form"
          onSubmit={this.handleLogin}
          spacing={4}
        >
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
              placeholder="username"
              type="string"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              required
              value={this.state.password}
              onChange={this.onChangePassword}
              placeholder="**********"
              type="password"
            />
          </FormControl>
          <Stack spacing={10}>
            <Button
              // isLoading={isLoading}
              // rightIcon={<FaPaperPlane />}
              type="submit"
              variant="brand"
            >
              Sign In
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
    );
  }
}

export default withRouter(Login);