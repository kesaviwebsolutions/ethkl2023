import React, { useEffect, useLayoutEffect, useState } from "react";

import { ImCross } from "react-icons/im";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineMenu } from "react-icons/ai";

import Modal from "react-bootstrap/Modal";
import meta from "../Image/meta.png";
import walletconnect from "../Svg/walletconnect.svg";
import "animate.css";

import logo from "../Image/nfe-logo.png";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // ---------dark---------mode----------------

  useLayoutEffect(() => {
    const data = window.localStorage.getItem("theme");
    if (data === "dark-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }, []);

  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className="  navbar12  d-f a-i-c j-c-s-b p-y-1">
        <div className="">
          <ul className="l-s-t-n d-f a-i-c ">
            <li className="m-r-2">
              <img
                src={logo}
                alt=""
                className="logo animate__animated animate__rubberBand"
              />
            </li>

            <li className="m-r-2 c-p   m-q-b-d-n">dummy</li>
            <li className="m-r-2 c-p   m-q-b-d-n">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="b-c-t b-n c-i"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu className="pa-1">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
        <div className=" c-p ">
          <ul className="l-s-t-n d-f a-i-c ">
            <li className="m-l-2 c-p   m-q-b-d-n">dummy</li>

            <li className="m-l-2 c-p   m-q-b-d-n">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="b-c-t b-n c-i"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu className="pa-1">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="m-l-2 c-pq ">
            <span className="" onClick={() => toggleTheme()}>{theme === "dark-theme" ? "Light mode" : "Dark mode"}</span>
            </li>
            <li className="m-l-2 c-pq ">
              {" "}
              <Button
                variant="primary"
                onClick={handleShow2}
                className=" b-c-t pa-0_5 c-i b-c-i"
              >
                Connect Wallet
              </Button>
            </li>
            <li className="m-l-2 c-p   m-q-a-d-n ">
              {" "}
              <Button onClick={handleShow} className=" b-c-t c-i b-n pa-0">
                <AiOutlineMenu />
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------------mobile-navbar---------------------------------- */}

      <Offcanvas show={show} onHide={handleClose} className="pa-1">
        <Offcanvas.Header>
          <Offcanvas.Title>
            {" "}
            <div className="image-dog1">
              <a href="/" target="_blank">
                <img src={logo} alt="" className="" />
              </a>
            </div>
          </Offcanvas.Title>
          <ImCross onClick={handleClose} color="black" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="l-s-t-n">
            <li className="m-r-1 m-t-1 c-p">dummy</li>
            <li className="m-r-1 m-t-1 c-p">dummy</li>
            <li className="m-r-1 m-t-1 c-p">dummy</li>
            <li className="m-r-1 m-t-1 c-p">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="b-c-t c-i b-n"
                >
                  Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu className="pa-1">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={show2} onHide={handleClose2} className="">
        <div className="">
          <Modal.Header closeButton>
            <Modal.Title className="t-a-c m-a c-i">
              Please Connect Your Wallet
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="walletconnect d-f a-i-c j-c-s-e m-y-2">
              <img src={meta} alt="" className="w-7" />
              <img src={walletconnect} alt="" className="w-5" />
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
