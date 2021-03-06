import React from "react";
import Header from "../Header/Header";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg|webp)$/)
);

function Home() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <div class="container" style={{ width: "auto" }}>
          <div class="row mt-5">
            <div class="col-12 landing-page-bg p-5">
              <div class="row">
                <div class="col-12 col-md-6 order-2 pt-5 order-md-1">
                  <p class="h2 pb-3 text-capitalize font-weight-light">
                    One Stop Destination For all Your
                    <span class="font-weight-bold"> Exam Preparation</span>
                  </p>
                  <p class="h3 pb-3 font-weight-light">
                    Our <span class="font-weight-bold">3'E</span> Formula
                  </p>
                  <p class="font-weight-bold h4 text-dark">
                    Explore <i class="bi bi-forward-fill text-white"></i>{" "}
                    Enhance
                    <i class="bi bi-forward-fill text-white"></i> Emerge
                    <i class="bi bi-forward-fill text-white"></i>
                  </p>
                  <button class="btn learn-more-btn border mt-4">
                    <i class="bi bi-book"></i> Learn Here
                  </button>
                </div>
                <div class="col-12 mb-md-0 col-md-6 order-1 order-md-2">
                  <img
                    class="landing-bg-image rounded"
                    src={images["education_bg.webp"]}
                    alt="sd"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="outer-block col-md-10 m-auto col-12 bg-white p-3 border rounded">
            <div class="d-flex flex-md-row justify-content-between flex-column">
              <div class="bg-success p-2 mb-2 mb-md-0 border rounded">
                <div class="d-flex flex-row p-2">
                  <div class="p-2">
                    <span style={{ fontSize: "40px" }}>
                      <i class="bi bi-shield-check"></i>
                    </span>
                  </div>
                  <div class="p-2">
                    <p>Trusted Partners</p>
                    <p class="font-weight-bold">2.6 crore+ students</p>
                  </div>
                </div>
              </div>
              <div class="bg-primary p-2 mb-2 mb-md-0 border rounded">
                <div class="d-flex flex-row p-2">
                  <div class="p-2">
                    <span style={{ fontSize: "40px" }}>
                      <i class="bi bi-shield-check"></i>
                    </span>
                  </div>
                  <div class="p-2">
                    <p>Trusted Partners</p>
                    <p class="font-weight-bold">2.6 crore+ students</p>
                  </div>
                </div>
              </div>
              <div class="bg-warning p-2 mb-2 mb-md-0 border rounded">
                <div class="d-flex flex-row p-2">
                  <div class="p-2">
                    <span style={{ fontSize: "40px" }}>
                      <i class="bi bi-shield-check"></i>
                    </span>
                  </div>
                  <div class="p-2">
                    <p>Trusted Partners</p>
                    <p class="font-weight-bold">2.6 crore+ students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-10 p-3 m-auto">
              <p class="h4">Popular Exams</p>
              <p class="pb-2">
                Get Exam ready with popular notes ,study materials,questions as
                per latest version
              </p>
              <div class="d-flex flex-row types justify-content-between border rounded shadow p-3 topics-container">
                <div>
                  <span class="icon-direction-bg">
                    <i class="bi bi-caret-left rounded arrow arrow1 border"></i>
                  </span>
                  <span class="icon-direction-bg">
                    <i class="bi bi-caret-right rounded arrow arrow2 border"></i>
                  </span>
                </div>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
              </div>
            </div>
            <div class="col-10 col-md-10 m-auto pb-md-3 d-flex flex-md-row flex-column justify-content-between">
              <div class="d-flex flex-row mb-2 mb-md-0 justify-content-around bg-white shadow p-2 pt-3 border rounded-topics align-item-center">
                <img
                  src={images["Jawahar_Navodaya_Vidyalaya_logo,_jnvlogo.jpg"]}
                  class="image mr-2"
                  alt=""
                />
                <h1 style={{ fontSize: "medium" }}>
                  Nvs Junior Secretariat Assistant
                </h1>
                <span>
                  <i class="bi bi-caret-right"></i>
                </span>
              </div>
              <div class="d-flex flex-row mb-2 mb-md-0 justify-content-around bg-white shadow p-2 pt-3 border rounded-topics">
                <img
                  src={images["Jawahar_Navodaya_Vidyalaya_logo,_jnvlogo.jpg"]}
                  class="image"
                  alt=""
                />
                <h1 style={{ fontSize: "medium" }}>
                  Nvs Junior Secretariat Assistant
                </h1>
                <span>
                  <i class="bi bi-caret-right"></i>
                </span>
              </div>
              <div class="d-flex mb-2 mb-md-0 flex-row justify-content-around bg-white shadow p-2 pt-3 border rounded-topics">
                <img
                  src={images["Jawahar_Navodaya_Vidyalaya_logo,_jnvlogo.jpg"]}
                  class="image"
                  alt=""
                />
                <h1 style={{ fontSize: "medium" }}>
                  Nvs Junior Secretariat Assistant
                </h1>
                <span>
                  <i class="bi bi-caret-right"></i>
                </span>
              </div>
            </div>
            <div class="col-10 col-md-10 m-auto pb-md-3 d-flex flex-md-row flex-column justify-content-between">
              <div class="d-flex flex-row mb-2 mb-md-0 justify-content-around bg-white shadow p-2 pt-3 border rounded-topics align-item-center">
                <img
                  src={images["Jawahar_Navodaya_Vidyalaya_logo,_jnvlogo.jpg"]}
                  class="image mr-2"
                  alt=""
                />
                <h1 style={{ fontSize: "medium" }}>
                  Nvs Junior Secretariat Assistant
                </h1>
                <span>
                  <i class="bi bi-caret-right"></i>
                </span>
              </div>
              <div class="d-flex flex-row mb-2 mb-md-0 justify-content-around bg-white shadow p-2 pt-3 border rounded-topics">
                <img
                  src={images["Jawahar_Navodaya_Vidyalaya_logo,_jnvlogo.jpg"]}
                  class="image"
                  alt=""
                />
                <h1 style={{ fontSize: "medium" }}>
                  Nvs Junior Secretariat Assistant
                </h1>
                <span>
                  <i class="bi bi-caret-right"></i>
                </span>
              </div>
              <div class="d-flex mb-2 mb-md-0 flex-row justify-content-around bg-white shadow p-2 pt-3 border rounded-topics">
                <img
                  src={images["Jawahar_Navodaya_Vidyalaya_logo,_jnvlogo.jpg"]}
                  class="image"
                  alt=""
                />
                <h1 style={{ fontSize: "medium" }}>
                  Nvs junior Secretariat Assistant
                </h1>
                <span>
                  <i class="bi bi-caret-right"></i>
                </span>
              </div>
            </div>
            <div class="col-10 col-md-10 m-auto pb-md-3 d-flex flex-md-row flex-column justify-content-between">
              <div class="d-flex flex-row mb-2 mb-md-0 justify-content-around bg-white shadow p-2 pt-3 border rounded-topics align-item-center">
                <img
                  src={images["Jawahar_Navodaya_Vidyalaya_logo,_jnvlogo.jpg"]}
                  class="image mr-2"
                  alt=""
                />
                <h1 style={{ fontSize: "medium" }}>
                  Nvs Junior Secretariat Assistant
                </h1>
                <span>
                  <i class="bi bi-caret-right"></i>
                </span>
              </div>
              <div class="d-flex flex-row mb-2 mb-md-0 justify-content-around bg-white shadow p-2 pt-3 border rounded-topics">
                <img
                  src={images["Jawahar_Navodaya_Vidyalaya_logo,_jnvlogo.jpg"]}
                  class="image"
                  alt=""
                />
                <h1 style={{ fontSize: "medium" }}>
                  Nvs Junior Secretariat Assistant
                </h1>
                <span>
                  <i class="bi bi-caret-right"></i>
                </span>
              </div>
              <div class="d-flex mb-2 mb-md-0 flex-row justify-content-around bg-white shadow p-2 pt-3 border rounded-topics">
                <img
                  src={images["Jawahar_Navodaya_Vidyalaya_logo,_jnvlogo.jpg"]}
                  class="image"
                  alt=""
                />
                <h1 style={{ fontSize: "medium" }}>
                  Nvs Junior Secretariat Assistant
                </h1>
                <span>
                  <i class="bi bi-caret-right"></i>
                </span>
              </div>
            </div>
            <div class="col-12 landing-page-bg col-md-10 d-flex flex-row border justify-content-around rounded bg-light p-3 shadow m-auto mb-4">
              <div class="mr-2 shadow">
                <select class="custom-select">
                  <option selected>Topic</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mr-2 shadow">
                <select class="custom-select">
                  <option selected>Sub Topic</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="d-flex flex-row w-75  shadow">
                <input
                  type="search"
                  name=""
                  class="form-control  rounded-0"
                  id=""
                  placeholder="Search Anything..."
                />
                <button class="btn btn-primary rounded-0">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>
            <div class="col-12 col-md-12 d-flex flex-column flex-md-row bg-white justify-content-between m-auto pt-4">
              <div class="order-2 order-md-1 m-auto p-3">
                <p class="h3 mb-3">
                  Exa<span class="h3 text-primary">Made</span>
                </p>
                <p class="mb-3 font-weight-bold">
                  Get Selection -focussed coaching from the comfort and safety
                  of your hell
                </p>
                <p>
                  <span class="">What you get with</span>
                  <span class="h3"> Exa</span>
                  <span class="h3 text-primary">Made</span>
                </p>
              </div>
              <div class="order-md-2 m-auto order-1">
                <img
                  src={images["edu.svg"]}
                  class="order-md-2 order-1"
                  alt=""
                />
              </div>
            </div>
            <div class="outer-block col-md-8 m-auto col-12 bg-white p-3 border border-warning rounded">
              <div class="d-flex flex-md-row justify-content-between flex-column">
                <div class="info-div p-3 mb-2 mb-md-0 d-flex flex-column border-right rounded">
                  <div class="d-flex flex-row p-2 mb-1">
                    <img
                      src={images["interaction-removebg-preview.png"]}
                      class="info_div_img"
                      alt=""
                    />
                    <div class="p-2">
                      <p class="font-weight-bold">Interactive Live Classes</p>
                    </div>
                  </div>
                  <p>
                    Learn and chat directly with expert faculty in an
                    interactive classroom
                  </p>
                </div>
                <div class="info-div p-3 mb-2 mb-md-0 d-flex flex-column border-right rounded">
                  <div class="d-flex flex-row p-2 mb-1">
                    <img
                      src={images["interaction-removebg-preview.png"]}
                      class="info_div_img"
                      alt=""
                    />
                    <div class="p-2">
                      <p class="font-weight-bold">Interactive Live Classes</p>
                    </div>
                  </div>
                  <p>
                    Learn and chat directly with expert faculty in an
                    interactive classroom
                  </p>
                </div>
                <div class="info-div p-3 mb-2 mb-md-0 d-flex flex-column border-right rounded">
                  <div class="d-flex flex-row p-2 mb-1">
                    <img
                      src={images["[removal.ai]_tmp-625b0525b3bbc.png"]}
                      class="info_div_img"
                      alt=""
                    />
                    <div class="p-2">
                      <p class="font-weight-bold">Interactive Live Classes</p>
                    </div>
                  </div>
                  <p>
                    Learn and chat directly with expert faculty in an
                    interactive classroom
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-10 d-flex flex-column justify-content-center m-auto p-3 bg-white">
              <div class=" d-flex flex-row justify-content-right mb-2 shadow-lg p-2">
                <button class="btn-success border rounded shadow mr-2 p-1 border-light">
                  <span>
                    <i class="bi bi-record-fill text-white"></i>
                  </span>{" "}
                  Free
                </button>
                <p class="h4 text-dark">Live Classes</p>
              </div>
              <div class="d-flex flex-row types justify-content-around border rounded shadow p-3 topics-container mb-2">
                <div>
                  <span class="icon-direction-bg">
                    <i class="bi bi-caret-right rounded arrow arrow2 border"></i>
                  </span>
                </div>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
                <button class="btn sub-topic-btn border rounded learn-more-btn text-dark font-weight-bold">
                  SSC Exams
                </button>
              </div>
            </div>
            <div class="col-10 col-md-10 m-auto pb-3 d-flex flex-column flex-md-row justify-content-between">
              <div class="d-flex flex-column justify-content-center p-3 border rounded shadow p-2">
                <div class="d-flex flex-row justify-content-right mb-2">
                  <button class="btn-success border rounded p-1 mr-1">
                    Free
                  </button>
                  <button class="btn-secondary border rounded p-1">
                    Civils Live classes
                  </button>
                </div>
                <div class="d-flex flex-row justify-content-around mb-2">
                  <div class="order-md-1 mr-2">
                    <p class="text-bold">Civils Top Gen questions</p>
                    <button class="btn-danger border-0 rounded p-2 shadow text-bold">
                      Join Now
                    </button>
                  </div>
                  <img
                    src={images["ias.webp"]}
                    class="order-md-2 live-img border rounded"
                    alt=""
                  />
                </div>
                <span>
                  <i class="bi bi-three-dots text-success"></i>
                </span>
                <div class="d-flex flex-row justify-content-right">
                  <button class="btn-primary border-0 rounded p-2 shadow text-light mr-3">
                    Join This Class
                  </button>
                  <button class="btn-light border-0 rounded p-2 shadow text-bold">
                    View Series
                  </button>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-center p-3 border rounded shadow p-2">
                <div class="d-flex flex-row justify-content-right mb-2">
                  <button class="btn-success border rounded p-1 mr-1">
                    Free
                  </button>
                  <button class="btn-secondary border rounded p-1">
                    Civils Live classes
                  </button>
                </div>
                <div class="d-flex flex-row justify-content-around">
                  <div class="order-md-1 mr-2">
                    <p class="text-bold">Civils Top Gen questions</p>
                    <button class="btn-danger border-0 rounded p-2 shadow text-bold">
                      Join Now
                    </button>
                  </div>
                  <img
                    src={images["ias.webp"]}
                    class="order-md-2 live-img border rounded"
                    alt=""
                  />
                </div>
                <span>
                  <i class="bi bi-three-dots text-success"></i>
                </span>
                <div class="d-flex flex-row justify-content-right">
                  <button class="btn-primary border-0 rounded p-2 shadow text-light mr-3">
                    Join This Class
                  </button>
                  <button class="btn-light border-0 rounded p-2 shadow text-bold">
                    View Series
                  </button>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-center p-3 border rounded shadow p-2">
                <div class="d-flex flex-row justify-content-right mb-1">
                  <button class="btn-success border rounded p-1 mr-1">
                    Free
                  </button>
                  <button class="btn-secondary border rounded p-1">
                    Civils Live classes
                  </button>
                </div>
                <div class="d-flex flex-row justify-content-around">
                  <div class="order-md-1 mr-2">
                    <p class="text-bold">Civils Top Gen questions</p>
                    <button class="btn-danger border-0 rounded p-2 shadow text-bold">
                      Join Now
                    </button>
                  </div>
                  <img
                    src={images["ias.webp"]}
                    class="order-md-2 live-img border rounded"
                    alt=""
                  />
                </div>
                <span>
                  <i class="bi bi-three-dots text-success"></i>
                </span>
                <div class="d-flex flex-row justify-content-right">
                  <button class="btn-primary border-0 rounded p-2 shadow text-light mr-3">
                    Join This Class
                  </button>
                  <button class="btn-light border-0 rounded p-2 shadow text-bold">
                    View Series
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-10 m-auto bg-white">
              <div class=" d-flex flex-row justify-content-right mb-2 shadow-lg p-2">
                <button class="btn-danger border rounded shadow mr-2 p-1 border-light">
                  <span>
                    <i class="bi bi-record-fill text-white"></i>
                  </span>{" "}
                  Free
                </button>
                <p class="h4 text-dark">Live Coaching</p>
              </div>
            </div>
            <div class="col-10 col-md-10 m-auto p-2 d-flex flex-column flex-md-row justify-content-between">
              <div class="d-flex flex-column justify-content-between mb-md-0 mb-2 mr-md-2 bg-light p-2 border rounded-left shadow">
                <div>
                  <img
                    src={images["lecture.jpg"]}
                    class="w-100 mb-2 border rounded"
                    alt=""
                  />
                </div>
                <div class="block p-2 border rounded mb-2">
                  <span>
                    <i class="bi bi-clock"></i> Batch Closes in 5 days
                  </span>
                </div>
                <p class="border-bottom border-dark text-dark bg-light text-justify mb-2">
                  SSC live coaching for freshers(1 year course)Bat..
                </p>
                <div class="d-flex flex-row justify-content-around block border rounded p-2">
                  <div class="mr-3">
                    <p class="text-dark">
                      <span>
                        <i class="bi bi-youtube text-dark"></i> 500+ Live
                        Classes
                      </span>
                    </p>
                  </div>
                  <div>
                    <p class="text-dark">
                      <span>
                        <i class="bi bi-journal text-dark"></i> 150+ notes
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between mb-md-0 mb-2 mr-md-2 bg-light p-2 border rounded shadow">
                <div>
                  <img
                    src={images["lecture.jpg"]}
                    class="w-100 mb-2 border rounded"
                    alt=""
                  />
                </div>
                <div class="block-1 p-2 border rounded mb-2">
                  <span>
                    <i class="bi bi-clock"></i> Batch Closes in 5 days
                  </span>
                </div>
                <p class="border-bottom border-dark text-dark bg-light text-justify mb-2">
                  SSC live coaching for freshers(1 year course)Bat..
                </p>
                <div class="d-flex flex-row justify-content-around block-1 border rounded p-2">
                  <div class="mr-3">
                    <p class="text-dark">
                      <span>
                        <i class="bi bi-youtube text-dark"></i> 500+ Live
                        Classes
                      </span>
                    </p>
                  </div>
                  <div>
                    <p class="text-dark">
                      <span>
                        <i class="bi bi-journal text-dark"></i> 150+ notes
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between mb-md-0 mb-2 mr-md-2 bg-light p-2 border rounded-right shadow">
                <div>
                  <img
                    src={images["lecture.jpg"]}
                    class="w-100 mb-2 border rounded"
                    alt=""
                  />
                </div>
                <div class="block-2 p-2 border rounded mb-2 ">
                  <span>
                    <i class="bi bi-clock"></i> Batch Closes in 5 days
                  </span>
                </div>
                <p class="border-bottom border-dark text-dark bg-light text-justify mb-2">
                  SSC live coaching for freshers(1 year course)Bat..
                </p>
                <div class="d-flex flex-row justify-content-around block-2 border rounded p-2">
                  <div class="mr-3">
                    <p class="text-dark">
                      <span>
                        <i class="bi bi-youtube text-dark"></i> 500+ Live
                        Classes
                      </span>
                    </p>
                  </div>
                  <div>
                    <p class="text-dark">
                      <span>
                        <i class="bi bi-journal text-dark"></i> 150+ notes
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-10 m-auto pb-2 d-flex flex-column block-1 flex-md-row justify-content-between p-5 border rounded border-light shadow-lg mb-2">
              <div class="order-md-1 order-2 d-flex flex-column justify-content-center">
                <p class="h2 mb-2">
                  <span class="font-weight-bold">Exa</span>
                  <span class="font-weight-bold text-primary">Notes</span>
                </p>
                <p class="h4 mb-2">
                  <span class="font-weight-light">Our</span>{" "}
                  <span class="font-weight-bold text-dark">3'D</span>
                  <span class="font-weight-light"> Formula</span>{" "}
                </p>
                <p class="h6 mb-2">
                  <span class="font-weight-bold text-primary">Dive</span> in and{" "}
                  <span class="font-weight-bold text-primary">Dwell</span> on
                  your{" "}
                  <span class="font-weight-bold text-primary">Desired</span>{" "}
                  subject
                </p>
              </div>
              <div class=" order-md-2 order-1">
                <img
                  src="./images/istockphoto-1158861397-170667a-removebg-preview (1).png"
                  class="w-100"
                  alt=""
                />
              </div>
            </div>
            <div class="col-10 outer-block p-5 m-auto block-1 d-block d-md-none p-3 mt-2 border rounded shadow-lg border-light">
              <div class="d-flex flex-column justify-content-center">
                <p class="h4 font-weight-bold mb-4">
                  Here What You Need to go through...
                </p>
                <p class="h6 font-weight-bold mb-4">
                  We <span class="text-dark font-weight-bold">Exa</span>
                  <span class="text-primary font-weight-bold "> Made</span>{" "}
                  provide you with renouned materials
                </p>
                <button class="btn btn-outline-light">Explore Here</button>
                <div class="m-auto text-white ">
                  <i class="bi bi-caret-down"></i>
                </div>
              </div>
            </div>
            <div class="col-10 p-2 m-auto d-flex flex-column justify-content-around d-sm-block d-md-none mt-2 border rounded shadow">
              <div>
                <span class="icon-direction-bg">
                  <i class="bi bi-caret-left rounded arrow arrow1 scroll-icon-1 bg-white shadow"></i>
                </span>
                <span class="icon-direction-bg">
                  <i class="bi bi-caret-right rounded arrow arrow2 scroll-icon-2 bg-white shadow"></i>
                </span>
              </div>
              <img
                src="./images/GATE-Life-Sciences-PDF-for-GATE-PSU__1_-removebg-preview.png"
                class="w-60 mb-2"
                alt=""
              />
              <p class="bg-primary font-weight-bold p-2 text-center w-100 border rounded shadow">
                Gate Referral Notes
              </p>
              <p class="text-center font-weight-light border-bottom">
                It contains all the related topics covered from previous years
                gate papers...
              </p>
              <button class="btn bg-primary">
                Dwell More <i class="bi bi-arrow-repeat"></i>
              </button>
            </div>
            <div class="d-none d-md-block col-md-10  m-auto ">
              <div class="col-md-10 d-flex flex-row justify-content-between mt-2">
                <div class="col-md-4 outer-block block-1 p-5  p-3 mr-4 border rounded shadow-lg border-light mr-2">
                  <div class="d-flex flex-column justify-content-center pt-4">
                    <p class="h4 font-weight-bold mb-4">
                      Here What You Need to go through...
                    </p>
                    <p class="h6 font-weight-bold mb-4">
                      We <span class="text-dark font-weight-bold">Exa</span>
                      <span class="text-primary font-weight-bold ">
                        Made
                      </span>{" "}
                      provide you with renouned materials
                    </p>
                    <button class="btn btn-outline-light">
                      Explore Here{" "}
                      <i class="bi bi-box-arrow-right text-white "></i>
                    </button>
                  </div>
                </div>
                <div class="col-md-4 p-2 d-flex flex-column justify-content-around mr-5 border rounded shadow">
                  <img
                    src="./images/GATE-Life-Sciences-PDF-for-GATE-PSU__1_-removebg-preview.png"
                    class="w-60 mb-2"
                    alt=""
                  />
                  <p class="bg-primary font-weight-bold p-2 text-center w-100 border rounded shadow">
                    Gate Referral Notes
                  </p>
                  <p class="text-center font-weight-light border-bottom">
                    It contains all the related topics covered from previous
                    years gate papers...
                  </p>
                  <button class="btn bg-primary">
                    Dwell More <i class="bi bi-arrow-repeat"></i>
                  </button>
                </div>
                <div class=" col-md-4 p-2 d-flex flex-column justify-content-around  border rounded shadow">
                  <img
                    src="./images/GATE-Life-Sciences-PDF-for-GATE-PSU__1_-removebg-preview.png"
                    class="w-60 mb-2"
                    alt=""
                  />
                  <p class="bg-primary font-weight-bold p-2 text-center w-100 border rounded shadow">
                    Gate Referral Notes
                  </p>
                  <p class="text-center font-weight-light border-bottom">
                    It contains all the related topics covered from previous
                    years gate papers...
                  </p>
                  <button class="btn bg-primary">
                    Dwell <i class="bi bi-arrow-repeat"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
