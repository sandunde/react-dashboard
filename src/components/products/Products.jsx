import React, { useState, useEffect } from "react";
import "./Products.css";
import {
  Col,
  Container,
  Row,
  Form,
  InputGroup,
  Dropdown,
  Table,
  Button,
  CloseButton,
  OverlayTrigger,
  Tooltip,
  Modal
} from "react-bootstrap";
import SideBar from "../sideBar/SideBar";
import {
  Archive,
  Bing,
  ChatRight,
  Command,
  ExclamationCircle,
  FolderPlus,
  Gear,
  Plus,
  PlusSquare,
  Search,
  Sliders,
  SortNumericDown,
  Trash,
} from "react-bootstrap-icons";
import Img1 from "../../assets/anb.png";
import Img2 from "../../assets/google.png";
import Img3 from "../../assets/microsoft.png";
import Img4 from "../../assets/paypal.png";
import Img5 from "../../assets/shopify.png";
import Img6 from "../../assets/wix.png";
import Av1 from "../../assets/avatar.jpg";
import Av2 from "../../assets/avatar2.jpg";
import Av3 from "../../assets/avatar3.jpg";
import Av4 from "../../assets/avatar4.jpg";
import Av5 from "../../assets/avatar5.jpg";
import Av6 from "../../assets/avatar6.jpg";
import Av7 from "../../assets/avatar7.jpg";
import Av8 from "../../assets/avatar8.jpg";

const categoryColors = {
  Automation: {
    background: "rgba(255, 0, 0, 0.2)",
    text: "#8b0000",
  },
  "E-commerece": {
    background: "rgba(0, 128, 0, 0.2)",
    text: "#004d00",
  },
  B2B: {
    background: "rgba(30, 162, 34, 0.2)",
    text: "#0f9013",
  },
  SAAS: {
    background: "rgba(0, 0, 255, 0.2)",
    text: "#00008b",
  },
  Mobile: {
    background: "rgba(255, 87, 51, 0.2)",
    text: "#f4330a",
  },
  Marketing: {
    background: "rgba(123, 66, 229, 0.2)",
    text: "#6e27f4",
  },
};

const nextMeetingColors = {
  "in 30 minutes": {
    background: "rgba(30, 162, 34, 0.2)",
    text: "#0f9013",
  },
  "Tomorrow": {
    background: "rgba(0, 0, 255, 0.2)",
    text: "#00008b",
  },
  "No contact": {
    background: "rgba(255, 87, 51, 0.2)",
    text: "#f4330a",
  },
  "in 1 hour": {
    background: "rgba(30, 162, 34, 0.2)",
    text: "#0f9013",
  },
  "Next month": {
    background: "rgba(216, 72, 194, 0.2)",
    text: "#a71190",
  },
};

const Products = () => {
  const tableData = [
    {
      brand: {
        image: Img1,
        name: "ANB",
        count: 2,
      },
      description: "Develop a personalized fit...",
      members: [Av1, Av2, Av3],
      categories: ["Automation"],
      tags: ["#DigitalTransformation"],
      nextMeeting: "in 30 minutes",
    },
    {
      brand: {
        image: Img3,
        name: "Microsoft",
        count: 7,
      },
      description: "Introducting a cloud-based p...",
      members: [Av4, Av5, Av6, Av7],
      categories: ["E-commerece", "B2B"],
      tags: ["#OnlineShopping"],
      nextMeeting: "Tomorrow",
    },
    {
      brand: {
        image: Img2,
        name: "Google",
        count: 0,
      },
      description: "Develop a mobile app aim...",
      members: [Av1, Av5, Av3, Av7],
      categories: ["SAAS", "Mobile"],
      tags: ["#SmartFinance"],
      nextMeeting: "No contact",
    },
    {
      brand: {
        image: Img4,
        name: "PayPal",
        count: 3,
      },
      description: "This program could inclu...",
      members: [Av2, Av8, Av1, Av7, Av6],
      categories: ["Marketing", "B2B"],
      tags: ["#BuySellOnline"],
      nextMeeting: "in 1 hour",
    },
    {
      brand: {
        image: Img5,
        name: "Shopify",
        count: 0,
      },
      description: "Introduce a B2B solution f...",
      members: [Av1, Av3, Av5, Av8],
      categories: ["Automation", "SAAS"],
      tags: ["#APIIntegration"],
      nextMeeting: "Next month",
    },
    {
      brand: {
        image: Img6,
        name: "Wix",
        count: 0,
      },
      description: "Introduce a B2B solution f...",
      members: [Av3, Av1,],
      categories: ["Marketing",],
      tags: ["#UX", "#UI"],
      nextMeeting: "Tomorrow",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Press to add new row
    </Tooltip>
  );

  const   renderTooltipCol = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Press to add new Column
    </Tooltip>
  );


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = tableData.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.brand.name.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower) ||
      item.categories.some((category) =>
        category.toLowerCase().includes(searchLower)
      ) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevState) => {
      const updatedState = { ...prevState, [index]: !prevState[index] };
      setCount(Object.values(updatedState).filter(Boolean).length);
      return updatedState;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container fluid className="product-section">
      {isMobile && <SideBar />}
      <Row className="product-header">
        <Col>Products</Col>
        <Col className="search-section">
          <InputGroup className="search">
            <InputGroup.Text>
              <Search />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search for..."
              aria-label="Search products"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </InputGroup>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="no-caret">
              <ChatRight />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Gmail</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Instagram</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="no-caret">
              <Gear />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="dropdown-btns">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <Command /> All brands
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">ANB</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Microsoft</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Google</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Desk</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Automation</Dropdown.Item>
              <Dropdown.Item href="#/action-2">E-commerce</Dropdown.Item>
              <Dropdown.Item href="#/action-3">B2B</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Tags</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                DigitalTransformation
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Online shopping</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Smart Finance</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" disabled>
              <SortNumericDown /> Sort
            </Dropdown.Toggle>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" disabled>
              <Sliders /> Sort
            </Dropdown.Toggle>
          </Dropdown>
        </Col>
        <Col className="meeting-btn">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="no-caret">
              <PlusSquare /> Meeting
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">in 30 minutes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Tomorrow</Dropdown.Item>
              <Dropdown.Item href="#/action-3">No Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="no-caret">
              <FolderPlus /> Import/Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <br />
      <div className="product-body">
        <div className="table-responsive">
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th className="brand-heading">
                  Brand{" "}
                  <div>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 100, hide: 100 }}
                      overlay={renderTooltip}
                    >
                      <span style={{ cursor: "pointer" }}>
                        <Plus onClick={handleShow} />
                      </span>
                    </OverlayTrigger>
                  </div>
                </th>
                <th>Description</th>
                <th>Members</th>
                <th>Categories</th>
                <th>Tags</th>
                <th>Next Meeting</th>
                <th>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipCol}
                  >
                    <span style={{ cursor: "pointer" }}>
                      <Plus onClick={handleShow} />
                    </span>
                  </OverlayTrigger>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={!!checkedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />{" "}
                    <img
                      src={item.brand.image}
                      alt={item.brand.name}
                      style={{
                        width: "30px",
                        height: "auto",
                        borderRadius: "5px",
                        marginRight: "10px",
                      }}
                    />
                    {item.brand.name}
                    {item.brand.count > 0 && (
                      <span className="notification">
                        <ChatRight /> {item.brand.count}
                      </span>
                    )}
                  </td>
                  <td>{item.description}</td>
                  <td>
                    {item.members.map((member, memberIndex) => (
                      <img
                        key={memberIndex}
                        src={member}
                        alt={`Member ${memberIndex + 1}`}
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          marginRight: "-5px",
                          border: "1px solid",
                          borderColor: "white",
                        }}
                      />
                    ))}
                  </td>
                  <td>
                    {item.categories.map((category, categoryIndex) => (
                      <span
                        key={categoryIndex}
                        className={`glass-effect category-glass`}
                        style={{
                          backgroundColor:
                            categoryColors[category]?.background ||
                            "rgba(255, 255, 255, 0.2)",
                          color: categoryColors[category]?.text || "black",
                          marginRight: "5px",
                        }}
                      >
                        {category}
                      </span>
                    ))}
                  </td>
                  <td>
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`glass-effect category-glass`}
                        style={{
                          backgroundColor: "#b5b5b5",
                          color: "black",
                          marginRight: "5px",
                          padding: "5px",
                          borderRadius: "5px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </td>
                  <td>
                    <span
                      className={`glass-effect category-glass`}
                      style={{
                        backgroundColor:
                          nextMeetingColors[item.nextMeeting]?.background ||
                          "black",
                        color:
                          nextMeetingColors[item.nextMeeting]?.text || "black",
                        marginRight: "5px",
                        padding: "5px",
                        borderRadius: "5px",
                      }}
                    >
                      {item.nextMeeting}
                    </span>
                  </td>
                  <td></td>
                </tr>
              ))}
              <tr className="final-row">
                <td>
                  <span style={{ fontWeight: "bold" }}>6</span> count
                </td>
                <td>+ Add calculate</td>
                <td>+ Add calculate</td>
                <td>+ Add calculate</td>
                <td>+ Add calculate</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="count-display">
          <Button className="selected-btn" onClick={handleShow}>
            {" "}
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              {count}
            </span>{" "}
            selected
          </Button>
          <Button className="archive-btn" onClick={handleShow}>
            <Archive /> Archive
          </Button>
          <Button className="delete-btn" onClick={handleShow}>
            <Trash />
            Delete
          </Button>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">More</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">ANB</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Microsoft</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Google</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <CloseButton />
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <div className="modal-contents">
            <ExclamationCircle />
          </div>
          Woohoo, Backend is not connected. Please try again after connecting.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Products;
