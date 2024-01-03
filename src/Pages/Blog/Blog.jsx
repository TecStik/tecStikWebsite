import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Blog.css";
import BlogBanner from "./BlogImages/Blog.jpg";
import data from "./BlogData.json";
import StoreContext from "../../ContextApi";
import secondBlogImg from "./BlogImages/blog2images/blog2.png";
import oneBlogImg from "./BlogImages/blog3images/two.png";
import fourBlogImg from "./BlogImages/Blog4Images/blog4.png";
import fiveBlogImg from "./BlogImages/blog5card.png";
import sixBlogImg from "./BlogImages/blogimages6/paymentcard.png";
import sevenBlogImg from "./BlogImages/Blog7image/blog7cardimage.png";
import EightBlogImg from "./BlogImages/Blog8images/blog8cardimage.png";
import NineBlogImg from "./BlogImages/Blog9images/blog9cardimage.png";
import Navig from "./BlogImages/Navigating Pakistani Finance.png";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";
  const ContextData = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [loading, setLoading] = useState(false);

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);

  const handler = (item) => {
    ContextData.setBlogData(item);
  };

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    setLoading(true);

    setTimeout(() => {
      const newFilteredData = data.filter((item) =>
        item.heading.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(newFilteredData);
      setLoading(false);
    }, 100); // Adjust the time as needed
  };

  const getBlogImage = (index) => {
    const images = [
      oneBlogImg,
      Navig,
      secondBlogImg,
      fourBlogImg,
      fiveBlogImg,
      sixBlogImg,
      sevenBlogImg,
      EightBlogImg,
      NineBlogImg,
    ];

    // Ensure that the index is within the range of available images
    const adjustedIndex = index % images.length;

    return images[adjustedIndex];
  };


  return (
    <div>
      <Header />
      <section className="banner_container">
        <div id="banner_4_image"></div>
        {/* <img src={BlogBanner} alt="logo" class="background-image" /> */}
        <div class="overlay"></div>
        <div class="banner-text">
          Blog
        </div>
      </section>


      <div
        className="bowse_topic_res"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div style={{ color: "#035192" }}>
          <h5 style={{ fontSize: "1.7rem", fontWeight: 600 }}>Browse Topics</h5>
        </div>
        <div style={{ width: "70%" }}>
          <InputGroup className="mb-3">
            <Form.Control
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search in blogs...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-primary" id="button-addon2">
              <FaSearch />
            </Button>
          </InputGroup>
        </div>
      </div>
      <div
        style={{
          width: "91%",
          margin: "auto",
          height: "1px",
          background: "lightgray",
        }}
      ></div>
      <section
        id="why-us"
        className="why-us section-bg"
        style={{ marginTop: "50px" }}
      >
        <div className="container">
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            <>
              {filteredData.length > 0 ? (
                <div className="row">
                  {filteredData.map((item, i) => (
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch"
                      key={i}
                    >
                      <div className="card" id="BlogCard">
                        <img
                          src={getBlogImage(i)}
                          className="card-img-top "
                          style={{ height: "180px" }}
                          alt="Blog Image"
                        />
                        <div className="card-body">
                          <h5
                            className="card-title myFont"
                            onClick={() => handler(item)}
                          >
                            <Link
                              to={`/TecStik-Blog/${item.heading.replaceAll(
                                " ",
                                "-"
                              )}`}
                              target="_blank"
                            >
                              {item.heading}
                            </Link>
                          </h5>
                          <p className="card-text myFont" style={{ textAlign: 'center' }}>
                            {item.metaDescription}
                          </p>
                          <p
                            className="card-text myFont"
                            style={{ textAlign: "center" }}
                          >
                            {item.pargraf}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              ) : (
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  No Blog Found
                </p>
              )}
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;






























// import React, { useState, useEffect, useContext } from "react";
// import { useSearchParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Form, InputGroup, Button } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import "./Blog.css";
// import BlogBanner from "./BlogImages/Blog.jpg";
// import data from "./BlogData.json";
// import StoreContext from "../../ContextApi";
// import secondBlogImg from "./BlogImages/blog2images/blog2.png";
// import oneBlogImg from "./BlogImages/blog3images/two.png";
// import fourBlogImg from "./BlogImages/Blog4Images/blog4.png";
// import fiveBlogImg from "./BlogImages/blog5card.png";
// import sixBlogImg from "./BlogImages/blogimages6/paymentcard.png";
// import sevenBlogImg from "./BlogImages/Blog7image/blog7cardimage.png";
// import EightBlogImg from "./BlogImages/Blog8images/blog8cardimage.png";
// import NineBlogImg from "./BlogImages/Blog9images/blog9cardimage.png";
// import Navig from "./BlogImages/Navigating Pakistani Finance.png";

// const Blog = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const currentTab = searchParams.get("tab") || "0";
//   const ContextData = useContext(StoreContext);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(data);
//   const [loading, setLoading] = useState(false);

//   const changeTab = (tab) => {
//     searchParams.set("tab", tab);
//     setSearchParams(searchParams);
//   };

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "instant",
//     });
//   }, [searchParams]);

//   const handler = (item) => {
//     ContextData.setBlogData(item);
//   };

//   const handleChange = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     setLoading(true);

//     setTimeout(() => {
//       const newFilteredData = data.filter(item =>
//         item.heading.toLowerCase().includes(term.toLowerCase())
//       );
//       setFilteredData(newFilteredData);
//       setLoading(false);
//     }, 100); // Adjust the time as needed
//   };

//   return (
//     <div>
//       <Header />
//       <section
//         id="blog"
//         style={{
//           backgroundImage: `url(${BlogBanner})`,
//           height: "60vh"
//         }}
//       >
//         <div className="hero-content" data-aos="fade-up">
//           <h2>Blog</h2>
//         </div>
//       </section>

//       <div className="bowse_topic_res" style={{display:'flex',alignItems:"center",justifyContent:"space-around",marginTop:"20px"}}>
//         <div style={{ color: "#035192" }}>
//           <h5 style={{ fontSize: "1.7rem", fontWeight: 600 }}>Browse Topics</h5>
//         </div>
//         <div style={{ width: "70%" }}>
//           <InputGroup className="mb-3">
//             <Form.Control
//               value={searchTerm}
//               onChange={handleChange}
//               placeholder="Search in blogs...."
//               aria-label="Recipient's username"
//               aria-describedby="basic-addon2"
//             />
//             <Button variant="outline-primary" id="button-addon2">
//               <FaSearch />
//             </Button>
//           </InputGroup>
//         </div>
//       </div>
//       <div style={{ width: "91%", margin: "auto", height: "1px", background: "lightgray" }}></div>
//       <section id="why-us" className="why-us section-bg" style={{ marginTop: '50px' }}>
//         <div className="container">
//           {loading ? (
//             <p style={{ textAlign: 'center' }}>Loading...</p>
//           ) : (
//             <>
//               {filteredData.length > 0 ? (
//                 <div className="row">
//                   {filteredData.map((item, i) => (
//                     <div
//                       className="col-lg-4 col-md-6 d-flex align-items-stretch"
//                       key={i}
//                     >
//                       <div className="card" id="BlogCard">
//                         <img
//                           src={getBlogImage(i)}
//                           className="card-img-top"
//                           style={{ height: "180px" }}
//                           alt="Blog Image"
//                         />
//                         <div className="card-body">
//                           <h5 className="card-title myFont" onClick={() => handler(item)}>
//                             <Link
//                               to={`/TecStik-Blog/${item.heading.replaceAll(" ", "-")}`}
//                               target="_blank"
//                             >
//                               {item.heading}
//                             </Link>
//                           </h5>
//                           <p className="card-text myFont" style={{ textAlign: 'center' }}>{item.metaDescription}</p>
//                           <p className="card-text myFont" style={{ textAlign: "center" }}>{item.pargraf}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>No Blog Found</p>
//               )}
//             </>
//           )}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Blog;

// const getBlogImage = (index) => {
//   switch (index) {
//     case 0:
//       return oneBlogImg;
//     case 1:
//       return Navig;
//     case 2:
//       return secondBlogImg;
//     case 3:
//       return fourBlogImg;
//     case 4:
//       return fiveBlogImg;
//     case 5:
//       return sixBlogImg;
//     case 6:
//       return sevenBlogImg;
//     case 7:
//       return EightBlogImg;
//     case 8:
//       return NineBlogImg;
//     default:
//       return null;
//   }
// };
