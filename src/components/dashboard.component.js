// import React, { Component } from "react";
// import { Navigate } from "react-router-dom";
// import studioService from "../services/studio.service";
// import AuthService from "../services/auth.service";
//  import Input from "react-validation/build/input";

// const required = value => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// export default class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeStudioname = this.onChangeStudioname.bind(this);
//     this.state = {
//       studioname: "",
//       loading:false,
//       message : "",
//       userReady: false,
//       currentUser: { username: "" }

//     };
//   }

//   componentDidMount() {
//     const currentUser = AuthService.getCurrentUser();

//     if (!currentUser) this.setState({ redirect: "/home" });
//     this.setState({ currentUser: currentUser, userReady: true })
//   }
//   onChangeStudioname(e) {
//     this.setState({
//       studioname: e.target.value
//     });
//   }

//   addStudio(e){
//     e.preventDefault();
//     if(this.state.studioname!=""){
//     studioService.addStudio(this.state.studioname, this.state.currentUser).then(
//       () => {
//         this.props.router.navigate("/profile");
//         //window.location.reload();

//       },
//       error => {
//         const resMessage =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         this.setState({
//           loading: false,
//           message: resMessage
//         });
//       }
//     );
//     }
//   }

//   render() {
//     if (this.state.redirect) {
//       return <Navigate to={this.state.redirect} />
//     }

//     const { currentUser } = this.state;

//     return (
//       <div>
//       <div className="form-group">
//       <label htmlFor="studioname">Username</label>
//       <Input
//         type="text"
//         className="form-control"
//         name="studioname"
//         value={this.state.studioname}
//         onChange={this.onChangeStudioname}
//         validations={[required]}
//       />
//     </div>
//         <button
//         className="btn btn-primary btn-block"
//         disabled={this.state.loading}
//         onClick={this.addStudio}
//       >
//         {this.state.loading && (
//           <span className="spinner-border spinner-border-sm"></span>
//         )}
//         <span>ADD STUDIO</span>
//       </button>
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";
import Input from "react-validation/build/input";
import { withRouter } from '../common/with-router';
import Form from "react-validation/build/form";
import studioService from "../services/studio.service";



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.addStudio = this.addStudio.bind(this);
    this.onChangeStudioname = this.onChangeStudioname.bind(this);
    this.openstudiodetails= this.openstudiodetails.bind(this)
    this.state = {
      redirect: null,
      studioname: "",
      userReady: false,
      currentUser: { username: "" },
      studios: []
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
    studioService.getStudios(currentUser).then(data => {
      console.log(data.data.studios)
      this.setState({ studios: data.data.studios })
      console.log(data)
      console.log(this.state.studios)
      setTimeout(() => {
        console.log(this.state.studios)
      }, 2000);
    })

  }
  onChangeStudioname(e) {
    this.setState({
      studioname: e.target.value
    });
  }
  addStudio(e) {
    e.preventDefault();
    if (this.state.studioname != "") {
      const response = studioService.addstudio(this.state.studioname, this.state.currentUser)
      console.log(response)

      //.then(
      //   () => {
      //    // this.props.router.navigate("/profile");
      //     //window.location.reload();
      //     console.log("done")

      //   },
      //   error => {
      //     const resMessage =
      //       (error.response &&
      //         error.response.data &&
      //         error.response.data.message) ||
      //       error.message ||
      //       error.toString();

      //     this.setState({
      //       loading: false,
      //       message: resMessage
      //     });
      //   }
      // );
    }
  }
  openstudiodetails(item){
    console.log(item)
   // console.log(e.target.value)
   const studioid= item.studioID
   this.setState({
    redirect:"/studio/"+studioid
   })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { studios } = this.state;

    return (
      // <div className="col-md-12">
      //   <div className="card card-container">


      //     <Form
      //       onSubmit={this.addStudio}
      //       ref={c => {
      //         this.form = c;
      //       }}
      //     >
      //       <div className="form-group">
      //         <label htmlFor="studioname">Studio Name</label>
      //         <Input
      //           type="text"
      //           className="form-control"
      //           name="studioname"
      //           value={this.state.studioname}
      //           onChange={this.onChangeStudioname}
      //         //validations={[required]}
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
      //           <span>ADD STUDIO</span>
      //         </button>
      //       </div>

      //       {this.state.message && (
      //         <div className="form-group">
      //           <div className="alert alert-danger" role="alert">
      //             {this.state.message}
      //           </div>
      //         </div>
      //       )}

      //     </Form>
      //   </div>

      //   <div>

      //     {studios.map((item, index) => (
      //       <div style={{cursor:"pointer"}} className="card card-container" value={item} onClick={()=>this.openstudiodetails(item)} key={index}>{item.studioname} </div>
            
      //     ))}
      //   </div>
      // </div>
      
      <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen">

          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Create Studio
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#" onSubmit={this.addStudio}>
                      <div>
                          <label for="studioname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Studio Name</label>
                          <input type="text" name="studioname" id="studioname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required=""
                          
                                          value={this.state.studioname}
                onChange={this.onChangeStudioname}
                validations={[required]}
                          />
                      </div>


                      <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Studio</button>

                  </form>
              </div>
          </div>
          <h1 class="text-xl py-15 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                      My Studios
                  </h1>
      <a href="#" class="flex p-45 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
      </div>
   

</section>
    
    
    );
  }
}

