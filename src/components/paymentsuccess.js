
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate,useSearchParams } from "react-router-dom";

import AuthService from "../services/auth.service";
import Input from "react-validation/build/input";
import { withRouter } from '../common/with-router';
import Form from "react-validation/build/form";
import studioService from "../services/studio.service";




export default class PaymentSuccess extends Component {
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
    const searchParams = new URLSearchParams(document.location.search)
    const stripeSessionID = searchParams.get('session_id')
    const studioID = searchParams.get("studioID")
    console.log(stripeSessionID,studioID);
    studioService.getPaymentStatus(stripeSessionID,studioID,currentUser).then(data=>{
        console.log(data)
        if(data.data.message=="payment done"){
            this.setState({
                redirect:"/studio/"+studioID
               })
        }
    })
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get('page')); // 10



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
      <div className="col-md-12">
        <div className="card card-container">


          <Form
            onSubmit={this.addStudio}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="studioname">Studio Name</label>
              <Input
                type="text"
                className="form-control"
                name="studioname"
                value={this.state.studioname}
                onChange={this.onChangeStudioname}
              //validations={[required]}
              />
            </div>


            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>ADD STUDIO</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}

          </Form>
        </div>

        <div>

          {studios.map((item, index) => (
            <div style={{cursor:"pointer"}} className="card card-container" value={item} onClick={()=>this.openstudiodetails(item)} key={index}>{item.studioname} </div>
            
          ))}
        </div>
      </div>
    );
  }
}

