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
import AuthService from "../services/auth.service";
import Input from "react-validation/build/input";
import { withRouter } from '../common/with-router';
import Form from "react-validation/build/form";
import studioService from "../services/studio.service";
import AWS from 'aws-sdk';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import CheckoutForm from "./checkoutForm";
import axios from "axios";
import { Helmet } from 'react-helmet';






AWS.config.update({
    accessKeyId: 'AKIAUQY3TJRDL6AL4RNP',
    secretAccessKey: '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',
    region: 'ap-south-1'
  });


  const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');

export default class Studio extends Component {
  constructor(props) {
    super(props);

   // this.addStudio = this.addStudio.bind(this);
   // this.onChangeStudioname = this.onChangeStudioname.bind(this);
  //  this.openstudiodetails= this.openstudiodetails.bind(this)
  
  this.starttraining=this.starttraining.bind(this)
    this.state = {
      redirect: null,
      studioname: "",
      userReady: false,
      currentUser: { username: "" },
      studios: [],
      selectedFiles: [],
      uploadProgress: [],
      uploadStatus: '',
      selectedFile:null,
      isFileUploaded:false,
      trainingStatus:"",
      isPaymentDone:false
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
    studioService.getStudios(currentUser).then(data => {
      const studioid = window.location.pathname.split("/")[2]
      console.log(studioid)
      console.log(data.data.studios)
     var thisStudio= data.data.studios.filter((item)=>{
        return item.studioID==studioid
      })
      console.log(thisStudio)
      if(thisStudio[0].paymentstatus=="paid")
      {
        this.setState({isPaymentDone:true})
      }
      this.setState({ studios: data.data.studios })
      console.log(data)
      console.log(this.state.studios)

      
      setTimeout(() => {
        console.log(this.state.studios)
      }, 2000);
    })

  }
//   onChangeStudioname(e) {
//     this.setState({
//       studioname: e.target.value
//     });
//   }
//   addStudio(e) {
//     e.preventDefault();
//     if (this.state.studioname != "") {
//       const response = studioService.addstudio(this.state.studioname, this.state.currentUser)
//       console.log(response)


//     }
//   }
//   openstudiodetails(item){
//     console.log(item)
//    // console.log(e.target.value)
//   }

handleFileSelect = (event) => {
    // const files = event.target.files;
    // const selectedFiles = [];

    // for (let i = 0; i < files.length; i++) {
    //   selectedFiles.push(files[i]);
    // }

     this.setState({ selectedFile:event.target.files[0] });
    //setSelectedFile(event.target.files[0]);

  };
handleUpload = (e) => {
    const { selectedFiles } = this.state;
    // const uploadProgress = new Array(selectedFiles.length).fill(0);

    // // Simulate file upload
    // selectedFiles.forEach((file, index) => {
    //   setTimeout(() => {
    //     // Update upload progress
    //     const newProgress = [...uploadProgress];
    //     newProgress[index] = 100;
    //     this.setState({ uploadProgress: newProgress });

    //     // Perform upload logic here
    //     // Replace the following code with your actual upload logic

    //     console.log(`Uploading file ${file.name}...`);
    //   }, (index + 1) * 1000); // Simulate delay
    // });

    // this.setState({ uploadStatus: 'Uploading...' });
    e.preventDefault();
   // console.log(e)
    //const files = e.target.files;

    // Create a new FormData object
    // const formData = new FormData();

    // Append each selected file to the FormData object
    // for (let i = 0; i < selectedFiles.length; i++) {
    //   formData.append('images', selectedFiles[i]);
    // }
    // console.log(formData)
    const s3 = new AWS.S3();
    const params = {
      Bucket: 'headshotut1',
      Key: this.state.selectedFile.name,
      Body: this.state.selectedFile,
      ACL: 'public-read'
    };

    s3.upload(params, (err, data) =>  {
      if (err) {
        console.error('Error uploading file:', err);
      } else {
        console.log('File uploaded successfully:', data.Location);
        // Handle the response, if needed
       const studioid = window.location.pathname.split("/")[2]
        console.log(studioid)
        const response = studioService.updateUploadFileLocation(this.state.currentUser,studioid,data.Location)
        console.log(response)
        this.setState({isFileUploaded:true})

      }
    });

  
  };
  starttraining(e){
    e.preventDefault();
    this.setState({trainingStatus:"IN PROGRESS"})
    const studioid = window.location.pathname.split("/")[2]
    const response = studioService.startTraining(this.state.currentUser,studioid)
    console.log(response)
}
// handleSubmit = async (event) => {
//   event.preventDefault();
//   const {stripe, elements} = this.props;

//   if (elements == null) {
//     return;
//   }

//   const {error, paymentMethod} = await stripe.createPaymentMethod({
//     type: 'card',
//     card: elements.getElement(CardElement),
//   });
// };
handleCheckout = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/createcheckoutsession',{currentUser:this.state.currentUser,studioID:window.location.pathname.split("/")[2]});
    const sessionId = response.data.id;
    const stripe = window.Stripe('pk_test_51He0yQHWswhGwF5xMLEsVCG7duIHF0e3sCmJTocVgj59pQ2BhXEMRLnn1p0BmF6GLPDYAFSH5NnwOAt1AVbNGFWE00r5nXI8fe');
    await stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.error('Error:', error);
  }
};

  render() {
    // if (this.state.redirect) {
    //   return <Navigate to={this.state.redirect} />
    // }

   // const { studios } = this.state;
   const {stripe} = this.props;

    const { selectedFiles, uploadProgress, uploadStatus ,isFileUploaded,trainingStatus,isPaymentDone} = this.state;

    return (
       
        <div>
                  <Helmet>
          <script src="https://js.stripe.com/v3/"></script>
        </Helmet>{!isPaymentDone?
        <button onClick={this.handleCheckout}>Checkout</button>:<div></div>
  }
        <input type="file"  onChange={this.handleFileSelect} />
        <button onClick={this.handleUpload}>Upload</button>

        {uploadStatus && <div>{uploadStatus}</div>}

        {selectedFiles.length > 0 && (
          <div>
            <h2>Selected Files:</h2>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}

        {uploadProgress.length > 0 && (
          <div>
            <h2>Upload Progress:</h2>
            <ul>
              {uploadProgress.map((progress, index) => (
                <li key={index}>{progress}%</li>
              ))}
            </ul>
          </div>
        )}
        {isFileUploaded?
        <div>
            <button onClick={this.starttraining}>train</button>
        </div>:<div></div>

        
  }
<div>{trainingStatus}</div>
  
      </div>
      
    );
  }
}

