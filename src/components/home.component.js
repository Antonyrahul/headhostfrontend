import  React, {useState, Component } from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

import UserService from "../services/user.service";
import "../App.css"

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      faq1:false
    };
  }
 



  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js";
    script.async = true;

    document.body.appendChild(script);
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

   handleFaqClicks = (e,eId) => {
    e.preventDefault();
    console.log("in",eId)
    if(document.getElementById("path"+eId).style.visibility=="hidden")
    {
      document.getElementById("path"+eId).style.visibility="visible"
    }
    else{
      document.getElementById("path"+eId).style.visibility="hidden"
    }
   
    let selector = document.getElementById("faq"+eId).style.maxHeight
    if(selector=="0px")
    {
      document.getElementById("faq"+eId).style.maxHeight="300px"
    }
    else{
      document.getElementById("faq"+eId).style.maxHeight="0px"
    }
  }

  

  render() {
    return (
      // <div>
      //       <div className="homemaindiv" >

      //           <h3 className="aimtoolsp">AI magic tools</h3>
      //           <div className="thebigdiv">
      //           <h1 className="ttom topttom">Text to Image</h1>
      //           <h1 className="ttom bottomttom">Generation</h1>
      //           </div>
      //           <div className="txtandimg">

      //           <div className="leftfloatdiv">
      //           <h3>Easily create an image from scratch with our AI image generator by entering</h3>

      //           <h3> descriptive text.</h3>
      //           </div>
      //           <div className="rightfloatdiv">
      //           <video width="600" height="440" autoPlay loop muted>
      //   <source src="https://d3phaj0sisr2ct.cloudfront.net/site/magic-tools/text-to-image.mp4" type="video/mp4" />

      //   Your browser does not support the video tag.
      // </video>
      //           </div>
      //           </div>

      //       </div>
      //   <div id="layout">
      //     <div id="nav-overlay" class="fixed w-full h-full top-0 bg-black bg-opacity-10 z-20 transition-opacity duration-300 hidden backdrop-blur-sm pointer-events-none"></div>
      //     <header id="rw-header" class="w-full z-50 fixed top-0 transition-all duration-300 z-[999] border-transparent border-[#E5E5E5] delay-300 bg-transparent text-black"><div class="rw-container"><div class="flex justify-between py-4 md:py-0 items-center"><div class="flex items-center w-40 lg:w-52"><a aria-label="TryHeadshot Homepage" href="/">
      //     <div style={{height:"23px"}}>
      //     <svg class="h-full w-auto" viewBox="0 0 139 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.7476 6.12349H41.5723L41.9307 8.11308C42.6791 6.53864 44.2901 5.76709 45.9917 5.76709C46.8268 5.76709 47.6658 5.97466 48.233 6.21357L47.3349 10.8155C46.7362 10.4591 45.9917 10.2202 45.0937 10.2202C43.5417 10.2202 42.2852 11.262 42.2852 13.5766V20.971H37.7476V6.12349Z" class="fill-current"></path><path d="M49.8058 15.4422V6.0293H54.4106V14.5807C54.4106 16.3036 55.409 17.2237 56.8628 17.2237C58.3484 17.2237 59.6185 16.096 59.6185 13.6019V6.0293H64.2233V20.8769H60.3773L59.8621 18.9191C59.1352 20.1055 57.3181 21.2332 55.0776 21.2332C52.0742 21.2332 49.8058 19.3302 49.8058 15.4422Z" class="fill-current"></path><path d="M66.5865 6.1234H70.3857L70.8946 8.08115C71.6126 6.89475 73.3761 5.76709 75.5933 5.76709C78.5246 5.76709 80.7379 7.6387 80.7379 11.5268V20.971H76.1891V12.4783C76.1891 10.728 75.2896 9.77656 73.7943 9.77656C72.4175 9.77656 71.1313 10.9042 71.1313 13.4571V20.971H66.5825V6.1234H66.5865Z" class="fill-current">
      //     </path><path d="M81.7864 6.0293H86.3361L89.0239 16.1599L91.4156 9.49679L90.2353 6.0293H94.7539L97.6793 16.1599L100.277 6.0293H104.854L100.009 20.971H95.3421L93.336 15.0251L91.2676 20.971H86.6283L81.7864 6.0293Z" class="fill-current"></path><path d="M105.117 13.5001C105.117 8.39406 108.801 5.76709 112.192 5.76709C114.274 5.76709 115.76 6.59215 116.501 7.44835L116.916 6.12124H121.107V20.879H117.124L116.501 19.4351C115.877 20.1706 114.541 21.2331 111.981 21.2331C108.327 21.2331 105.117 18.2209 105.117 13.5001ZM116.681 13.5001C116.681 11.1105 115.136 9.63554 113.172 9.63554C111.181 9.63554 109.664 11.1417 109.664 13.5001C109.664 15.8585 111.181 17.3686 113.172 17.3686C115.136 17.3647 116.681 15.8897 116.681 13.5001Z" class="fill-current"></path><path d="M125.867 27.0002L128.387 20.2008L122.417 6.0293H127.307L130.638 15.286L133.637 6.0293H138.408L130.519 27.0002H125.867Z" class="fill-current"></path><path d="M20.6987 26.9835C17.4276 27.2826 14.6925 23.4493 12.5958 21.5051C11.5356 29.1441 -0.00787819 28.42 4.03477e-06 20.6708C0.00394515 17.4161 4.03477e-06 9.46227 4.03477e-06 6.30987C4.03477e-06 5.17642 0.311352 4.03511 0.894637 3.06695C2.00209 1.18968 4.14212 -0.0224774 6.32155 0.0011361C9.6045 0.00507168 17.5104 -0.00279948 20.6987 0.0011361C28.4549 0.0011361 29.1918 11.5403 21.5264 12.5792L25.164 16.2118C29.1603 19.9703 26.1611 27.1488 20.6987 26.9835ZM18.9371 22.4379C21.1914 24.7599 24.7896 21.1627 22.4683 18.9116L16.1625 12.6147H12.6352C12.6352 12.9571 12.6352 15.893 12.6352 16.1409L18.0858 21.5839L18.9371 22.4379ZM3.81894 20.6747C3.76771 23.9019 8.86357 23.9137 8.81234 20.6747V6.30987C8.85569 4.70022 7.15313 3.42115 5.61609 3.91704C5.54909 3.93672 5.48604 3.95639 5.42692 3.98001C4.46135 4.33814 3.79136 5.32597 3.81894 6.3571C3.81894 6.3571 3.81894 20.6747 3.81894 20.6747ZM20.6987 8.80109C23.9383 8.85225 23.9344 3.76355 20.6987 3.81471H12.1347C12.785 5.18429 12.6195 7.31738 12.6313 8.80109C13.0963 8.80109 20.4702 8.80109 20.6987 8.80109Z" class="fill-current"></path></svg>
      //     </div></a></div><nav class="hidden md:block"><ul class="flex"><li class="flex justify-center h-full py-4 hover:bg-[#F1F1F1]"><a class="cursor-pointer py-2 px-2 xl:py-2 xl:px-4 flex items-center text-sm lg:text-base" href="https://research.tryheadshot.pro/">Research<svg class="flex-none ml-1 transition-transform duration-300 rotate-0" width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.71429L8.47937 7.21429L4.83472 10.6429L4.83472 -1.8207e-07L4.09092 -2.14583e-07L4.09092 10.6429L0.520627 7.21429L6.16472e-07 7.71429L4.46282 12L9 7.71429Z" class="fill-current"></path></svg></a><div class="absolute z-50 top-0 mt-[65px] xl:mt-[73px] w-screen left-0 transition-all duration-500 overflow-hidden ease-[cubic-bezier(1,0,0,1)] will-change-auto bg-[#F1F1F1] text-black" style={{height: "0px"}}><div><div class="relative"><div class="
      //     absolute 
      //     z-[-1] 
      //     rounded-[50%] 
      //     blur-[230px] 
      //     transform-gpu
      //     translate-x-0 w-[30%] h-[60%] bg-[#008FFF] top-[-10%] left-[-5%]"></div><div class="
      //     absolute 
      //     z-[-1] 
      //     rounded-[50%] 
      //     blur-[230px] 
      //     transform-gpu
      //     -rotate-45
      //     translate-x-0 w-[30%] h-[60%] bg-[#F059B4] bottom-[-20%] right-[-5%]">
      //     </div>
      //     <div class="rw-container"><div class="flex w-15/16 mx-auto">
      //     <div class="w-5/12 pr-[4%] flex-col pt-10 pb-14 hidden lg:flex">
      //     <div class="font-medium text-[17px] text-gray-600 mb-8">Latest Update</div>
      //     <a target="_blank" href="https://research.tryheadshot.pro/gen2">
      //     <div class="relative overflow-hidden rounded-lg mb-4" style={{paddingTop:"56.25%"}}>
      //     <video class="absolute top-0 left-0 w-full h-full object-cover" poster="https://d3phaj0sisr2ct.cloudfront.net/site/videos/poster-gen2-website-landing-720.png" src="https://d3phaj0sisr2ct.cloudfront.net/site/videos/gen2-website-landing-720.mp4" autoplay="" loop="" muted="" playsinline=""></video>
      //     </div>
      //     <div>
      //     <div class="text-base font-medium text-black">Gen-2: The Next Step Forward for Generative AI</div>
      //     <div class="text-base text-gray-600">A multi-modal AI system that can generate novel videos with text, images, or video clips.</div></div></a></div><div class="flex-1 border-l divide-x h-auto border-[#DDDDDD] divide-[#DDDDDD]"><div class="pt-10 flex flex-col h-full"><div class="px-[6%] pb-10">
      //     <div class="font-medium text-[17px] text-gray-600 mb-5">About TryHeadshot Research</div>
      //     <div class="text-4xl font-medium leading-tight">TryHeadshot Research is enabling the impossible. Our mission is to build the multimodal AI systems that will usher in a new era of human creativity.</div></div><div class="h-0.5 w-[120%] bg-[#DDDDDD]"></div><div class="px-[6%] flex h-full"><div class="pt-10 pb-6 w-3/12 border-r border-[#DDDDDD]"><div class="font-medium text-[17px] text-gray-600 mb-3">Latest Models</div>
      //     <a class="font-medium cursor-pointer leading-normal hover:text-purple flex group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7 items-center" href="https://research.tryheadshot.pro/gen1"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300 "><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Gen-1</a><a class="font-medium cursor-pointer leading-normal hover:text-purple flex group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7 items-center" href="https://research.tryheadshot.pro/gen2"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300 ">
      //     <svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      //     <path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg>
      //     </div>Gen-2</a>
      //     </div>
      //     <div class="pt-10 pb-6 w-9/12 pl-[6%] border-[#DDDDDD]">
      //     <div class="font-medium text-[17px] text-gray-600 mb-3">Recent Posts</div>
      //     <a class="font-medium cursor-pointer leading-normal hover:text-purple flex group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[16px] -translate-x-5 items-start mb-3" href="https://research.tryheadshot.pro/gen1"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300 pt-2"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg>
      //     </div>Gen-1: Structure and Content-Guided Video Synthesis with Diffusion Models</a><a class="font-medium cursor-pointer leading-normal hover:text-purple flex group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[16px] -translate-x-5 items-start mb-3" href="https://research.tryheadshot.pro/publications/high-resolution-image-synthesis-with-latent-diffusion-models"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300 pt-2"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>High-Resolution Image Synthesis with Latent Diffusion Models</a></div>
      //     </div>
      //     </div></div></div></div></div></div></div>
      //     </li>
      //     <li class="flex justify-center h-full py-4 hover:bg-[#F1F1F1]"><a class="cursor-pointer py-2 px-2 xl:py-2 xl:px-4 flex items-center text-sm lg:text-base" href="/ai-magic-tools/text-to-image/#">Product<svg class="flex-none ml-1 transition-transform duration-300 rotate-0" width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.71429L8.47937 7.21429L4.83472 10.6429L4.83472 -1.8207e-07L4.09092 -2.14583e-07L4.09092 10.6429L0.520627 7.21429L6.16472e-07 7.71429L4.46282 12L9 7.71429Z" class="fill-current"></path></svg></a><div class="absolute z-50 top-0 mt-[65px] xl:mt-[73px] w-screen left-0 transition-all duration-500 overflow-hidden ease-[cubic-bezier(1,0,0,1)] will-change-auto bg-[#F1F1F1] text-black" style={{height: "0px"}}><div><div class="rw-container"><div class="flex w-15/16 mx-auto"><div class="w-5/12 pr-[4%] flex-col pt-22 pb-14 hidden lg:flex"><a href="https://apps.apple.com/app/apple-store/id1665024375?pt=119558478&amp;ct=MarketingHome&amp;mt=8" target="_blank"><div class="relative overflow-hidden rounded-lg" style={{paddingTop:"56.25%"}}><video class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" autoplay="" loop="" muted="" playsinline="" poster="https://d3phaj0sisr2ct.cloudfront.net/site/videos/tryheadshot-mobile-cut-poster.png"><source src="https://d3phaj0sisr2ct.cloudfront.net/site/videos/tryheadshot-mobile-cut.mp4" type="video/mp4"/></video></div><div class="h-16 mt-auto pt-4"><div class="relative"><div class="leading-tight absolute top-0 left-0">
      //     <div class="text-base font-medium text-black">Gen-1 now available for iOS</div>
      //     <div class="text-base text-gray-600">View in App Store</div>
      //     </div></div></div>
      //     </a></div>
      //     <div class="flex flex-1 border-l divide-x h-auto border-[#DDDDDD] divide-[#DDDDDD]">
      //     <div class="pt-10 px-[6%] "><div>
      //     <div class="font-medium text-[17px] text-gray-600">AI Magic Tools</div><ul class="mb-10"><li>
      //     <div class="mt-3">
      //     <a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/ai-magic-tools/gen-1/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      //     <path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Gen-1</a><a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/ai-magic-tools/text-to-image/">
      //     <div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300">
      //     <svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg>
      //     </div>Text to Image</a><a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/ai-magic-tools/image-to-image/">
      //     <div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Image to Image</a><a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/ai-magic-tools/infinite-image/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Infinite Image</a><a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/inpainting/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Video Inpainting</a><a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/ai-magic-tools/frame-interpolation/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Frame Interpolation</a><a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/ai-magic-tools/ai-training/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300">
      //     <svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Custom AI Training</a>
      //     <a class="text-lg lg:text-[28px] font-semibold underline flex items-center group mt-6" href="/ai-magic-tools/">View all AI Magic Tools<svg class="opacity-0 group-hover:opacity-100 ml-2 transition-all duration-200 -translate-x-0.5 translate-y-1 group-hover:translate-x-0 group-hover:-translate-y-0" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      //     <g opacity="0.9">
      //     <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4717 2.44439H5.33394V1H14.0003V9.66632H12.5559V3.40286L2.02134 13.9374L1 12.9161L11.4717 2.44439Z" class="fill-current"></path><path d="M11.4717 2.44439L11.8252 2.79794L12.6788 1.94439H11.4717V2.44439ZM5.33394 2.44439H4.83394V2.94439H5.33394V2.44439ZM5.33394 1V0.5H4.83394V1H5.33394ZM14.0003 1H14.5003V0.5H14.0003V1ZM14.0003 9.66632V10.1663H14.5003V9.66632H14.0003ZM12.5559 9.66632H12.0559V10.1663H12.5559V9.66632ZM12.5559 3.40286H13.0559V2.19575L12.2023 3.0493L12.5559 3.40286ZM2.02134 13.9374L1.66778 14.2909L2.02134 14.6445L2.37489 14.2909L2.02134 13.9374ZM1 12.9161L0.646447 12.5625L0.292893 12.9161L0.646447 13.2696L1 12.9161ZM11.4717 1.94439H5.33394V2.94439H11.4717V1.94439ZM5.83394 2.44439V1H4.83394V2.44439H5.83394ZM5.33394 1.5H14.0003V0.5H5.33394V1.5ZM13.5003 1V9.66632H14.5003V1H13.5003ZM14.0003 9.16632H12.5559V10.1663H14.0003V9.16632ZM13.0559 9.66632V3.40286H12.0559V9.66632H13.0559ZM12.2023 3.0493L1.66778 13.5838L2.37489 14.2909L12.9094 3.75641L12.2023 3.0493ZM2.37489 13.5838L1.35355 12.5625L0.646447 13.2696L1.66778 14.2909L2.37489 13.5838ZM1.35355 13.2696L11.8252 2.79794L11.1181 2.09083L0.646447 12.5625L1.35355 13.2696Z" class="fill-current"></path></g></svg></a></div></li></ul></div></div><div class="pt-10 px-[6%] ml-20"><div><div class="font-medium text-[17px] text-gray-600">Research</div><ul class="mb-10"><li><div class="mt-3"><a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="https://research.tryheadshot.pro/gen1"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Gen-1</a>
      //     <a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="https://research.tryheadshot.pro/gen2"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Gen-2</a></div></li></ul></div><div><div class="font-medium text-[17px] text-gray-600">Mobile App</div><ul class="mb-10"><li><div class="mt-3"><a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="https://apps.apple.com/app/apple-store/id1665024375?pt=119558478&amp;ct=MarketingHome&amp;mt=8"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>TryHeadshot for iOS</a></div></li></ul></div></div></div></div></div></div></div></li><li class="flex justify-center h-full py-4 hover:bg-[#F1F1F1]"><a class="cursor-pointer py-2 px-2 xl:py-2 xl:px-4 flex items-center text-sm lg:text-base" href="/customers/">Customers</a></li><li class="flex justify-center h-full py-4 hover:bg-[#F1F1F1]"><a class="cursor-pointer py-2 px-2 xl:py-2 xl:px-4 flex items-center text-sm lg:text-base" href="/pricing/">Pricing</a></li><li class="flex justify-center h-full py-4 hover:bg-[#F1F1F1]">
      //     <a class="cursor-pointer py-2 px-2 xl:py-2 xl:px-4 flex items-center text-sm lg:text-base" href="/ai-magic-tools/text-to-image/#">Company<svg class="flex-none ml-1 transition-transform duration-300 rotate-0" width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.71429L8.47937 7.21429L4.83472 10.6429L4.83472 -1.8207e-07L4.09092 -2.14583e-07L4.09092 10.6429L0.520627 7.21429L6.16472e-07 7.71429L4.46282 12L9 7.71429Z" class="fill-current"></path></svg></a><div class="absolute z-50 top-0 mt-[65px] xl:mt-[73px] w-screen left-0 transition-all duration-500 overflow-hidden ease-[cubic-bezier(1,0,0,1)] will-change-auto bg-[#F1F1F1] text-black" style={{height:"0"}}><div><div class="rw-container">
      //     <div class="flex w-15/16 mx-auto"><div class="w-5/12 pr-[4%] flex-col pt-22 pb-14 hidden lg:flex">
      //     <a href="https://apps.apple.com/app/apple-store/id1665024375?pt=119558478&amp;ct=MarketingHome&amp;mt=8" target="_blank">
      //     <div class="relative overflow-hidden rounded-lg" style={{paddingTop:"56.25%"}}><video class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" autoplay="" loop="" muted="" playsinline="" poster="https://d3phaj0sisr2ct.cloudfront.net/site/videos/tryheadshot-mobile-cut-poster.png"><source src="https://d3phaj0sisr2ct.cloudfront.net/site/videos/tryheadshot-mobile-cut.mp4" type="video/mp4"/></video></div><div class="h-16 mt-auto pt-4"><div class="relative"><div class="leading-tight absolute top-0 left-0">
      //     <div class="text-base font-medium text-black">Gen-1 now available for iOS</div><div class="text-base text-gray-600">View in App Store</div></div></div></div></a></div><div class="flex flex-1 border-l divide-x h-auto border-[#DDDDDD] divide-[#DDDDDD]"><div class="pt-10 px-[6%] "><div><div class="font-medium text-[17px] text-gray-600">Company</div>
      //     <ul class="mb-10"><li><div class="mt-3"><a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/careers/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Careers</a><a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/about/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg>
      //     </div>About Us</a>
      //     <a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/blog/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Blog</a><a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="https://academy.tryheadshot.pro/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Tutorials</a><a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="https://studios.tryheadshot.pro/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>TryHeadshot Studios</a>
      //     <a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="/customers/"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300">
      //     <svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg>
      //     </div>Customer Stories</a>
      //     <a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[28px] -translate-x-7" href="https://help.tryheadshot.pro"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Help</a></div></li></ul></div></div><div class="pt-10 px-[6%] ml-20"><div><div class="font-medium text-[17px] text-gray-600">Connect</div><ul class="mb-10"><li><div class="mt-3"><a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="mailto:press@tryheadshot.pro"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Press</a>
      //     <a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="mailto:partnerships@tryheadshot.pro"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Partnerships</a><a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="https://twitter.com/tryheadshot">
      //     <div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Twitter</a><a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="http://discord.gg/invite/tryheadshot"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Discord</a><a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="https://www.youtube.com/tryheadshot"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300">
      //     <svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Youtube</a><a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="https://instagram.com/tryheadshotapp"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>Instagram</a><a target="_blank" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="https://www.tiktok.com/@tryheadshot"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg></div>TikTok</a>
      //     <a target="" class="font-medium cursor-pointer leading-normal hover:text-purple flex items-center group hover:translate-x-0 transition-transform duration-300 text-lg lg:text-[20px] -translate-x-5" href="mailto:marketing@tryheadshot.pro"><div class="opacity-0 group-hover:opacity-100 mr-1 transition-opacity duration-300"><svg width="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2857 0L9.61905 0.785719L14.1905 6.28616L0 6.28616L0 7.4087L14.1905 7.4087L9.61905 12.7969L10.2857 13.5826L16 6.84743L10.2857 0Z" class="fill-current"></path></svg>
      //     </div>Creators</a></div>
      //     </li></ul></div>
      //     </div></div>
      //     </div></div>
      //     </div></div>
      //     </li></ul></nav>
      //     <div class="hidden md:flex space-x-3 lg:space-x-4 xl:space-x-6 py-4 items-center">
      //     <a href="https://app.tryheadshot.pro/login" class="uppercase text-sm lg:text-base">Log in</a>
      //     <a href="https://app.tryheadshot.pro/signup" class="flex text-sm rounded-full font-normal leading-tight px-5 py-2 items-center justify-center bg-purple text-white hover:bg-[#322CB5]"><span class="font-medium pr-1">Sign Up</span> — It’s free</a></div><div class="flex items-end justify-center flex-col md:hidden">
      //     <div class="cursor-pointer"><svg class="fill-current" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.304199" width="20" height="3.47826"></rect><rect y="7.26074" width="20" height="3.47826"></rect><rect y="14.2173" width="20" height="3.47826"></rect></svg>
      //     </div></div><div class="rw-mobilenav-container"><div class="rw-container flex flex-col h-full"><div class="flex justify-between items-center"><div>
      //     <div style={{height:"23px"}}>
      //     <svg class="h-full w-auto" viewBox="0 0 139 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.7476 6.12349H41.5723L41.9307 8.11308C42.6791 6.53864 44.2901 5.76709 45.9917 5.76709C46.8268 5.76709 47.6658 5.97466 48.233 6.21357L47.3349 10.8155C46.7362 10.4591 45.9917 10.2202 45.0937 10.2202C43.5417 10.2202 42.2852 11.262 42.2852 13.5766V20.971H37.7476V6.12349Z" class="fill-current"></path>
      //     <path d="M49.8058 15.4422V6.0293H54.4106V14.5807C54.4106 16.3036 55.409 17.2237 56.8628 17.2237C58.3484 17.2237 59.6185 16.096 59.6185 13.6019V6.0293H64.2233V20.8769H60.3773L59.8621 18.9191C59.1352 20.1055 57.3181 21.2332 55.0776 21.2332C52.0742 21.2332 49.8058 19.3302 49.8058 15.4422Z" class="fill-current"></path><path d="M66.5865 6.1234H70.3857L70.8946 8.08115C71.6126 6.89475 73.3761 5.76709 75.5933 5.76709C78.5246 5.76709 80.7379 7.6387 80.7379 11.5268V20.971H76.1891V12.4783C76.1891 10.728 75.2896 9.77656 73.7943 9.77656C72.4175 9.77656 71.1313 10.9042 71.1313 13.4571V20.971H66.5825V6.1234H66.5865Z" class="fill-current"></path><path d="M81.7864 6.0293H86.3361L89.0239 16.1599L91.4156 9.49679L90.2353 6.0293H94.7539L97.6793 16.1599L100.277 6.0293H104.854L100.009 20.971H95.3421L93.336 15.0251L91.2676 20.971H86.6283L81.7864 6.0293Z" class="fill-current"></path>
      //     <path d="M105.117 13.5001C105.117 8.39406 108.801 5.76709 112.192 5.76709C114.274 5.76709 115.76 6.59215 116.501 7.44835L116.916 6.12124H121.107V20.879H117.124L116.501 19.4351C115.877 20.1706 114.541 21.2331 111.981 21.2331C108.327 21.2331 105.117 18.2209 105.117 13.5001ZM116.681 13.5001C116.681 11.1105 115.136 9.63554 113.172 9.63554C111.181 9.63554 109.664 11.1417 109.664 13.5001C109.664 15.8585 111.181 17.3686 113.172 17.3686C115.136 17.3647 116.681 15.8897 116.681 13.5001Z" class="fill-current"></path><path d="M125.867 27.0002L128.387 20.2008L122.417 6.0293H127.307L130.638 15.286L133.637 6.0293H138.408L130.519 27.0002H125.867Z" class="fill-current"></path><path d="M20.6987 26.9835C17.4276 27.2826 14.6925 23.4493 12.5958 21.5051C11.5356 29.1441 -0.00787819 28.42 4.03477e-06 20.6708C0.00394515 17.4161 4.03477e-06 9.46227 4.03477e-06 6.30987C4.03477e-06 5.17642 0.311352 4.03511 0.894637 3.06695C2.00209 1.18968 4.14212 -0.0224774 6.32155 0.0011361C9.6045 0.00507168 17.5104 -0.00279948 20.6987 0.0011361C28.4549 0.0011361 29.1918 11.5403 21.5264 12.5792L25.164 16.2118C29.1603 19.9703 26.1611 27.1488 20.6987 26.9835ZM18.9371 22.4379C21.1914 24.7599 24.7896 21.1627 22.4683 18.9116L16.1625 12.6147H12.6352C12.6352 12.9571 12.6352 15.893 12.6352 16.1409L18.0858 21.5839L18.9371 22.4379ZM3.81894 20.6747C3.76771 23.9019 8.86357 23.9137 8.81234 20.6747V6.30987C8.85569 4.70022 7.15313 3.42115 5.61609 3.91704C5.54909 3.93672 5.48604 3.95639 5.42692 3.98001C4.46135 4.33814 3.79136 5.32597 3.81894 6.3571C3.81894 6.3571 3.81894 20.6747 3.81894 20.6747ZM20.6987 8.80109C23.9383 8.85225 23.9344 3.76355 20.6987 3.81471H12.1347C12.785 5.18429 12.6195 7.31738 12.6313 8.80109C13.0963 8.80109 20.4702 8.80109 20.6987 8.80109Z" class="fill-current"></path></svg>
      //     </div></div>
      //     <div class="cursor-pointer"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.9023" y="9.76758" width="29.2283" height="2.65712" transform="rotate(45 11.9023 9.76758)" fill="white"></rect><rect x="31.9453" y="12.2715" width="28.392" height="2.65712" transform="rotate(135 31.9453 12.2715)" fill="white"></rect></svg></div></div><div class="mt-10"><button class="text-[56px] font-medium flex items-baseline focus:outline-none w-full leading-tight">Research<svg class="ml-auto transition duration-200 delay-75" width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8798 15.409L1.04274 3.57189L3.41016 1.20447L17.6146 15.4089L3.41016 29.6134L1.04274 27.246L12.8798 15.409Z" fill="white"></path><path d="M1.04274 3.57189L0.730641 3.25979L0.418539 3.57189L0.730641 3.88399L1.04274 3.57189ZM12.8798 15.409L13.1919 15.7211L13.504 15.409L13.1919 15.0968L12.8798 15.409ZM3.41016 1.20447L3.72226 0.892372L3.41016 0.58027L3.09805 0.892372L3.41016 1.20447ZM17.6146 15.4089L17.9267 15.7211L18.2388 15.4089L17.9267 15.0968L17.6146 15.4089ZM3.41016 29.6134L3.09805 29.9255L3.41016 30.2376L3.72226 29.9255L3.41016 29.6134ZM1.04274 27.246L0.730642 26.9339L0.418539 27.246L0.730642 27.5581L1.04274 27.246ZM0.730641 3.88399L12.5677 15.7211L13.1919 15.0968L1.35485 3.25979L0.730641 3.88399ZM3.09805 0.892372L0.730641 3.25979L1.35485 3.88399L3.72226 1.51658L3.09805 0.892372ZM0.730642 27.5581L3.09805 29.9255L3.72226 29.3013L1.35485 26.9339L0.730642 27.5581ZM12.5677 15.0968L0.730642 26.9339L1.35485 27.5581L13.1919 15.7211L12.5677 15.0968ZM17.9267 15.0968L3.72226 0.892372L3.09805 1.51658L17.3025 15.7211L17.9267 15.0968ZM3.72226 29.9255L17.9267 15.7211L17.3025 15.0968L3.09806 29.3013L3.72226 29.9255Z" fill="white">
      //     </path></svg>
      //     </button><div style={{maxHeight: "0px"}} class="transition-all duration-500 overflow-auto">
      //     <ul class="rw-mobilenav-list py-6"><div>
      //     <div class="font-medium text-[17px] text-[#797979]">About TryHeadshot Research</div><div class="text-3xl block leading-tight font-medium text-[#DBDBE1] mb-10">TryHeadshot Research is enabling the impossible. Our mission is to build the multimodal AI systems that will usher in a new era of human creativity.</div><div class="font-medium text-[17px] text-[#797979]">Research</div><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://research.tryheadshot.pro/gen1">Gen-1</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://research.tryheadshot.pro/gen2">Gen-2</a></div></ul></div><button class="text-[56px] font-medium flex items-baseline focus:outline-none w-full leading-tight">Product<svg class="ml-auto transition duration-200 delay-75" width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8798 15.409L1.04274 3.57189L3.41016 1.20447L17.6146 15.4089L3.41016 29.6134L1.04274 27.246L12.8798 15.409Z" fill="white">
      //     </path>
      //     <path d="M1.04274 3.57189L0.730641 3.25979L0.418539 3.57189L0.730641 3.88399L1.04274 3.57189ZM12.8798 15.409L13.1919 15.7211L13.504 15.409L13.1919 15.0968L12.8798 15.409ZM3.41016 1.20447L3.72226 0.892372L3.41016 0.58027L3.09805 0.892372L3.41016 1.20447ZM17.6146 15.4089L17.9267 15.7211L18.2388 15.4089L17.9267 15.0968L17.6146 15.4089ZM3.41016 29.6134L3.09805 29.9255L3.41016 30.2376L3.72226 29.9255L3.41016 29.6134ZM1.04274 27.246L0.730642 26.9339L0.418539 27.246L0.730642 27.5581L1.04274 27.246ZM0.730641 3.88399L12.5677 15.7211L13.1919 15.0968L1.35485 3.25979L0.730641 3.88399ZM3.09805 0.892372L0.730641 3.25979L1.35485 3.88399L3.72226 1.51658L3.09805 0.892372ZM0.730642 27.5581L3.09805 29.9255L3.72226 29.3013L1.35485 26.9339L0.730642 27.5581ZM12.5677 15.0968L0.730642 26.9339L1.35485 27.5581L13.1919 15.7211L12.5677 15.0968ZM17.9267 15.0968L3.72226 0.892372L3.09805 1.51658L17.3025 15.7211L17.9267 15.0968ZM3.72226 29.9255L17.9267 15.7211L17.3025 15.0968L3.09806 29.3013L3.72226 29.9255Z" fill="white"></path></svg></button><div style={{maxHeight:"0px"}} class="transition-all duration-500 overflow-auto"><ul class="rw-mobilenav-list py-6"><li class=""><div class="mb-10"><div class="font-medium text-[17px] text-[#797979]">AI Magic Tools</div><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/ai-magic-tools/gen-1/">Gen-1</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/ai-magic-tools/text-to-image/">Text to Image</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/ai-magic-tools/image-to-image/">Image to Image</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/ai-magic-tools/infinite-image/">Infinite Image</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/inpainting/">Video Inpainting</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/ai-magic-tools/frame-interpolation/">Frame Interpolation</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/ai-magic-tools/ai-training/">Custom AI Training</a><a class="text-3xl mt-6 block font-bold underline leading-normal text-[#DBDBE1]" href="/ai-magic-tools/">View all AI Magic Tools</a></div>
      //     </li><li class=""><div class="mb-10">
      //     <div class="font-medium text-[17px] text-[#797979]">Research</div>
      //     <a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://research.tryheadshot.pro/gen1">Gen-1</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://research.tryheadshot.pro/gen2">Gen-2</a></div><div class="mb-10"><div class="font-medium text-[17px] text-[#797979]">Mobile App</div><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://apps.apple.com/app/apple-store/id1665024375?pt=119558478&amp;ct=MarketingHome&amp;mt=8">TryHeadshot for iOS</a></div></li></ul></div><div class="text-[56px] font-medium leading-tight"><a class="block" href="/customers/">Customers</a></div>
      //     <div class="text-[56px] font-medium leading-tight">
      //     <a class="block" href="/pricing/">Pricing</a></div><button class="text-[56px] font-medium flex items-baseline focus:outline-none w-full leading-tight">Company<svg class="ml-auto transition duration-200 delay-75" width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8798 15.409L1.04274 3.57189L3.41016 1.20447L17.6146 15.4089L3.41016 29.6134L1.04274 27.246L12.8798 15.409Z" fill="white"></path><path d="M1.04274 3.57189L0.730641 3.25979L0.418539 3.57189L0.730641 3.88399L1.04274 3.57189ZM12.8798 15.409L13.1919 15.7211L13.504 15.409L13.1919 15.0968L12.8798 15.409ZM3.41016 1.20447L3.72226 0.892372L3.41016 0.58027L3.09805 0.892372L3.41016 1.20447ZM17.6146 15.4089L17.9267 15.7211L18.2388 15.4089L17.9267 15.0968L17.6146 15.4089ZM3.41016 29.6134L3.09805 29.9255L3.41016 30.2376L3.72226 29.9255L3.41016 29.6134ZM1.04274 27.246L0.730642 26.9339L0.418539 27.246L0.730642 27.5581L1.04274 27.246ZM0.730641 3.88399L12.5677 15.7211L13.1919 15.0968L1.35485 3.25979L0.730641 3.88399ZM3.09805 0.892372L0.730641 3.25979L1.35485 3.88399L3.72226 1.51658L3.09805 0.892372ZM0.730642 27.5581L3.09805 29.9255L3.72226 29.3013L1.35485 26.9339L0.730642 27.5581ZM12.5677 15.0968L0.730642 26.9339L1.35485 27.5581L13.1919 15.7211L12.5677 15.0968ZM17.9267 15.0968L3.72226 0.892372L3.09805 1.51658L17.3025 15.7211L17.9267 15.0968ZM3.72226 29.9255L17.9267 15.7211L17.3025 15.0968L3.09806 29.3013L3.72226 29.9255Z" fill="white"></path></svg></button><div style={{maxHeight:"0px"}} class="transition-all duration-500 overflow-auto"><ul class="rw-mobilenav-list py-6"><li class=""><div class="mb-10"><div class="font-medium text-[17px] text-[#797979]">Company</div><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/careers/">Careers</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/about/">About Us</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/blog/">Blog</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://academy.tryheadshot.pro/">Tutorials</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://studios.tryheadshot.pro/">TryHeadshot Studios</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="/customers/">Customer Stories</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://help.tryheadshot.pro">Help</a>
      //     </div></li><li class="">
      //     <div class="mb-10">
      //     <div class="font-medium text-[17px] text-[#797979]">Connect</div>
      //     <a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="mailto:press@tryheadshot.pro">Press</a>
      //     <a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="mailto:partnerships@tryheadshot.pro">Partnerships</a>
      //     <a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://twitter.com/tryheadshot">Twitter</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="http://discord.gg/invite/tryheadshot">Discord</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://www.youtube.com/tryheadshot">Youtube</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://instagram.com/tryheadshotapp">Instagram</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="https://www.tiktok.com/@tryheadshot">TikTok</a><a class="text-3xl block leading-normal font-medium text-[#DBDBE1]" href="mailto:marketing@tryheadshot.pro">Creators</a></div></li></ul></div></div><div class="flex flex-col items-center mt-auto pt-6 pb-6"><a href="https://app.tryheadshot.pro/login" class="text-lg uppercase font-semibold">Login</a><a href="https://app.tryheadshot.pro/signup" class="relative border-2 text-lg mt-4 border-purple rounded-full py-2 w-full text-center uppercase font-semibold">Try TryHeadshot for free<div class="absolute right-8 top-4"><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.01653 6.11463L1.50856 1.60667L2.41016 0.705078L7.81971 6.11463L2.41016 11.5242L1.50856 10.6226L6.01653 6.11463Z" fill="white"></path><path d="M1.50856 1.60667L1.19646 1.29457L0.884359 1.60667L1.19646 1.91877L1.50856 1.60667ZM6.01653 6.11463L6.32863 6.42673L6.64073 6.11463L6.32863 5.80253L6.01653 6.11463ZM2.41016 0.705078L2.72226 0.392976L2.41016 0.0808735L2.09805 0.392976L2.41016 0.705078ZM7.81971 6.11463L8.13181 6.42673L8.44391 6.11463L8.13181 5.80253L7.81971 6.11463ZM2.41016 11.5242L2.09805 11.8363L2.41016 12.1484L2.72226 11.8363L2.41016 11.5242ZM1.50856 10.6226L1.19646 10.3105L0.884359 10.6226L1.19646 10.9347L1.50856 10.6226ZM1.19646 1.91877L5.70442 6.42673L6.32863 5.80253L1.82067 1.29457L1.19646 1.91877ZM2.09805 0.392976L1.19646 1.29457L1.82067 1.91877L2.72226 1.01718L2.09805 0.392976ZM1.19646 10.9347L2.09805 11.8363L2.72226 11.2121L1.82067 10.3105L1.19646 10.9347ZM5.70442 5.80253L1.19646 10.3105L1.82067 10.9347L6.32863 6.42673L5.70442 5.80253ZM8.13181 5.80253L2.72226 0.392976L2.09805 1.01718L7.50761 6.42673L8.13181 5.80253ZM2.72226 11.8363L8.13181 6.42673L7.50761 5.80253L2.09805 11.2121L2.72226 11.8363Z" fill="white"></path></svg></div></a></div></div></div></div></div></header>
      //     <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-md z-[998] transition-opacity duration-200 invisible opacity-0"></div>
      //     <section className="flex flex-col md:flex-row pt-32 md:pt-36 pb-20 md:pb-9 bg-[#F1F1F1]" data-background="bg-black">
      //       <div className="rw-container relative text-center md:text-left">
      //         <div className="mb-7 text-xl font-semibold">AI Magic Tools</div>
      //         <div className="text-[56px] md:text-[9.7vw] xxl:text-[140px] mb-10 md:mb-12 leading-none tracking-tight font-semibold md:w-3/4">Text to Image Generation</div>
      //         <div className="flex flex-col md:flex-row">
      //           <div className="md:w-1/2"><div className="block md:hidden mb-6">
      //             <video className="rounded-md" autoPlay="" loop="" muted="" playsInline=""><source type="video/webm" />
      //               <source src="https://d3phaj0sisr2ct.cloudfront.net/site/magic-tools/text-to-image.mp4" type="video/mp4" />
      //             </video></div><div className="text-lg md:text-2xl leading-tight mb-12 font-medium md:pr-20">Easily create an image from scratch with our AI image generator by entering descriptive text.</div>
      //             <a href="https://app.tryheadshot.pro/signup?utm_source=tryheadshot&amp;utm_medium=ai-magic-tools&amp;utm_campaign=text-to-image" className="text-black flex md:inline-flex items-center justify-center py-3 px-6 bg-[#A8AFB9] bg-opacity-30 rounded-full hover:bg-opacity-70 transition-all duration-150"><div className="text-xl font-semibold leading-tight">Try TryHeadshot for Free</div>
      //               <svg className="ml-4" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.21425 7.12711L1.10757 2.02044L2.12891 0.999104L8.25692 7.12711L2.12891 13.2551L1.10757 12.2338L6.21425 7.12711Z" className="fill-current"></path><path d="M1.10757 2.02044L0.754018 1.66689L0.400465 2.02044L0.754018 2.37399L1.10757 2.02044ZM6.21425 7.12711L6.5678 7.48067L6.92135 7.12711L6.5678 6.77356L6.21425 7.12711ZM2.12891 0.999104L2.48246 0.645551L2.12891 0.291997L1.77535 0.64555L2.12891 0.999104ZM8.25692 7.12711L8.61047 7.48067L8.96402 7.12711L8.61047 6.77356L8.25692 7.12711ZM2.12891 13.2551L1.77535 13.6087L2.12891 13.9622L2.48246 13.6087L2.12891 13.2551ZM1.10757 12.2338L0.754018 11.8802L0.400465 12.2338L0.754018 12.5873L1.10757 12.2338ZM0.754018 2.37399L5.86069 7.48067L6.5678 6.77356L1.46112 1.66689L0.754018 2.37399ZM1.77535 0.64555L0.754018 1.66689L1.46112 2.37399L2.48246 1.35266L1.77535 0.64555ZM0.754018 12.5873L1.77535 13.6087L2.48246 12.9016L1.46112 11.8802L0.754018 12.5873ZM5.86069 6.77356L0.754018 11.8802L1.46112 12.5873L6.5678 7.48067L5.86069 6.77356ZM8.61047 6.77356L2.48246 0.645551L1.77535 1.35266L7.90336 7.48067L8.61047 6.77356ZM2.48246 13.6087L8.61047 7.48067L7.90336 6.77356L1.77535 12.9016L2.48246 13.6087Z" className="fill-current"></path></svg></a></div><div className="md:w-1/2 mt-6 md:mt-0 hidden md:block"><video className="rounded-md" autoPlay="" loop="" muted="" playsInline=""><source type="video/webm" /><source src="https://d3phaj0sisr2ct.cloudfront.net/site/magic-tools/text-to-image.mp4" type="video/mp4" />
      //               </video>
      //           </div>
      //         </div>
      //       </div>
      //     </section>
      //     <section class="bg-[#F2D972]">
      //       <div class="rw-container">
      //         <div class="pt-6 lg:pt-12 pb-2/16">
      //           <h2 class="leading-tight text-4xl lg:text-[4.2vw] xxl:text-[60px] font-semibold tracking-tight">How to use Text to Image</h2>
      //         </div>
      //         <div class="flex flex-col lg:flex-row lg:space-x-20 border-t border-[#00000025] lg:border-t-0 divide-y lg:divide-y-0 divide-[#00000025]">
      //           <div class="flex-1 flex flex-col pt-7 pb-10 lg:pt-14 lg:pb-36">
      //             <div class="text-3xl lg:text-[3.9vw] leading-none xxl:text-[60px] font-medium text-black mix-blend-soft-light">
      //             </div>
      //             <div class="text-3xl lg:text-[3.9vw] xxl:text-[60px] leading-none font-medium mb-10 lg:mb-22">Write a prompt</div>
      //             <div class="h-32 text-lg lg:text-xl mt-auto">Use your imagination to craft an original line of text. You’ll want to provide as much detail as possible for the best results — commas are your friend!</div>
      //           </div>
      //           <div class="flex-1 flex flex-col pt-7 pb-10 lg:pt-14 lg:pb-36">
      //             <div class="text-3xl lg:text-[3.9vw] leading-none xxl:text-[60px] font-medium text-black mix-blend-soft-light">
      //             </div>
      //             <div class="text-3xl lg:text-[3.9vw] xxl:text-[60px] leading-none font-medium mb-10 lg:mb-22">Adjust settings</div>
      //             <div class="h-32 text-lg lg:text-xl mt-auto">Change resolution, style, medium, mood, and prompt weight to customize Text to Image AI to your liking. Think: pixel-art, watercolor, vivid, sketch, among many more styles.</div>
      //           </div>
      //           <div class="flex-1 flex flex-col pt-7 pb-10 lg:pt-14 lg:pb-36">
      //             <div class="text-3xl lg:text-[3.9vw] leading-none xxl:text-[60px] font-medium text-black mix-blend-soft-light">
      //             </div>
      //             <div class="text-3xl lg:text-[3.9vw] xxl:text-[60px] leading-none font-medium mb-10 lg:mb-22">Generate</div>
      //             <div class="h-32 text-lg lg:text-xl mt-auto">Once you’ve chosen all your settings, choose the amount of images you’d like to generate —from one individual image to a batch of 500.</div>
      //           </div>
      //         </div>
      //       </div>
      //     </section>
      //     <section class="lg:py-16 bg-black text-white relative"><div class="rw-container">
      //       <div class="pt-6 lg:pt-40 pb-12 lg:pb-2/16">
      //         <h2 class="text-center md:text-left leading-tight text-5xl lg:text-[7vw] xxl:text-[100px] tracking-tight font-semibold">Why TryHeadshot?</h2>
      //         <div class="text-lg w-1/2 mt-20 lg:mt-10">
      //         </div>
      //         <a href="https://app.tryheadshot.pro/signup?utm_source=tryheadshot&amp;utm_medium=ai-magic-tools&amp;utm_campaign=text-to-image" class="flex md:inline-flex items-center justify-center py-3 px-6 bg-[#A8AFB9] bg-opacity-30 rounded-full hover:bg-opacity-70 transition-all duration-150">
      //           <div class="text-xl font-semibold leading-tight">Open TryHeadshot</div>
      //           <svg class="ml-4" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      //             <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21425 7.12711L1.10757 2.02044L2.12891 0.999104L8.25692 7.12711L2.12891 13.2551L1.10757 12.2338L6.21425 7.12711Z" class="fill-current">
      //             </path><path d="M1.10757 2.02044L0.754018 1.66689L0.400465 2.02044L0.754018 2.37399L1.10757 2.02044ZM6.21425 7.12711L6.5678 7.48067L6.92135 7.12711L6.5678 6.77356L6.21425 7.12711ZM2.12891 0.999104L2.48246 0.645551L2.12891 0.291997L1.77535 0.64555L2.12891 0.999104ZM8.25692 7.12711L8.61047 7.48067L8.96402 7.12711L8.61047 6.77356L8.25692 7.12711ZM2.12891 13.2551L1.77535 13.6087L2.12891 13.9622L2.48246 13.6087L2.12891 13.2551ZM1.10757 12.2338L0.754018 11.8802L0.400465 12.2338L0.754018 12.5873L1.10757 12.2338ZM0.754018 2.37399L5.86069 7.48067L6.5678 6.77356L1.46112 1.66689L0.754018 2.37399ZM1.77535 0.64555L0.754018 1.66689L1.46112 2.37399L2.48246 1.35266L1.77535 0.64555ZM0.754018 12.5873L1.77535 13.6087L2.48246 12.9016L1.46112 11.8802L0.754018 12.5873ZM5.86069 6.77356L0.754018 11.8802L1.46112 12.5873L6.5678 7.48067L5.86069 6.77356ZM8.61047 6.77356L2.48246 0.645551L1.77535 1.35266L7.90336 7.48067L8.61047 6.77356ZM2.48246 13.6087L8.61047 7.48067L7.90336 6.77356L1.77535 12.9016L2.48246 13.6087Z" class="fill-current"></path></svg>
      //         </a>
      //       </div>
      //       <div class="grid lg:grid-cols-3 gap-10 border-t border-t-[#ffffff25] lg:border-t-0 divide-y lg:divide-y-0 divide-[#ffffff25]"><div class="flex flex-1 flex-col lg:flex-row pt-6 md:pt-0">
      //         <div>
      //           <h3 class="text-4xl mb-6 font-medium">Endless features</h3>
      //           <div class="lg:pr-12 text-lg lg:text-xl leading-tight">New AI Magic Tools are being released weekly, in addition to our fully-featured timeline video editor. Remove backgrounds with Green Screen, create custom LUTs, and add subtitles or export transcripts all in the same app. Say goodbye to clunky third-party plugins and external softwares — in TryHeadshot you have it all.</div>
      //         </div>
      //       </div>
      //         <div class="flex flex-1 flex-col lg:flex-row pt-6 md:pt-0">
      //           <div><h3 class="text-4xl mb-6 font-medium">Edit faster</h3>
      //             <div class="lg:pr-12 text-lg lg:text-xl leading-tight">Your workflow has never been faster. We’re leveraging the latest technologies that AI has to offer to create unique next-generation tooling, but with a familiar feeling and easy entry-point. Make manual rotoscoping, sourcing stock imagery, and outsourcing storyboarding a thing of the past.</div>
      //           </div>
      //         </div>
      //         <div class="flex flex-1 flex-col lg:flex-row pt-6 md:pt-0">
      //           <div><h3 class="text-4xl mb-6 font-medium">In the cloud</h3><div class="lg:pr-12 text-lg lg:text-xl leading-tight">Pick up work from anywhere in the world. Collaborate in real-time. Keep your assets centralized, and just a click away. Use TryHeadshot by simply opening your browser and logging in — no software downloads or hard drive storage required.</div>
      //           </div></div></div></div>
      //     </section>

      //     <section class="bg-[#292929] text-white pt-6 pb-8 lg:pt-12 lg:pb-32" data-background="bg-black">
      //       <div class="rw-container mb-10 lg:mb-40">
      //         <div class="text-center md:text-left leading-tight text-5xl lg:text-[7vw] xxl:text-[100px] tracking-tight font-semibold">FAQs</div>
      //       </div>
      //       <div class="rw-container py-11 text-white">
      //         <div class="border-t border-white">
      //           <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
      //             <div class="flex justify-between items-center cursor-pointer">
      //               <div class="text-lg md:text-2xl font-display leading-none pr-1/8">How much does Text to Image cost to use?</div>
      //               <div class="transition duration-150 transform">
      //                 <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6386 1L22.6384 44.0246" strokeWidth="2"></path><path d="M44.0244 22.5124L0.999795 22.5122" strokeWidth="2"></path></svg></div></div><div style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-auto"><div class="py-8 lg:w-5/8 text-lg">Each Text to Image generation costs 5 credits. Credits may be purchased with a Standard or Pro plan for $.01 each, with a minimum purchase of $10. Downloading in higher resolutions may require a Standard or Pro account.</div></div></div><div class="lg:py-8 py-4 lg:px-5 border-b border-white"><div class="flex justify-between items-center cursor-pointer"><div class="text-lg md:text-2xl font-display leading-none pr-1/8">Can I sell AI image generations as artwork?</div><div class="transition duration-150 transform"><svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6386 1L22.6384 44.0246" strokeWidth="2"></path><path d="M44.0244 22.5124L0.999795 22.5122" strokeWidth="2"></path></svg>
      //                 </div>
      //                 </div>
      //             <div style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-auto">
      //               <div class="py-8 lg:w-5/8 text-lg">Yes! Anything you create using Text to Image is fully yours to use personally or commercially.</div>
      //             </div>
      //           </div>
      //           <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
      //             <div class="flex justify-between items-center cursor-pointer">
      //               <div class="text-lg md:text-2xl font-display leading-none pr-1/8">What are the system requirements to use TryHeadshot?</div>
      //               <div class="transition duration-150 transform">
      //                 <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6386 1L22.6384 44.0246" strokeWidth="2"></path><path d="M44.0244 22.5124L0.999795 22.5122" strokeWidth="2"></path></svg>
      //               </div>
      //             </div>
      //             <div style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-auto">
      //               <div class="py-8 lg:w-5/8 text-lg">TryHeadshot is accessible on any desktop device with an internet browser! We are currently optimized for use with Google Chrome. Simply head to app.tryheadshot.pro to get started, no downloads required.</div>
      //             </div>
      //           </div>
      //           <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
      //             <div class="flex justify-between items-center cursor-pointer">
      //               <div class="text-lg md:text-2xl font-display leading-none pr-1/8">What kind of files will I receive?</div>
      //               <div class="transition duration-150 transform">
      //                 <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6386 1L22.6384 44.0246" strokeWidth="2"></path><path d="M44.0244 22.5124L0.999795 22.5122" strokeWidth="2"></path></svg>
      //               </div>
      //             </div>
      //             <div style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-auto">
      //               <div class="py-8 lg:w-5/8 text-lg">Output results are delivered as JPG image files.</div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div class="mt-12 px-8"><div class="text-lg">Want more help? <br />Write us at <a href="mailto:support@tryheadshot.pro" class="underline">support@tryheadshot.pro</a>.</div>
      //       </div>
      //     </section>
      //    <div class="bg-[#1D1D1D]">
      //    <div class="rw-container py-7 lg:py-14">
      //    <div class="text-center lg:text-left">
      //     <div class="text-[28px] lg:text-[3.8vw] text-white leading-tight font-semibold tracking-tight">Everything you need to make anything you want.</div>
      //    <div class="mt-6"><a href="https://app.tryheadshot.pro/signup" class="text-white items-center justify-center py-3 px-6 bg-[#292929] rounded-full backdrop-blur-md inline-flex">
      //    <div class="text-xl font-semibold leading-tight">Try TryHeadshot for Free</div>
      //   <svg class="ml-4" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.21425 7.12711L1.10757 2.02044L2.12891 0.999104L8.25692 7.12711L2.12891 13.2551L1.10757 12.2338L6.21425 7.12711Z" fill="white"></path><path d="M1.10757 2.02044L0.754018 1.66689L0.400465 2.02044L0.754018 2.37399L1.10757 2.02044ZM6.21425 7.12711L6.5678 7.48067L6.92135 7.12711L6.5678 6.77356L6.21425 7.12711ZM2.12891 0.999104L2.48246 0.645551L2.12891 0.291997L1.77535 0.64555L2.12891 0.999104ZM8.25692 7.12711L8.61047 7.48067L8.96402 7.12711L8.61047 6.77356L8.25692 7.12711ZM2.12891 13.2551L1.77535 13.6087L2.12891 13.9622L2.48246 13.6087L2.12891 13.2551ZM1.10757 12.2338L0.754018 11.8802L0.400465 12.2338L0.754018 12.5873L1.10757 12.2338ZM0.754018 2.37399L5.86069 7.48067L6.5678 6.77356L1.46112 1.66689L0.754018 2.37399ZM1.77535 0.64555L0.754018 1.66689L1.46112 2.37399L2.48246 1.35266L1.77535 0.64555ZM0.754018 12.5873L1.77535 13.6087L2.48246 12.9016L1.46112 11.8802L0.754018 12.5873ZM5.86069 6.77356L0.754018 11.8802L1.46112 12.5873L6.5678 7.48067L5.86069 6.77356ZM8.61047 6.77356L2.48246 0.645551L1.77535 1.35266L7.90336 7.48067L8.61047 6.77356ZM2.48246 13.6087L8.61047 7.48067L7.90336 6.77356L1.77535 12.9016L2.48246 13.6087Z" fill="white"></path></svg>
      //   </a>
      //   </div>
      //  </div>
      //  </div>
      //  </div>
      //  <footer class="lg:pt-52 text-white bg-[#111111] relative">
      //  <div class="rw-container flex-col lg:flex-row hidden md:flex">
      //  <div class="lg:w-1/5 mb-6 justify-between flex">
      //  <div class="h-5">
      //  <svg class="transform translate-y-1 h-full" viewBox="0 0 120 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.422712H4.55581L4.97852 2.818C5.87089 0.939335 7.79649 0 9.81606 0C10.8024 0 11.7887 0.234851 12.4932 0.516651L11.4129 6.05872C10.7084 5.63602 9.81609 5.35422 8.73586 5.35422C6.90416 5.35422 5.40117 6.62231 5.40117 9.39335V18.2701H0V0.422712Z" class="fill-current"></path><path d="M14.5596 11.6945V0.422472H19.9607V10.6612C19.9607 12.7278 21.135 13.808 22.8258 13.808C24.5635 13.808 26.0664 12.446 26.0664 9.44009V0.375488H31.4676V18.1759H26.9588L26.3483 15.8276C25.5029 17.2366 23.3424 18.5986 20.7123 18.5986C17.2367 18.6456 14.5596 16.3912 14.5596 11.6945Z" class="fill-current"></path><path d="M34.5205 0.422712H39.0294L39.6399 2.77105C40.4853 1.36205 42.5988 0 45.2289 0C48.7045 0 51.3346 2.25441 51.3346 6.90411V18.2231H45.9334V8.03133C45.9334 5.91783 44.8532 4.79061 43.0685 4.79061C41.4247 4.79061 39.9217 6.15266 39.9217 9.2055V18.2231H34.5205V0.422712Z" class="fill-current"></path><path d="M52.2739 0.422852H57.769L61.0097 12.4933L63.8747 4.55592L62.4657 0.422852H67.9139L71.4364 12.4933L74.5831 0.422852H80.1252L74.3013 18.2232H68.6653L66.223 11.1313L63.7338 18.2232H58.1448L52.2739 0.422852Z" class="fill-current"></path><path d="M80.2192 9.34639C80.2192 3.19375 84.6341 0 88.6733 0C91.1625 0 92.9472 0.986296 93.8396 2.01956L94.3562 0.422712H99.3817V18.2231H94.591L93.8396 16.4853C93.0881 17.3777 91.4913 18.6458 88.4384 18.6458C84.0705 18.6458 80.2192 15.0294 80.2192 9.34639ZM94.0744 9.34639C94.0744 6.48142 92.2427 4.69667 89.8944 4.69667C87.4991 4.69667 85.7143 6.52839 85.7143 9.34639C85.7143 12.2114 87.546 13.9961 89.8944 13.9961C92.1957 13.9961 94.0744 12.2114 94.0744 9.34639Z" class="fill-current"></path><path d="M105.065 25.3622L108.071 17.2839L100.979 0.422852H106.802L110.748 11.4131L114.317 0.422852H120L110.654 25.3622H105.065Z" class="fill-current"></path></svg>
      //  </div>
      //  </div>
      //  <div class="flex flex-1 space-x-4">
      //  <ul class="flex-1 font-display text-lg leading-snug">
      //  <li class="uppercase mb-6">Product</li>
      //  <li><a href="/ai-magic-tools/gen-1" target="_self" class="hover:text-white text-[#999999]">Gen-1</a></li>
      //  <li><a href="https://research.tryheadshot.pro/gen2" target="_self" class="hover:text-white text-[#999999]">Gen-2</a></li>
      //  <li><a href="/ai-magic-tools" target="_self" class="hover:text-white text-[#999999]">AI Magic Tools</a></li>
      //  <li><a href="/green-screen" target="_self" class="hover:text-white text-[#999999]">Green Screen</a></li>
      //  <li><a href="/inpainting" target="_self" class="hover:text-white text-[#999999]">Inpainting</a></li>
      //  <li><a href="/motion-tracking" target="_self" class="hover:text-white text-[#999999]">Motion Tracking</a></li>
      //  </ul>
      //  <ul class="flex-1 font-display text-lg leading-snug">
      //  <li class="uppercase mb-6">Get Started</li>
      //  <li><a href="https://app.tryheadshot.pro/login" target="_blank" class="hover:text-white text-[#999999]">Login</a></li>
      //  <li><a href="/pricing" target="_self" class="hover:text-white text-[#999999]">Pricing</a></li>
      //  <li><a href="/customers" target="_blank" class="hover:text-white text-[#999999]">Customers</a></li>
      //  <li><a href="https://help.tryheadshot.pro" target="_blank" class="hover:text-white text-[#999999]">Help Center</a></li>
      //  <li><a href="http://discord.gg/invite/tryheadshot" target="_blank" class="hover:text-white text-[#999999]">Community</a></li>
      //  </ul>
      //  <ul class="flex-1 font-display text-lg leading-snug">
      //  <li class="uppercase mb-6">Resources</li>
      //  <li><a href="https://research.tryheadshot.pro/" target="_blank" class="hover:text-white text-[#999999]">TryHeadshot Research</a></li>
      //  <li><a href="https://studios.tryheadshot.pro/" target="_blank" class="hover:text-white text-[#999999]">TryHeadshot Studios</a></li>
      //  <li><a href="https://academy.tryheadshot.pro/" target="_blank" class="hover:text-white text-[#999999]">TryHeadshot Academy</a></li>
      //  <li><a href="/educators" target="_self" class="hover:text-white text-[#999999]">Educators</a></li>
      //  <li><a href="/status" target="_self" class="hover:text-white text-[#999999]">System Status</a></li>
      //  <li><a href="/resources" target="_self" class="hover:text-white text-[#999999]">Resources</a></li>
      //  </ul>
      //  <ul class="flex-1 font-display text-lg leading-snug">
      //  <li class="uppercase mb-6">Company</li>
      //  <li><a href="/about" target="_self" class="hover:text-white text-[#999999]">About Us</a></li>
      //  <li><a href="/careers" target="_self" class="hover:text-white text-[#999999]">Careers</a></li>
      //  <li><a href="/blog" target="_self" class="hover:text-white text-[#999999]">Blog</a></li>
      //  <li><a href="/data-security" target="_self" class="hover:text-white text-[#999999]">Data Security</a></li>
      //  <li><a href="/contact" target="_self" class="hover:text-white text-[#999999]">Contact Us</a></li>
      //  <li>
      //  <a href="https://tryheadshot-static-assets.s3.amazonaws.com/media-kit/01.Press_Kit_TryHeadshot_2022.zip" target="_self" class="hover:text-white text-[#999999]">Media Kit</a>
      //  </li>
      //  </ul>
      //  <ul class="flex-1 font-display text-lg leading-snug">
      //  <li class="uppercase mb-6">Connect</li>
      //  <li>
      //  <a href="mailto:press@tryheadshot.pro" target="_self" class="hover:text-white text-[#999999]">Press</a></li>
      //  <li>
      //  <a href="mailto:partnerships@tryheadshot.pro" target="_self" class="hover:text-white text-[#999999]">Partnerships</a></li>
      //  <li>
      //  <a href="https://twitter.com/tryheadshot" target="_blank" class="hover:text-white text-[#999999]">Twitter</a>
      //  </li>
      //  <li>
      //  <a href="http://discord.gg/invite/tryheadshot" target="_blank" class="hover:text-white text-[#999999]">Discord</a>
      //  </li>
      //  <li>
      //  <a href="https://www.youtube.com/tryheadshot" target="_blank" class="hover:text-white text-[#999999]">Youtube</a>
      //  </li>
      //  <li>
      //  <a href="https://instagram.com/tryheadshotapp" target="_blank" class="hover:text-white text-[#999999]">Instagram</a>
      //  </li>
      //  <li>
      //  <a href="https://www.tiktok.com/@tryheadshot" target="_blank" class="hover:text-white text-[#999999]">TikTok</a>
      //  </li>
      //  <li>
      //  <a href="mailto:marketing@tryheadshot.pro" target="_self" class="hover:text-white text-[#999999]">Creators</a>
      //  </li>
      //  </ul>
      //  </div>
      //  </div>
      //  <div class="rw-container block md:hidden pt-10">
      //  <button class="rw-mobilenav-item flex items-center focus:outline-none text-2xl">Product<svg class="ml-3 transition duration-700 delay-100 w-3.5" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z" fill="#fff"></path></svg></button>
      //  <div style={{maxHeight:"0px"}} class="transition-all duration-500 overflow-auto mb-2">
      //  <ul class="rw-mobilenav-list"><li><a class="" href="/ai-magic-tools/gen-1/">Gen-1</a>
      //  </li>
      //  <li>
      //  <a class="" href="https://research.tryheadshot.pro/gen2">Gen-2</a></li><li><a class="" href="/ai-magic-tools/">AI Magic Tools</a>
      //  </li>
      //  <li>
      //  <a class="" href="/green-screen/">Green Screen</a></li><li>
      //  <a class="" href="/inpainting/">Inpainting</a>
      //  </li>
      //  <li>
      //  <a class="" href="/motion-tracking/">Motion Tracking</a>
      //  </li>
      //  </ul>
      //  </div>
      //  <button class="rw-mobilenav-item flex items-center focus:outline-none text-2xl">Get Started<svg class="ml-3 transition duration-700 delay-100 w-3.5" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z" fill="#fff"></path></svg></button>
      //  <div style={{maxHeight:"0px"}} class="transition-all duration-500 overflow-auto mb-2"><ul class="rw-mobilenav-list">
      //  <li><a href="https://app.tryheadshot.pro/login" target="_blank" class="">Login</a>
      //  </li><li><a class="" href="/pricing/">Pricing</a></li><li><a href="/customers" target="_blank" class="">Customers</a>
      //  </li><li><a href="https://help.tryheadshot.pro" target="_blank" class="">Help Center</a></li>
      //  <li>
      //  <a href="http://discord.gg/invite/tryheadshot" target="_blank" class="">Community</a></li>
      //  </ul>
      //  </div><button class="rw-mobilenav-item flex items-center focus:outline-none text-2xl">Resources<svg class="ml-3 transition duration-700 delay-100 w-3.5" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z" fill="#fff"></path>
      //  </svg></button>
      //  <div style={{maxHeight:"0px"}} class="transition-all duration-500 overflow-auto mb-2"><ul class="rw-mobilenav-list">
      //  <li><a href="https://research.tryheadshot.pro/" target="_blank" class="">TryHeadshot Research</a></li>
      //  <li><a href="https://studios.tryheadshot.pro/" target="_blank" class="">TryHeadshot Studios</a></li>
      //  <li><a href="https://academy.tryheadshot.pro/" target="_blank" class="">TryHeadshot Academy</a></li>
      //  <li><a class="" href="/educators/">Educators</a></li><li><a class="" href="/status/">System Status</a>
      //  </li><li><a class="" href="/resources/">Resources</a></li>
      //  </ul>
      //  </div>
      //  <button class="rw-mobilenav-item flex items-center focus:outline-none text-2xl">Company<svg class="ml-3 transition duration-700 delay-100 w-3.5" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z" fill="#fff"></path></svg></button>
      //  <div style={{maxHeight:"0px"}} class="transition-all duration-500 overflow-auto mb-2"><ul class="rw-mobilenav-list"><li>
      //  <a class="" href="/about/">About Us</a></li>
      //  <li><a class="" href="/careers/">Careers</a></li>
      //  <li><a class="" href="/blog/">Blog</a></li>
      //  <li><a class="" href="/data-security/">Data Security</a></li>
      //  <li><a class="" href="/contact/">Contact Us</a></li>
      //  <li><a class="" href="https://tryheadshot-static-assets.s3.amazonaws.com/media-kit/01.Press_Kit_TryHeadshot_2022.zip">Media Kit</a>
      //  </li>
      //  </ul>
      //  </div>
      //  <button class="rw-mobilenav-item flex items-center focus:outline-none text-2xl">Connect<svg class="ml-3 transition duration-700 delay-100 w-3.5" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z" fill="#fff"></path></svg></button><div style={{maxHeight:"0px"}} class="transition-all duration-500 overflow-auto mb-2"><ul class="rw-mobilenav-list">
      //  <li>
      //  <a class="" href="mailto:press@tryheadshot.pro">Press</a>
      //  </li>
      //  <li>
      //  <a class="" href="mailto:partnerships@tryheadshot.pro">Partnerships</a></li>
      //  <li><a href="https://twitter.com/tryheadshot" target="_blank" class="">Twitter</a></li>
      //  <li><a href="http://discord.gg/invite/tryheadshot" target="_blank" class="">Discord</a>
      //  </li><li><a href="https://www.youtube.com/tryheadshot" target="_blank" class="">Youtube</a></li>
      //  <li><a href="https://instagram.com/tryheadshotapp" target="_blank" class="">Instagram</a></li>
      //  <li><a href="https://www.tiktok.com/@tryheadshot" target="_blank" class="">TikTok</a></li>
      //  <li><a class="" href="mailto:marketing@tryheadshot.pro">Creators</a></li></ul></div>
      //  </div>
      //  <div class="rw-container flex mt-14 md:mt-64 text-lg lg:justify-end relative bg-[#761FE3] text-[#C8B4E4] pt-10"><div class="lg:w-1/5 mb-10 hidden md:block pr-12">2023 TryHeadshot AI, Inc.</div><div class="md:w-4/5 w-full flex flex-col md:flex-row md:justify-start"><ul class="flex flex-col md:flex-row md:space-x-11">
      //  <li><a href="/terms-of-use" class="hover:text-white">Terms of Use</a></li><li><a href="/privacy-policy" class="hover:text-white">Privacy Policy</a></li><li><a href="/coc" class="hover:text-white">Code of Conduct</a></li></ul><div class="flex mt-32 md:mt-0 md:mr-32 justify-between"><svg class="transform translate-y-1 md:hidden" width="120" height="21" viewBox="0 0 120 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.422712H4.55581L4.97852 2.818C5.87089 0.939335 7.79649 0 9.81606 0C10.8024 0 11.7887 0.234851 12.4932 0.516651L11.4129 6.05872C10.7084 5.63602 9.81609 5.35422 8.73586 5.35422C6.90416 5.35422 5.40117 6.62231 5.40117 9.39335V18.2701H0V0.422712Z" class="fill-current"></path><path d="M14.5596 11.6945V0.422472H19.9607V10.6612C19.9607 12.7278 21.135 13.808 22.8258 13.808C24.5635 13.808 26.0664 12.446 26.0664 9.44009V0.375488H31.4676V18.1759H26.9588L26.3483 15.8276C25.5029 17.2366 23.3424 18.5986 20.7123 18.5986C17.2367 18.6456 14.5596 16.3912 14.5596 11.6945Z" class="fill-current"></path><path d="M34.5205 0.422712H39.0294L39.6399 2.77105C40.4853 1.36205 42.5988 0 45.2289 0C48.7045 0 51.3346 2.25441 51.3346 6.90411V18.2231H45.9334V8.03133C45.9334 5.91783 44.8532 4.79061 43.0685 4.79061C41.4247 4.79061 39.9217 6.15266 39.9217 9.2055V18.2231H34.5205V0.422712Z" class="fill-current"></path><path d="M52.2739 0.422852H57.769L61.0097 12.4933L63.8747 4.55592L62.4657 0.422852H67.9139L71.4364 12.4933L74.5831 0.422852H80.1252L74.3013 18.2232H68.6653L66.223 11.1313L63.7338 18.2232H58.1448L52.2739 0.422852Z" class="fill-current"></path><path d="M80.2192 9.34639C80.2192 3.19375 84.6341 0 88.6733 0C91.1625 0 92.9472 0.986296 93.8396 2.01956L94.3562 0.422712H99.3817V18.2231H94.591L93.8396 16.4853C93.0881 17.3777 91.4913 18.6458 88.4384 18.6458C84.0705 18.6458 80.2192 15.0294 80.2192 9.34639ZM94.0744 9.34639C94.0744 6.48142 92.2427 4.69667 89.8944 4.69667C87.4991 4.69667 85.7143 6.52839 85.7143 9.34639C85.7143 12.2114 87.546 13.9961 89.8944 13.9961C92.1957 13.9961 94.0744 12.2114 94.0744 9.34639Z" class="fill-current"></path><path d="M105.065 25.3622L108.071 17.2839L100.979 0.422852H106.802L110.748 11.4131L114.317 0.422852H120L110.654 25.3622H105.065Z" class="fill-current"></path></svg><div class="lg:w-1/5 mb-6 justify-between flex md:hidden">2023 TryHeadshot AI, Inc.</div></div></div></div></footer>
      //   </div>
      //   </div>







      <div id="__next" data-reactroot="">
        <div id="layout" className="mainclass">
          <div id="nav-overlay" class="fixed w-full h-full top-0 bg-black bg-opacity-10 z-20 transition-opacity duration-300 hidden backdrop-blur-sm pointer-events-none"></div>
          <nav class="bg-[#F1F1F1] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class="max-w-screen-2xl flex flex-wrap items-end justify-between mx-auto p-4">
              <a href="#" class="flex items-center ">

                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TRYHEADSHOT</span>
              </a>
              <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
              <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#F1F1F1] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#F1F1F1] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                  </li>
                  <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

                    <div id="dropdownNavbar" class="z-10 hidden font-normal bg-[#F1F1F1] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                      </ul>
                      <div class="py-1">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>


          <div class="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-md z-[998] transition-opacity duration-200 invisible opacity-0"></div>
          <section class="flex flex-col md:flex-row pt-32 md:pt-36 pb-20 md:pb-9 bg-[#F1F1F1]" data-background="bg-black">
            <div class="rw-container relative text-center md:text-left p-8">
              <div class="mb-7 text-xl font-semibold">AI Magic Tools</div>
              <div class="text-[56px] md:text-[70px] xxl:text-[50px] mb-10 md:mb-12 leading-none tracking-tight font-semibold md:w-3/4">Studio-Quality Headshots in 30 Minutes — Powered by AI</div>
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2">
                  <div class="block md:hidden mb-6">
                    {/* <video class="rounded-md" autoPlay loop muted playsInline>
                      <source type="video/mp4" />
                      <source src="https://d3phaj0sisr2ct.cloudfront.net/site/magic-tools/text-to-image.mp4" type="video/mp4" />
                    </video> */}
                    <img src="/genimage.png"></img>
                  </div>
                  <div class="text-lg md:text-2xl leading-tight mb-12 font-medium md:pr-20">Skip the studio. Upload your selfies and get 20+ professional headshots tailored to your personal brand, delivered in under 30 minutes.</div>
                  <a href="/waitlist" class="text-black flex md:inline-flex items-center justify-center py-3 px-6 bg-[#A8AFB9] bg-opacity-30 rounded-full hover:bg-opacity-70 transition-all duration-150">
                    <div class="text-xl font-semibold leading-tight">Get Your Headshots</div>
                    <svg class="ml-4" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21425 7.12711L1.10757 2.02044L2.12891 0.999104L8.25692 7.12711L2.12891 13.2551L1.10757 12.2338L6.21425 7.12711Z" class="fill-current"></path>
                      <path d="M1.10757 2.02044L0.754018 1.66689L0.400465 2.02044L0.754018 2.37399L1.10757 2.02044ZM6.21425 7.12711L6.5678 7.48067L6.92135 7.12711L6.5678 6.77356L6.21425 7.12711ZM2.12891 0.999104L2.48246 0.645551L2.12891 0.291997L1.77535 0.64555L2.12891 0.999104ZM8.25692 7.12711L8.61047 7.48067L8.96402 7.12711L8.61047 6.77356L8.25692 7.12711ZM2.12891 13.2551L1.77535 13.6087L2.12891 13.9622L2.48246 13.6087L2.12891 13.2551ZM1.10757 12.2338L0.754018 11.8802L0.400465 12.2338L0.754018 12.5873L1.10757 12.2338ZM0.754018 2.37399L5.86069 7.48067L6.5678 6.77356L1.46112 1.66689L0.754018 2.37399ZM1.77535 0.64555L0.754018 1.66689L1.46112 2.37399L2.48246 1.35266L1.77535 0.64555ZM0.754018 12.5873L1.77535 13.6087L2.48246 12.9016L1.46112 11.8802L0.754018 12.5873ZM5.86069 6.77356L0.754018 11.8802L1.46112 12.5873L6.5678 7.48067L5.86069 6.77356ZM8.61047 6.77356L2.48246 0.645551L1.77535 1.35266L7.90336 7.48067L8.61047 6.77356ZM2.48246 13.6087L8.61047 7.48067L7.90336 6.77356L1.77535 12.9016L2.48246 13.6087Z" class="fill-current"></path>
                    </svg>
                  </a>
                </div>
                <div class="md:w-1/2 mt-6 md:mt-0 hidden md:block">
                <img src="/genimage.png" class="h-50"></img>
                </div>
              </div>
            </div>
          </section>
          <section class="bg-black">
            <div class="rw-container p-8">
              <div class="pt-6 lg:pt-12 pb-2/16 ">
                <h2 class="leading-tight text-4xl lg:text-[4.2vw] xxl:text-[60px] font-semibold tracking-tight text-white">Key Benefits</h2>
              </div>
              <div class="flex flex-col lg:flex-row lg:space-x-20 border-t border-[#00000025] lg:border-t-0 divide-y lg:divide-y-0 divide-[#00000025]">
                <div class="flex-1 flex flex-col pt-7 pb-10 lg:pt-14 lg:pb-36 ">

                  <div class="text-3xl lg:text-[3.9vw] xxl:text-[60px] leading-none font-medium mb-10 lg:mb-22 text-white">Custom-Trained for You</div>
                  <div class="h-32 text-lg lg:text-xl mt-auto text-white">We fine-tune our AI on your own photos for authentic, hyper-realistic results.</div>
                </div>
                <div class="flex-1 flex flex-col pt-7 pb-10 lg:pt-14 lg:pb-36 ">

                  <div class="text-3xl lg:text-[3.9vw] xxl:text-[60px] leading-none font-medium mb-10 lg:mb-22 text-white">Lightning-Fast Delivery</div>
                  <div class="h-32 text-lg lg:text-xl mt-auto text-white">Perfect headshots in your inbox before your next meeting or interview.</div>
                </div>
                <div class="flex-1 flex flex-col pt-7 pb-10 lg:pt-14 lg:pb-36">

                  <div class="text-3xl lg:text-[3.9vw] xxl:text-[60px] leading-none font-medium mb-10 lg:mb-22 text-white">50+ Hand-Picked Styles</div>
                  <div class="h-32 text-lg lg:text-xl mt-auto text-white">Business, casual, creative—everything that best represents you.</div>
                </div>
              </div>
            </div>
          </section>
          <section class="bg-[#F2D972]">
            <div class="rw-container p-8">
              <div class="pt-6 lg:pt-12 pb-2/16 ">
                <h2 class="leading-tight text-4xl lg:text-[4.2vw] xxl:text-[60px] font-semibold tracking-tight">How to use Text to Image</h2>
              </div>
              <div class="flex flex-col lg:flex-row lg:space-x-20 border-t border-[#00000025] lg:border-t-0 divide-y lg:divide-y-0 divide-[#00000025]">
                <div class="flex-1 flex flex-col pt-7 pb-10 lg:pt-14 lg:pb-36 ">
                  <div class="text-3xl lg:text-[3.9vw] leading-none xxl:text-[60px] font-medium text-black mix-blend-soft-light">Step 1

                  </div>
                  <div class="text-3xl lg:text-[3.9vw] xxl:text-[60px] leading-none font-medium mb-10 lg:mb-22">Upload 5–10 Photos</div>
                  <div class="h-32 text-lg lg:text-xl mt-auto">Snap or select images; our AI guides you to pick the best shots.</div>
                </div>
                <div class="flex-1 flex flex-col pt-7 pb-10 lg:pt-14 lg:pb-36 ">
                  <div class="text-3xl lg:text-[3.9vw] leading-none xxl:text-[60px] font-medium text-black mix-blend-soft-light">Step 2

                  </div>
                  <div class="text-3xl lg:text-[3.9vw] xxl:text-[60px] leading-none font-medium mb-10 lg:mb-22">AI-Powered Generation</div>
                  <div class="h-32 text-lg lg:text-xl mt-auto">In the cloud, we train a custom model on your face for photo-studio quality.</div>
                </div>
                <div class="flex-1 flex flex-col pt-7 pb-10 lg:pt-14 lg:pb-36">
                  <div class="text-3xl lg:text-[3.9vw] leading-none xxl:text-[60px] font-medium text-black mix-blend-soft-light">Step 3

                  </div>
                  <div class="text-3xl lg:text-[3.9vw] xxl:text-[60px] leading-none font-medium mb-10 lg:mb-22">Download & Share</div>
                  <div class="h-32 text-lg lg:text-xl mt-auto">Receive 20+ high-res headshots ready for LinkedIn, websites, portfolios and more.</div>
                </div>
              </div>
            </div>
          </section>

          <section class="lg:py-16 bg-black text-white relative">
            <div class="rw-container p-8">
              <div class="pt-6 lg:pt-40 pb-12 lg:pb-2/16">
                <h2 class="text-center md:text-left leading-tight text-5xl lg:text-[7vw] xxl:text-[100px] tracking-tight font-semibold">Why TryHeadshot?</h2>
                <div class="text-lg w-1/2 mt-20 lg:mt-10"></div>
                <a href="/waitlist" class="flex md:inline-flex items-center justify-center py-3 px-6 bg-[#A8AFB9] bg-opacity-30 rounded-full hover:bg-opacity-70 transition-all duration-150">
                  <div class="text-xl font-semibold leading-tight">Start Creating Headshots</div>
                  <svg class="ml-4" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21425 7.12711L1.10757 2.02044L2.12891 0.999104L8.25692 7.12711L2.12891 13.2551L1.10757 12.2338L6.21425 7.12711Z" class="fill-current"></path>
                    <path d="M1.10757 2.02044L0.754018 1.66689L0.400465 2.02044L0.754018 2.37399L1.10757 2.02044ZM6.21425 7.12711L6.5678 7.48067L6.92135 7.12711L6.5678 6.77356L6.21425 7.12711ZM2.12891 0.999104L2.48246 0.645551L2.12891 0.291997L1.77535 0.64555L2.12891 0.999104ZM8.25692 7.12711L8.61047 7.48067L8.96402 7.12711L8.61047 6.77356L8.25692 7.12711ZM2.12891 13.2551L1.77535 13.6087L2.12891 13.9622L2.48246 13.6087L2.12891 13.2551ZM1.10757 12.2338L0.754018 11.8802L0.400465 12.2338L0.754018 12.5873L1.10757 12.2338ZM0.754018 2.37399L5.86069 7.48067L6.5678 6.77356L1.46112 1.66689L0.754018 2.37399ZM1.77535 0.64555L0.754018 1.66689L1.46112 2.37399L2.48246 1.35266L1.77535 0.64555ZM0.754018 12.5873L1.77535 13.6087L2.48246 12.9016L1.46112 11.8802L0.754018 12.5873ZM5.86069 6.77356L0.754018 11.8802L1.46112 12.5873L6.5678 7.48067L5.86069 6.77356ZM8.61047 6.77356L2.48246 0.645551L1.77535 1.35266L7.90336 7.48067L8.61047 6.77356ZM2.48246 13.6087L8.61047 7.48067L7.90336 6.77356L1.77535 12.9016L2.48246 13.6087Z" class="fill-current"></path>
                  </svg>
                </a>
              </div>
              <div class="grid lg:grid-cols-3 gap-10 border-t border-t-[#ffffff25] lg:border-t-0 divide-y lg:divide-y-0 divide-[#ffffff25]">
                <div class="flex flex-1 flex-col lg:flex-row pt-6 md:pt-0 ">
                  <div>
                    <h3 class="text-4xl mb-6 font-medium">Realism You Can Trust</h3>
                    <div class="lg:pr-12 text-lg lg:text-xl leading-tight">No flat “AI look”—just genuine expressions and crisp detail</div>
                  </div>
                </div>
                <div class="flex flex-1 flex-col lg:flex-row pt-6 md:pt-0">
                  <div>
                    <h3 class="text-4xl mb-6 font-medium">Privacy First</h3>
                    <div class="lg:pr-12 text-lg lg:text-xl leading-tight">Your photos auto-delete after 7 days, and you retain full control.</div>
                  </div>
                </div>
                <div class="flex flex-1 flex-col lg:flex-row pt-6 md:pt-0">
                  <div>
                    <h3 class="text-4xl mb-6 font-medium">Transparent Pricing</h3>
                    <div class="lg:pr-12 text-lg lg:text-xl leading-tight">Straightforward plans—pay only for the headshots you choose, with no hidden fees.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="bg-[#292929] text-white pt-6 pb-8 lg:pt-12 lg:pb-32" data-background="bg-black">
            <div class="rw-container mb-10 lg:mb-40 p-8">
              <div class="text-center md:text-left leading-tight text-5xl lg:text-[7vw] xxl:text-[100px] tracking-tight font-semibold">FAQs</div>
            </div>
            <div class="rw-container py-11 text-white p-8">
              <div class="border-t border-white">
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">What kind of photos do I need to upload?</div>
                    <div class="transition duration-150 transform type=button"  data-collapse-target="collapse" onClick={(e)=>this.handleFaqClicks(e,"1")} >
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="path1" d="M22.6386 1L22.6384 44.0246" stroke-width="2" ></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>
                    </div>
                  </div>
                  <div id="faq1" data-collapse="collapse" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">Make variety a priority. Varied facial expressions and varied backgrounds, taken at various times of the day, are the keys to high quality input photos. Oh, and minimal makeup and accessories, please!</div>
                  </div>
                </div>
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">What do you do with my uploaded photos?</div>
                    <div class="transition duration-150 transform" onClick={(e)=>this.handleFaqClicks(e,"2")}>
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="path2" d="M22.6386 1L22.6384 44.0246" stroke-width="2"></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>

                    </div>
                  </div>
                  <div id="faq2" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">The photos you upload are used to train our AI model so it can create realistic AI headshots. These input photos are deleted within 7 days, but you can instantly delete them at any time with our 'Delete' button.</div>
                  </div>
                </div>
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">Who owns my AI photos?</div>
                    <div class="transition duration-150 transform" onClick={(e)=>this.handleFaqClicks(e,"3")}>
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  id="path3" d="M22.6386 1L22.6384 44.0246" stroke-width="2"></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>
                    </div>
                  </div>
                  <div id="faq3" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">You do. We grant you full commercial license and ownership over your photos.</div>
                  </div>
                </div>
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">What if I don't like my photos?</div>
                    <div class="transition duration-150 transform" onClick={(e)=>this.handleFaqClicks(e,"4")}>
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  id="path4" d="M22.6386 1L22.6384 44.0246" stroke-width="2"></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>
                    </div>
                  </div>
                  <div id="faq4" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">No problem. If you don't get a single profile-worthy headshot, we'll refund your entire purchase. It's our Profile-Worthy guarantee.</div>
                  </div>
                </div>
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">How long does an AI headshot take?</div>
                    <div class="transition duration-150 transform type=button"  data-collapse-target="collapse" onClick={(e)=>this.handleFaqClicks(e,"5")} >
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  id="path5" d="M22.6386 1L22.6384 44.0246" stroke-width="2"></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>
                    </div>
                  </div>
                  <div id="faq5" data-collapse="collapse" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">We don't cut corners when it comes to generating photorealistic AI headshots. We're not the fastest, but you'll always get same-day results with ForgeHeadshots. Our Executive package is delivered in 1 hour or less.</div>
                  </div>
                </div>
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">What do people misunderstand about AI headshots?</div>
                    <div class="transition duration-150 transform type=button"  data-collapse-target="collapse" onClick={(e)=>this.handleFaqClicks(e,"6")} >
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  id="path6" d="M22.6386 1L22.6384 44.0246" stroke-width="2"></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>
                    </div>
                  </div>
                  <div id="faq6" data-collapse="collapse" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">Not every photo is perfect. Due to the nature of AI, you might see some strange photos. Try headshot pro tries to make this clear from the start: not every photo is perfect, but we promise you'll find a profile-worthy headshot in every order to make it all worth it.</div>
                  </div>
                </div>
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">How many good photos can I expect?</div>
                    <div class="transition duration-150 transform type=button"  data-collapse-target="collapse" onClick={(e)=>this.handleFaqClicks(e,"7")} >
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  id="path7" d="M22.6386 1L22.6384 44.0246" stroke-width="2"></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>
                    </div>
                  </div>
                  <div id="faq7" data-collapse="collapse" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">The amount of keeper headshots you get back will largely depend on the photos you provide us with. Customers who make an effort to follow the instructions closely often walk away with 8–10+ incredible photos. At the very least, we guarantee you'll get a Profile-Worthy headshot back.</div>
                  </div>
                </div>
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">What is the most realistic headshot AI?</div>
                    <div class="transition duration-150 transform type=button"  data-collapse-target="collapse" onClick={(e)=>this.handleFaqClicks(e,"8")} >
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  id="path8" d="M22.6386 1L22.6384 44.0246" stroke-width="2"></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>
                    </div>
                  </div>
                  <div id="faq8" data-collapse="collapse" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">Try headshot pro is the most realistic headshot AI with the most reviews. It's the only major AI headshot generator using Flux to generate realistic AI headshots. </div>
                  </div>
                </div>
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">Can I use AI headshots on LinkedIn?</div>
                    <div class="transition duration-150 transform type=button"  data-collapse-target="collapse" onClick={(e)=>this.handleFaqClicks(e,"9")} >
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  id="path9" d="M22.6386 1L22.6384 44.0246" stroke-width="2"></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>
                    </div>
                  </div>
                  <div id="faq9" data-collapse="collapse" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">25% of Try headshot pro customers use their AI headshots on LinkedIn. It's totally okay to use AI headshots on LinkedIn.</div>
                  </div>
                </div>
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">Can ChatGPT generate headshots?</div>
                    <div class="transition duration-150 transform type=button"  data-collapse-target="collapse" onClick={(e)=>this.handleFaqClicks(e,"10")} >
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  id="path10" d="M22.6386 1L22.6384 44.0246" stroke-width="2"></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>
                    </div>
                  </div>
                  <div id="faq10" data-collapse="collapse" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">Yes, ChatGPT can generate very basic headshots. These headshots aren't realistic enough to use professionally, but they can be fun to play around with. Use Try headshot pro for AI headshots you can use professionally.</div>
                  </div>
                </div>
                <div class="lg:py-8 py-4 lg:px-5 border-b border-white">
                  <div class="flex justify-between items-center cursor-pointer">
                    <div class="text-lg md:text-2xl font-display leading-none pr-1/8">What AI should I use for headshots?</div>
                    <div class="transition duration-150 transform type=button"  data-collapse-target="collapse" onClick={(e)=>this.handleFaqClicks(e,"11")} >
                      <svg class="stroke-current" width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  id="path11" d="M22.6386 1L22.6384 44.0246" stroke-width="2"></path>
                        <path d="M44.0244 22.5124L0.999795 22.5122" stroke-width="2"></path>
                      </svg>
                    </div>
                  </div>
                  <div id="faq11" data-collapse="collapse" style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-hidden">
                    <div class="py-8 lg:w-5/8 text-lg">The best AI headshot generators are using Flux to maximize realism. Right now, Try headshot pro is the only major headshot AI powered by Flux. You can get up to 200 professional AI headshots within 2 hours for just $29.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-12 px-8">
              <div class="text-lg">
                Want more help? <br />
                Write us at <a href="mailto:support@tryheadshot.pro" class="underline">support@tryheadshot.com</a>
                .
              </div>
            </div>
          </section>
          <div class="bg-[#1D1D1D]">
            <div class="rw-container py-7 lg:py-14 p-8">
              <div class="text-center lg:text-left">
                <div class="text-[28px] lg:text-[3.8vw] text-white leading-tight font-semibold tracking-tight">Everything you need to make anything you want.</div>
                <div class="mt-6">
                  <a href="/waitlist" class="text-white items-center justify-center py-3 px-6 bg-[#292929] rounded-full backdrop-blur-md inline-flex">
                    <div class="text-xl font-semibold leading-tight">Try ThryHeadshot.pro for Free</div>
                    <svg class="ml-4" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21425 7.12711L1.10757 2.02044L2.12891 0.999104L8.25692 7.12711L2.12891 13.2551L1.10757 12.2338L6.21425 7.12711Z" fill="white"></path>
                      <path d="M1.10757 2.02044L0.754018 1.66689L0.400465 2.02044L0.754018 2.37399L1.10757 2.02044ZM6.21425 7.12711L6.5678 7.48067L6.92135 7.12711L6.5678 6.77356L6.21425 7.12711ZM2.12891 0.999104L2.48246 0.645551L2.12891 0.291997L1.77535 0.64555L2.12891 0.999104ZM8.25692 7.12711L8.61047 7.48067L8.96402 7.12711L8.61047 6.77356L8.25692 7.12711ZM2.12891 13.2551L1.77535 13.6087L2.12891 13.9622L2.48246 13.6087L2.12891 13.2551ZM1.10757 12.2338L0.754018 11.8802L0.400465 12.2338L0.754018 12.5873L1.10757 12.2338ZM0.754018 2.37399L5.86069 7.48067L6.5678 6.77356L1.46112 1.66689L0.754018 2.37399ZM1.77535 0.64555L0.754018 1.66689L1.46112 2.37399L2.48246 1.35266L1.77535 0.64555ZM0.754018 12.5873L1.77535 13.6087L2.48246 12.9016L1.46112 11.8802L0.754018 12.5873ZM5.86069 6.77356L0.754018 11.8802L1.46112 12.5873L6.5678 7.48067L5.86069 6.77356ZM8.61047 6.77356L2.48246 0.645551L1.77535 1.35266L7.90336 7.48067L8.61047 6.77356ZM2.48246 13.6087L8.61047 7.48067L7.90336 6.77356L1.77535 12.9016L2.48246 13.6087Z" fill="white"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <footer class="lg:pt-5 text-white bg-[#000000] relative">
            {/* <div class="rw-container flex-col lg:flex-row hidden md:flex p-8">
              <div class="lg:w-1/5 mb-6 justify-between flex">
                <div class="h-5">
                  <svg class="transform translate-y-1 h-full" viewBox="0 0 120 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.422712H4.55581L4.97852 2.818C5.87089 0.939335 7.79649 0 9.81606 0C10.8024 0 11.7887 0.234851 12.4932 0.516651L11.4129 6.05872C10.7084 5.63602 9.81609 5.35422 8.73586 5.35422C6.90416 5.35422 5.40117 6.62231 5.40117 9.39335V18.2701H0V0.422712Z" class="fill-current"></path>
                    <path d="M14.5596 11.6945V0.422472H19.9607V10.6612C19.9607 12.7278 21.135 13.808 22.8258 13.808C24.5635 13.808 26.0664 12.446 26.0664 9.44009V0.375488H31.4676V18.1759H26.9588L26.3483 15.8276C25.5029 17.2366 23.3424 18.5986 20.7123 18.5986C17.2367 18.6456 14.5596 16.3912 14.5596 11.6945Z" class="fill-current"></path>
                    <path d="M34.5205 0.422712H39.0294L39.6399 2.77105C40.4853 1.36205 42.5988 0 45.2289 0C48.7045 0 51.3346 2.25441 51.3346 6.90411V18.2231H45.9334V8.03133C45.9334 5.91783 44.8532 4.79061 43.0685 4.79061C41.4247 4.79061 39.9217 6.15266 39.9217 9.2055V18.2231H34.5205V0.422712Z" class="fill-current"></path>
                    <path d="M52.2739 0.422852H57.769L61.0097 12.4933L63.8747 4.55592L62.4657 0.422852H67.9139L71.4364 12.4933L74.5831 0.422852H80.1252L74.3013 18.2232H68.6653L66.223 11.1313L63.7338 18.2232H58.1448L52.2739 0.422852Z" class="fill-current"></path>
                    <path d="M80.2192 9.34639C80.2192 3.19375 84.6341 0 88.6733 0C91.1625 0 92.9472 0.986296 93.8396 2.01956L94.3562 0.422712H99.3817V18.2231H94.591L93.8396 16.4853C93.0881 17.3777 91.4913 18.6458 88.4384 18.6458C84.0705 18.6458 80.2192 15.0294 80.2192 9.34639ZM94.0744 9.34639C94.0744 6.48142 92.2427 4.69667 89.8944 4.69667C87.4991 4.69667 85.7143 6.52839 85.7143 9.34639C85.7143 12.2114 87.546 13.9961 89.8944 13.9961C92.1957 13.9961 94.0744 12.2114 94.0744 9.34639Z" class="fill-current"></path>
                    <path d="M105.065 25.3622L108.071 17.2839L100.979 0.422852H106.802L110.748 11.4131L114.317 0.422852H120L110.654 25.3622H105.065Z" class="fill-current"></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-1 space-x-4">
                <ul class="flex-1 font-display text-lg leading-snug">
                  <li class="uppercase mb-6">Product</li>
                  <li>
                    <a href="/ai-magic-tools/gen-1" target="_self" class="hover:text-white text-[#999999]">Gen-1</a>
                  </li>
                  <li>
                    <a href="https://research.tryheadshot.pro/gen2" target="_self" class="hover:text-white text-[#999999]">Gen-2</a>
                  </li>
                  <li>
                    <a href="/ai-magic-tools" target="_self" class="hover:text-white text-[#999999]">AI Magic Tools</a>
                  </li>
                  <li>
                    <a href="/green-screen" target="_self" class="hover:text-white text-[#999999]">Green Screen</a>
                  </li>
                  <li>
                    <a href="/inpainting" target="_self" class="hover:text-white text-[#999999]">Inpainting</a>
                  </li>
                  <li>
                    <a href="/motion-tracking" target="_self" class="hover:text-white text-[#999999]">Motion Tracking</a>
                  </li>
                </ul>
                <ul class="flex-1 font-display text-lg leading-snug">
                  <li class="uppercase mb-6">Get Started</li>
                  <li>
                    <a href="https://app.tryheadshot.pro/login" target="_blank" class="hover:text-white text-[#999999]">Login</a>
                  </li>
                  <li>
                    <a href="/pricing" target="_self" class="hover:text-white text-[#999999]">Pricing</a>
                  </li>
                  <li>
                    <a href="/customers" target="_blank" class="hover:text-white text-[#999999]">Customers</a>
                  </li>
                  <li>
                    <a href="https://help.tryheadshot.pro" target="_blank" class="hover:text-white text-[#999999]">Help Center</a>
                  </li>
                  <li>
                    <a href="http://discord.gg/invite/tryheadshot" target="_blank" class="hover:text-white text-[#999999]">Community</a>
                  </li>
                </ul>
                <ul class="flex-1 font-display text-lg leading-snug">
                  <li class="uppercase mb-6">Resources</li>
                  <li>
                    <a href="https://research.tryheadshot.pro/" target="_blank" class="hover:text-white text-[#999999]">TryHeadshot Research</a>
                  </li>
                  <li>
                    <a href="https://studios.tryheadshot.pro/" target="_blank" class="hover:text-white text-[#999999]">TryHeadshot Studios</a>
                  </li>
                  <li>
                    <a href="https://academy.tryheadshot.pro/" target="_blank" class="hover:text-white text-[#999999]">TryHeadshot Academy</a>
                  </li>
                  <li>
                    <a href="/educators" target="_self" class="hover:text-white text-[#999999]">Educators</a>
                  </li>
                  <li>
                    <a href="/status" target="_self" class="hover:text-white text-[#999999]">System Status</a>
                  </li>
                  <li>
                    <a href="/resources" target="_self" class="hover:text-white text-[#999999]">Resources</a>
                  </li>
                </ul>
                <ul class="flex-1 font-display text-lg leading-snug">
                  <li class="uppercase mb-6">Company</li>
                  <li>
                    <a href="/about" target="_self" class="hover:text-white text-[#999999]">About Us</a>
                  </li>
                  <li>
                    <a href="/careers" target="_self" class="hover:text-white text-[#999999]">Careers</a>
                  </li>
                  <li>
                    <a href="/blog" target="_self" class="hover:text-white text-[#999999]">Blog</a>
                  </li>
                  <li>
                    <a href="/data-security" target="_self" class="hover:text-white text-[#999999]">Data Security</a>
                  </li>
                  <li>
                    <a href="/contact" target="_self" class="hover:text-white text-[#999999]">Contact Us</a>
                  </li>
                  <li>
                    <a href="https://tryheadshot-static-assets.s3.amazonaws.com/media-kit/01.Press_Kit_TryHeadshot_2022.zip" target="_self" class="hover:text-white text-[#999999]">Media Kit</a>
                  </li>
                </ul>
                <ul class="flex-1 font-display text-lg leading-snug">
                  <li class="uppercase mb-6">Connect</li>
                  <li>
                    <a href="mailto:press@tryheadshot.pro" target="_self" class="hover:text-white text-[#999999]">Press</a>
                  </li>
                  <li>
                    <a href="mailto:partnerships@tryheadshot.pro" target="_self" class="hover:text-white text-[#999999]">Partnerships</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/tryheadshot" target="_blank" class="hover:text-white text-[#999999]">Twitter</a>
                  </li>
                  <li>
                    <a href="http://discord.gg/invite/tryheadshot" target="_blank" class="hover:text-white text-[#999999]">Discord</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/tryheadshot" target="_blank" class="hover:text-white text-[#999999]">Youtube</a>
                  </li>
                  <li>
                    <a href="https://instagram.com/tryheadshotapp" target="_blank" class="hover:text-white text-[#999999]">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@tryheadshot" target="_blank" class="hover:text-white text-[#999999]">TikTok</a>
                  </li>
                  <li>
                    <a href="mailto:marketing@tryheadshot.pro" target="_self" class="hover:text-white text-[#999999]">Creators</a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div class="rw-container block md:hidden pt-10">
              <button class="rw-mobilenav-item flex items-center focus:outline-none text-2xl">
                Product
                <svg class="ml-3 transition duration-700 delay-100 w-3.5 transform rotate-180" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z" fill="#fff"></path>
                </svg>
              </button>
              <div style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-auto mb-2">
                <ul class="rw-mobilenav-list">
                  <li>
                    <a class="" href="/ai-magic-tools/gen-1/">Gen-1</a>
                  </li>
                  <li>
                    <a class="" href="https://research.tryheadshot.pro/gen2">Gen-2</a>
                  </li>
                  <li>
                    <a class="" href="/ai-magic-tools/">AI Magic Tools</a>
                  </li>
                  <li>
                    <a class="" href="/green-screen/">Green Screen</a>
                  </li>
                  <li>
                    <a class="" href="/inpainting/">Inpainting</a>
                  </li>
                  <li>
                    <a class="" href="/motion-tracking/">Motion Tracking</a>
                  </li>
                </ul>
              </div>
              <button class="rw-mobilenav-item flex items-center focus:outline-none text-2xl">
                Get Started
                <svg class="ml-3 transition duration-700 delay-100 w-3.5" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z" fill="#fff"></path>
                </svg>
              </button>
              <div style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-auto mb-2">
                <ul class="rw-mobilenav-list">
                  <li>
                    <a href="https://app.tryheadshot.pro/login" target="_blank" class="">Login</a>
                  </li>
                  <li>
                    <a class="" href="/pricing/">Pricing</a>
                  </li>
                  <li>
                    <a href="/customers" target="_blank" class="">Customers</a>
                  </li>
                  <li>
                    <a href="https://help.tryheadshot.pro" target="_blank" class="">Help Center</a>
                  </li>
                  <li>
                    <a href="http://discord.gg/invite/tryheadshot" target="_blank" class="">Community</a>
                  </li>
                </ul>
              </div>
              <button class="rw-mobilenav-item flex items-center focus:outline-none text-2xl">
                Resources
                <svg class="ml-3 transition duration-700 delay-100 w-3.5" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z" fill="#fff"></path>
                </svg>
              </button>
              <div style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-auto mb-2">
                <ul class="rw-mobilenav-list">
                  <li>
                    <a href="https://research.tryheadshot.pro/" target="_blank" class="">TryHeadshot Research</a>
                  </li>
                  <li>
                    <a href="https://studios.tryheadshot.pro/" target="_blank" class="">TryHeadshot Studios</a>
                  </li>
                  <li>
                    <a href="https://academy.tryheadshot.pro/" target="_blank" class="">TryHeadshot Academy</a>
                  </li>
                  <li>
                    <a class="" href="/educators/">Educators</a>
                  </li>
                  <li>
                    <a class="" href="/status/">System Status</a>
                  </li>
                  <li>
                    <a class="" href="/resources/">Resources</a>
                  </li>
                </ul>
              </div>
              <button class="rw-mobilenav-item flex items-center focus:outline-none text-2xl">
                Company
                <svg class="ml-3 transition duration-700 delay-100 w-3.5" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z" fill="#fff"></path>
                </svg>
              </button>
              <div style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-auto mb-2">
                <ul class="rw-mobilenav-list">
                  <li>
                    <a class="" href="/about/">About Us</a>
                  </li>
                  <li>
                    <a class="" href="/careers/">Careers</a>
                  </li>
                  <li>
                    <a class="" href="/blog/">Blog</a>
                  </li>
                  <li>
                    <a class="" href="/data-security/">Data Security</a>
                  </li>
                  <li>
                    <a class="" href="/contact/">Contact Us</a>
                  </li>
                  <li>
                    <a class="" href="https://tryheadshot-static-assets.s3.amazonaws.com/media-kit/01.Press_Kit_TryHeadshot_2022.zip">Media Kit</a>
                  </li>
                </ul>
              </div>
              <button class="rw-mobilenav-item flex items-center focus:outline-none text-2xl">
                Connect
                <svg class="ml-3 transition duration-700 delay-100 w-3.5" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 19.2857L21.6695 18.0357L12.3554 26.6072L12.3554 -4.6529e-07L10.4546 -5.48378e-07L10.4546 26.6072L1.33049 18.0357L1.06434e-06 19.2857L11.405 30L23 19.2857Z" fill="#fff"></path>
                </svg>
              </button>
              <div style={{ maxHeight: "0px" }} class="transition-all duration-500 overflow-auto mb-2">
                <ul class="rw-mobilenav-list">
                  <li>
                    <a class="" href="mailto:press@tryheadshot.pro">Press</a>
                  </li>
                  <li>
                    <a class="" href="mailto:partnerships@tryheadshot.pro">Partnerships</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/tryheadshot" target="_blank" class="">Twitter</a>
                  </li>
                  <li>
                    <a href="http://discord.gg/invite/tryheadshot" target="_blank" class="">Discord</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/tryheadshot" target="_blank" class="">Youtube</a>
                  </li>
                  <li>
                    <a href="https://instagram.com/tryheadshotapp" target="_blank" class="">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@tryheadshot" target="_blank" class="">TikTok</a>
                  </li>
                  <li>
                    <a class="" href="mailto:marketing@tryheadshot.pro">Creators</a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div class="rw-container p-8 flex mt-14 md:mt-64 text-lg lg:justify-end relative bg-[#761FE3] text-[#C8B4E4] pt-0">
              <div class="lg:w-1/5 mb-10 hidden md:block pr-12">2023 TryHeadshot AI, Inc.</div>
              <div class="md:w-4/5 w-full flex flex-col md:flex-row md:justify-start">
                <ul class="flex flex-col md:flex-row md:space-x-11">
                  <li>
                    <a href="/terms-of-use" class="hover:text-white">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/privacy-policy" class="hover:text-white">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/coc" class="hover:text-white">Code of Conduct</a>
                  </li>
                </ul>
                <div class="flex mt-32 md:mt-0 md:mr-32 justify-between">
                  <svg class="transform translate-y-1 md:hidden" width="120" height="21" viewBox="0 0 120 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.422712H4.55581L4.97852 2.818C5.87089 0.939335 7.79649 0 9.81606 0C10.8024 0 11.7887 0.234851 12.4932 0.516651L11.4129 6.05872C10.7084 5.63602 9.81609 5.35422 8.73586 5.35422C6.90416 5.35422 5.40117 6.62231 5.40117 9.39335V18.2701H0V0.422712Z" class="fill-current"></path>
                    <path d="M14.5596 11.6945V0.422472H19.9607V10.6612C19.9607 12.7278 21.135 13.808 22.8258 13.808C24.5635 13.808 26.0664 12.446 26.0664 9.44009V0.375488H31.4676V18.1759H26.9588L26.3483 15.8276C25.5029 17.2366 23.3424 18.5986 20.7123 18.5986C17.2367 18.6456 14.5596 16.3912 14.5596 11.6945Z" class="fill-current"></path>
                    <path d="M34.5205 0.422712H39.0294L39.6399 2.77105C40.4853 1.36205 42.5988 0 45.2289 0C48.7045 0 51.3346 2.25441 51.3346 6.90411V18.2231H45.9334V8.03133C45.9334 5.91783 44.8532 4.79061 43.0685 4.79061C41.4247 4.79061 39.9217 6.15266 39.9217 9.2055V18.2231H34.5205V0.422712Z" class="fill-current"></path>
                    <path d="M52.2739 0.422852H57.769L61.0097 12.4933L63.8747 4.55592L62.4657 0.422852H67.9139L71.4364 12.4933L74.5831 0.422852H80.1252L74.3013 18.2232H68.6653L66.223 11.1313L63.7338 18.2232H58.1448L52.2739 0.422852Z" class="fill-current"></path>
                    <path d="M80.2192 9.34639C80.2192 3.19375 84.6341 0 88.6733 0C91.1625 0 92.9472 0.986296 93.8396 2.01956L94.3562 0.422712H99.3817V18.2231H94.591L93.8396 16.4853C93.0881 17.3777 91.4913 18.6458 88.4384 18.6458C84.0705 18.6458 80.2192 15.0294 80.2192 9.34639ZM94.0744 9.34639C94.0744 6.48142 92.2427 4.69667 89.8944 4.69667C87.4991 4.69667 85.7143 6.52839 85.7143 9.34639C85.7143 12.2114 87.546 13.9961 89.8944 13.9961C92.1957 13.9961 94.0744 12.2114 94.0744 9.34639Z" class="fill-current"></path>
                    <path d="M105.065 25.3622L108.071 17.2839L100.979 0.422852H106.802L110.748 11.4131L114.317 0.422852H120L110.654 25.3622H105.065Z" class="fill-current"></path>
                  </svg>
                  <div class="lg:w-1/5 mb-6 justify-between flex md:hidden">2023 TryHeadshot AI, Inc.</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>




    );
  }
}
