import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import StoreContext from "../../../ContextApi";
import ecnomis from "../BlogImages/ecnomis.png";
import growth from "../BlogImages/growth.png";
import whitepaper from "../BlogImages/whitepaper.png";
import Navig from "../BlogImages/NavigPakistan.jpg";
import NavigLaptopImg from "../BlogImages/Naviglaptop.png";
import { Button, Modal } from "antd";
import "./BlogContent.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function BlogTwo({ copyText }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";
  const [copySuccess, setCopySuccess] = React.useState("");
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const textArea = document.querySelector("textarea");
    textArea.select();
    document.execCommand("copy");
    textArea.blur();
    setCopySuccess("Copied!");
  };

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };
  let ContextData = useContext(StoreContext);
  let data = ContextData.BlogData;
  // console.log(data.metaDescription, "raza=====>");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);
  // console.log(window.location.pathname.slice(1), "link raza");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <div>
          <section className="banner_container">
            <div id="banner_12_image"></div>
            <div class="overlay"></div>
            <div class="banner_text__1">
              Revealing Pakistan’s Financial Structure

              <div style={{ display: "flex", gap: "45px", position: "absolute", bottom: "-180px", right: '60px', color: "white" }} className="author_none">
                <div>
                  <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>Author Azfar Saleem</p>
                </div>
                <div style={{ display: "flex", gap: '3px' }}>
                  <CalendarMonthIcon style={{ position: "relative", top: '4px' }} />
                  <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>updated on 22/12/23</p>
                </div>
              </div>
            </div>
          </section>
          <Modal
            // title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div>
              <input type="text" value={copyText} readOnly />
              {/* Bind our handler function to the onClick button property */}
              <button>
                <span>{isCopied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </Modal>
          <br />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3 ">
                <br />
                <div className="social-sharing">
                  <div className="heading-container">
                    <h2
                      style={{
                        textAlign: "center",
                      }}
                    >
                      SHARE
                    </h2>
                    <hr />
                    <p className="mb-1 text_center">
                      Share across your favourite social media:
                    </p>

                    <div id="LinkIconMain">
                      <div id="BoxPointer" onClick={showModal}>
                        <i className="fab fa-facebook-f"></i>
                      </div>
                      <div id="BoxPointer" onClick={showModal}>
                        <i className="fab fa-twitter"></i>
                      </div>
                      <div id="BoxPointer" onClick={showModal}>
                        <i className="material-icons">email</i>
                      </div>
                      <div id="BoxPointer" onClick={showModal}>
                        <i className="fab fa-linkedin-in"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 blog-main m-auto">
                <div className="blog-post" style={{ position: "relative" }}>
                  {/* <div className="main_text_center">
                    <h1  id="heading" style={{ fontSize: "3rem", background: "#81AFD9", padding: '3px 3px', position: "relative", top: "-65px" }}>Revealing Pakistan’s Financial Structure</h1>
                    <p></p>
                    <div style={{ display: "flex", gap: "45px", position: "absolute", bottom: "-100px", right: '60px' }}>
                      <div>
                        <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>Author Azfar Saleem</p>
                      </div>
                      <div style={{ display: "flex", gap: '3px' }}>
                        <CalendarMonthIcon style={{ position: "relative", top: '4px' }} />
                        <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>updated on 22/12/23</p>
                      </div>
                    </div>

                  </div> */}

                  <p className="w3-text-grey text_justify" >
                    Pakistanis are the backbone of their nation’s economy. When citizens responsibly build their own wealth too, Pakistan’s economy will flourish <a style={{ textDecoration: "none" }} className="w3-text-grey" href="#heading6"> <sup>(1)</sup></a>.
                  </p>
                  <br />
                  <p className="w3-text-grey text_justify">
                    The financial climate in Pakistan may stir a mix of anxiety among its inhabitants. Nevertheless, thoroughly examined data by International Advisory Firms suggests that Pakistan’s financial future looks exceptionally bright<a style={{ textDecoration: "none" }} className="w3-text-grey" href="#heading7"><sup>(2)</sup></a>. Prosperity hinges on citizens and the corresponding government’s efforts to enrich human capital.
                  </p>
                  <br />
                  <p className="w3-text-grey text_justify" >
                    Explore Pakistan’s financial landscape to gain detailed insights into the country's financial operations, boosting your income. Strengthen the country’s collective citizen knowledge by studying and investing time to learn about in its financial network. Facilitating persistent economic development on a national level.
                  </p>

                  <br />
                  <ul className="text_justify">
                    <li>
                      The Pakistani Economy holds the potential to become the 16th Largest economy globally<a style={{ textDecoration: "none" }} className="w3-text-grey" href="#heading7"><sup>(2)</sup></a>
                    </li>
                    <br />
                    <li >
                      Pricewaterhousecoopers also states it is imperative for emerging economies to improve their infrastructure to realise their long-term growth<a style={{ textDecoration: "none" }} className="w3-text-grey" href="#heading8"><sup>(3)</sup></a>
                    </li>
                    <br />
                    <li id="heading1" >
                      Sustained growth, remarkable financial benefits for citizens and an overall increase in the country’s GDP (Gross-Domestic-Product) is going to be achieved when the local population gains comprehensive insight into the financial landscape of pakistan
                    </li>
                    <br />
                    <li>
                      To discover the thriving advantages, residents should familiarise themselves with the financial system in Pakistan.
                    </li>
                    <br />
                  </ul>
                  <h5 className="text_center" >
                    Federal Government Shapes Pakistan’s Finance
                  </h5>
                  <br />
                  <p className="w3-text-grey text_justify">
                    Pakistan's government sets fiscal, monetary policies: making it the primary authority directing the financial sector. The regulation and supervision of banking institutions and Pakistan’s debt management through The State Bank of Pakistan (SBP), are among the central roles of The Pakistani Administration. Understanding the economy of Pakistan requires crucial awareness of the government-sponsored SBP.
                  </p>
                  <br />
                  <p className="w3-text-grey text_justify">
                    The State Bank of Pakistan advances regulated financial services, improving the financial access of Pakistanis to financial services. As a central organisation, it oversees the nation’s economy, supervising the public and private sector financial institutions of Pakistan. Financially stable Insurance and commercial banks, investment banks, and individuals comply with The SBP’s directives. According to The SBP website, its functions are summarised as follows:
                  </p>
                  <br />
                  <ul className="flex">
                    <li>Liquidity regulation</li>
                    <br />
                    <li id="heading2">
                      Supervision and regulation of the financial system
                    </li>
                    <br />
                    <li>
                      Management of exchange rates and balance of payments
                    </li>
                    <br />
                    <li>
                      Optimisation of resource allocation among financial institutions in Pakistan.
                    </li>
                  </ul>
                  <br />
                  <h5 className="text_center">
                    Banking System of Pakistan - Financial Inclusion and Growth.
                  </h5>
                  <br />
                  <p className="w3-text-grey text_justify">
                    Extensively, The SBP has authority over all Pakistani financial affairs. Regulating the public and private banking systems in the country, too.
                  </p><br />
                  <p className="w3-text-grey text_justify">
                    Pakistani Public and Private Banking Systems currently consist of Commercial Banks, Foreign Banks, Islamic Banks, and Development Financial Institutions. Playing a huge role in The Financial System of Pakistan.
                  </p>
                  <br />
                  <p className="w3-text-grey text_justify">
                    Pakistan's local banks and international banks offer deposit accounts and credit facilities to individuals and businesses. Including loans, investments, Shariah-Compliant grants and conventional consumer financing options.
                  </p>
                  <br />
                  <p className="w3-text-grey text_justify" id="heading3">
                    Pakistanis also use Fintech of Financial Technology such as online/mobile banking, digital wallets, and blockchain-based remittances. Widening financial inclusion digitally, as they contribute to economic growth.
                  </p>
                  <br />
                  <div className="d-flex justify-content-center  mb-3">
                    <div className="p-2 ">
                      <img
                        src={NavigLaptopImg}
                        alt=""
                        srcset=""
                        // id="BlogContenetImage"
                        style={{
                          width: "100%",
                          display: "block",
                          margin: "auto",
                          background: "red",
                        }}
                      />
                    </div>
                  </div>

                  <h5 className="text_center">
                    Non-Banking Financial Institutions Supporting Citizens
                  </h5>
                  <br />
                  <p className="w3-text-grey text_justify">
                    Pakistan’s Non-Banking Financial Institutions (NBFIs) have increased capital availability for businesses and individuals <a style={{ textDecoration: "none" }} className="w3-text-grey" href="#heading8"><sup>(4)</sup></a>, facilitating investments in new projects for expanding their operations. Causing prosperity and job creation.
                  </p>
                  <p>
                    NBFIs have increasingly played a significant role in developing the capital markets in Pakistan. Providing access to a range of investment products and services: NBFIs have helped increase investment activity, leading to greater liquidity in the country’s capital markets.
                  </p>
                  <br />
                  <p className="w3-text-grey text_center">Pakistan’s NBFIs support economic growth. Actively presenting the underserved with financial services. NBFIs in Pakistan provide:
                  </p>
                  <ul className="flex">
                    <li>Mutual funds</li>
                    <br />
                    <li >Financiers</li>
                    <br />
                    <li>Investment Banks</li>
                    <br />
                    <li>Pension Funds</li>
                    <br />
                    <li>Insurance Companies</li>
                    <br />
                    <li >Private Equity Funds</li>
                    <br />
                    <li>Venture Capital Funds</li>
                    <br />
                    <li id="heading4">Housing Finance Companies</li>
                    <br />
                    <li>Modarabas</li>
                    <br />
                    <li>Investment Advisory Companies</li>
                  </ul>
                  <br />
                  <h5 className="p-2 text_center">
                    Profitable Investments in The Capital Markets of Pakistan
                  </h5>
                  <br />
                  <p className="p-2 text_justify">
                    The Federal Government and Regulatory Bodies of Pakistan promote the growth and development of nationwide capital markets. These markets deliver long-term instruments like bonds, stocks and other securities for trade. Pakistan’s government and financial regulatory bodies are striving to promote the growth and development of the capital markets. With a focus on increasing foreign investment and improving market infrastructure.
                  </p>
                  <br />
                  <p className="p-2 text_justify">
                    The Pakistan Stock Exchange (PSX) is the leading stock exchange in the country, with three prime indices: KSE 100, KSE 30, and PSX Dividend 20 Index. The PSX has a market capitalisation of over $60 billion, having more than 500 listed companies (PSX (Pakistan Stock Exchange).
                  </p>
                  <br />
                  <p className="p-2 text_justify">
                    Additionally, the capital markets in Pakistan include the debt market, which is overseen by the Securities and Exchange Commission of Pakistan (SECP). This borrowing market contains The Government Bond Market, Corporate Bond Market, and T-bill Market. The SECP is a regulatory body that oversees the capital markets in Pakistan, protecting the interests of investors.
                  </p>
                  <br />
                  <p className="p-2 text_justify" id="heading5">
                    “The SECP introduced the Securities Act, 2015 and Futures Market Act, 2016 with an aim to effectively regulate and supervise the securities market activities with an ultimate objective to ensure enhanced protection of rights of investing public at large.” - PSX Rulebook
                  </p>
                  <br />
                  <h5 className="p-2 text_center">Fintech Platforms in Pakistan</h5>
                  <p class="p-2 text_justify">
                    Recently formed and established Pakistani fintech firms are rapidly transforming the financial landscape of the nation. Fintech is software that utilises digital and online technologies for finance-related activities.
                  </p>
                  <br />
                  <p className="p-2 text_justify" id="heading6">
                    Although there are fintech brands that have developed platforms: JazzCash, Easypaisa, Finja, Sadapay, etc. –, <a href="https://tecstik.com/" target="_blank" rel="noopener noreferrer">innovative fintech institutions</a>  in Pakistan focus on leveraging revolutionary technologies to power creative platforms. Like <a href="https://kollectit.tecstik.com/" target="_blank" rel="noopener noreferrer">mobile apps</a> backed with CRMs, for accurate collections of physical cash.
                  </p>
                  <br />
                  <p className="p-2 text_justify">
                    The Pakistani Economy is laying golden eggs. Be prepared to take maximum advantage of its eggs by using effective Fintech. Harnessing holistic solutions tailored to your businesses or personal goals has progressively become feasible. For instance, leveraging <a href="https://kollectit.tecstik.com/" target="_blank" rel="noopener noreferrer">payment collection software</a> that seamlessly integrates with your existing physical cash collection processes.
                  </p>
                  <br />
                  <p className="text_justify" id="heading7">
                    Discover the keys to navigate Pakistan’s financial landscape and effectively manage physical cash payment risks in our nation's cash economy. Dive deeper with an exclusive white-paper, 'Managing Physical Cash Payment Risks in Pakistan’s Cash Economy'. Enter your email below to access your copy of the white-paper and master the intricacies of The Pakistani financial ecosystem.
                  </p>
                  <br />
                  <h5 style={{ textAlign: 'center' }} className="text_center" id="heading8">Works Cited</h5>
                  <br />
                  <ol className="text_center">
                    <li>
                      Higher Education Commission of Pakistan (HEC). “Welcome to Pakistan Research Repository: Non Banking Financial Institutions In Pakistan.” Pakistan Research Repository,
                      http://prr.hec.gov.pk/jspui/handle/123456789/15131. Accessed 10 May 2023.

                    </li>
                    <br />
                    <li>
                      “The World in 2050.” <br /> PwC, https://www.pwc.com/gx/en/research-insights/economy/the-world-in-2050.html. <br /> Accessed 10 May 2023.
                    </li>
                    <br />
                    <li>
                      https://www.pwc.com/gx/en/research-insights/economy/the-world-in-2050.html
                    </li>
                    <br />
                    <li>
                      State Bank of Pakistan. “Chapter 6.2: Non-Bank Financial Institutions Asset Management (AM) 139 Segment.” State Bank of Pakistan, https://www.sbp.org.pk/FSR/2021/Chp-6.2.pdf
                    </li>
                    <br />
                    <li>
                      https://www.sbp.org.pk/FSR/2022/Chp-6.2.pdf. Accessed 25 August 2023. <br />
                      4. PSX (Pakistan Stock Exchange). “Pakistan Stock Exchange Limited - | PSX | <br /> Product And Services | Indices.” Pakistan Stock Exchange, <br />
                      https://www.psx.com.pk/psx/product-and-services/indices. Accessed 10 May 2023
                    </li>
                    <br />
                    <li>
                      PSX Rule Book. “Pakistan Stock Exchange Limited - | PSX | Regulations | Rulebook Archive.” Pakistan Stock Exchange,
                      https://psx.com.pk/psx/regulations/rulebook-archive. Accessed 10 May 2023.
                    </li>
                    <li>
                      The State Bank of Pakistan. “State Bank of Pakistan.” State Bank of Pakistan,
                      https://www.sbp.org.pk/FS/4.3.asp. Accessed 10 May 2023.
                    </li>
                  </ol>
                  {/* <p class="p-2"></p> */}
                  {/* <p class="p-2"></p> */}
                </div>
              </div>

              <div className="hide_res col-sm-12 col-md-3 col-lg-3 blog-sidebar">
                <div className="sidebar-module">
                  <h1 className="text_center margin" style={{ fontSize: "1.3rem" }}>Revealing Pakistan’s Financial Structure</h1>
                  <h2 style={{ fontSize: "1rem", paddingLeft: '25px' }}>
                    <a href="#heading1" style={{ textDecoration: "none" }} className="w3-text-grey">
                      Federal Government Shapes Pakistan’s Finance
                    </a>
                  </h2>
                  <h2 style={{ fontSize: "1rem", paddingLeft: '25px' }}>
                    <a href="#heading2" className="w3-text-grey" style={{ textDecoration: 'none' }}>
                      Banking System of Pakistan - Financial Inclusion and Growth
                    </a>
                  </h2>
                  <h2 style={{ fontSize: "1rem", paddingLeft: '25px' }}>
                    <a href="#heading3" style={{ textDecoration: "none" }} className="w3-text-grey">
                      Non-Banking Financial Institutions Supporting Citizens
                    </a>
                  </h2>
                  <h2 style={{ fontSize: "1rem", paddingLeft: '25px' }}>
                    <a href="#heading4" className="w3-text-grey" style={{ textDecoration: "none" }}>
                      Profitable Investments in The Capital Markets of Pakistan
                    </a>
                  </h2>
                  <h2 style={{ fontSize: "1rem", paddingLeft: '25px' }}>
                    <a href="#heading5" className="w3-text-grey" style={{ textDecoration: 'none' }}>Fintech Platforms in Pakistan</a>
                  </h2>
                  <h2 style={{ fontSize: "1rem", paddingLeft: '25px' }}>
                    <a href="#heading6" className="w3-text-grey" style={{ textDecoration: 'none' }}>References</a>
                  </h2>
                </div>
              </div>

              <div id="LinkIconMain">
                <div id="BoxPointer">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div id="BoxPointer">
                  <i className="fab fa-twitter"></i>
                </div>
                <div id="BoxPointer">
                  <i className="material-icons">email</i>
                </div>
                <div id="BoxPointer">
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
              <p className="text-center ">
                Share across your favourite social media!
              </p>
            </div>

            <hr />
            <div className="d-flex flex-wrap justify-content-center">
              <div
                className="card m-2 p-2 col-sm-3"
                style={{
                  background: "#81AFD9",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "13px",
                }}
              >
                <div className="container">
                  <h4>
                    <b className="text-white">TecStik</b>
                  </h4>
                  <p>Managing Physical Cash Payment Risks in Pakistan's Cash Economy</p>
                </div>
                <img
                  src={whitepaper}
                  alt="Avatar"
                  // style={{ width: "40vh", height: "50vh" }}

                  className="m-2"
                />
              </div>
              <div className="col-sm-4">
                <br />
                <div className="container">
                  <h4 className="text_center">
                    <b>Get your free white paper.</b>
                  </h4>
                  {/* <p>Architect & Engineer</p> */}
                  {/* <br /> */}
                  <div className="form-outline">
                    <input
                      type="email"
                      // id="typeNumber"
                      className="form-control mt-3"
                      style={{ background: "#F1F1F1" }}
                      placeholder="Your Email Address"
                    />
                    {/* <label class="form-label" for="typeNumber">
                        Email
                      </label> */}
                  </div>
                  <br />
                  <span type="button" className="btn btn-warning btn-rounded text_center">
                    SUBMIT
                  </span>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
