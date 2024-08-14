import React, { useState, useEffect } from "react";
import "./SideBar.css";
import Logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import Avatar from "../../assets/avatar.jpg";
import {
    Code,
    Command,
    Megaphone,
    VectorPen,
    List,
    PlusSquare,
    Folder,
    Plus,
    CaretUpFill,
    CaretDownFill,
    PersonPlus,
    QuestionCircle,
    ExclamationCircle,
} from "react-bootstrap-icons";
import { Button, Form, Collapse, Modal } from "react-bootstrap";

const SideBar = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [teams, setTeams] = useState([
        { name: "Design Team", icon: <VectorPen />, notifications: 1 },
        { name: "Marketing Team", icon: <Megaphone />, notifications: 2 },
        { name: "Development Team", icon: <Code />, notifications: 3 },
    ]);
    const [newTeamName, setNewTeamName] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [isOpenSale, setIsOpenSale] = useState(false);
    const [isOpenDesign, setIsOpenDesign] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleAddTeam = () => {
        if (newTeamName.trim() !== "") {
            setTeams([
                ...teams,
                { name: newTeamName, icon: <Folder />, notifications: 0 },
            ]);
            setNewTeamName("");
        }
    };

    const handleNavigate = () => {
        navigate("/office")
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdownSales = () => {
        setIsOpenSale(!isOpenSale);
    };

    const toggleDropdownDesign = () => {
        setIsOpenDesign(!isOpenDesign);
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* layout for mobile */}
            {isMobile && (
                <>
                    <button
                        className="btn btn-primary d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasSidebar"
                        aria-controls="offcanvasSidebar"
                    >
                        <List size={24} />
                    </button>

                    <div
                        className="offcanvas offcanvas-start"
                        id="offcanvasSidebar"
                        tabIndex="-1"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title">Menu</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="sidebar-header">
                                <div className="logo">
                                    <img src={Logo} alt="logo" />
                                    <p style={{ lineHeight: "1.2" }}>
                                        <span style={{ color: "gray" }}>INC</span> <br />{" "}
                                        InnovateHub
                                    </p>
                                </div>
                                <img src={Avatar} alt="avatar" />
                            </div>
                            <div className="create-team">
                                {teams.map((team, index) => (
                                    <div key={index} className="create-team-button">
                                        <div className="name">
                                            {team.icon} {team.name}
                                        </div>
                                        <div className="notification">
                                            <Command /> + {team.notifications}
                                        </div>
                                    </div>
                                ))}
                                <hr />
                                <div className="create-team-button-disabled">
                                    <Button onClick={handleAddTeam}>
                                        <PlusSquare />
                                    </Button>
                                    <Form>
                                        <Form.Control
                                            type="text"
                                            placeholder="Create a Team"
                                            value={newTeamName}
                                            onChange={(e) => setNewTeamName(e.target.value)}
                                        />
                                    </Form>
                                </div>
                            </div>
                            <div className="folder-section">
                                <div className="folders">
                                    <h6>FOLDERS</h6>
                                    <Plus className="plus" />
                                </div>
                                <div className="collapse-section">
                                    <div>
                                        <div className="collapses" onClick={toggleDropdown}>
                                            <div className="collapse-btn">
                                                <Folder />
                                                <Button
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={isOpen}
                                                >
                                                    Products
                                                </Button>
                                            </div>
                                            {isOpen ? <CaretUpFill /> : <CaretDownFill />}
                                        </div>
                                        <Collapse in={isOpen}>
                                            <div id="collapse-text" className="collapse-text">
                                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                                    <li>
                                                        <a href="#roadmap">Roadmap</a>
                                                    </li>
                                                    <li>
                                                        <a href="#feedback">Feedback</a>
                                                    </li>
                                                    <li>
                                                        <a href="#performance">Performance</a>
                                                    </li>
                                                    <li>
                                                        <a href="#performance">Team</a>
                                                    </li>
                                                    <li>
                                                        <a href="#performance">Analytics</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div>
                                        <div className="collapses" onClick={toggleDropdownSales}>
                                            <div className="collapse-btn">
                                                <Folder />
                                                <Button
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={isOpenSale}
                                                >
                                                    Sales
                                                </Button>
                                            </div>
                                            {isOpenSale ? <CaretUpFill /> : <CaretDownFill />}
                                        </div>
                                        <Collapse in={isOpenSale}>
                                            <div id="collapse-text" className="collapse-text">
                                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                                    <li>
                                                        <a href="#roadmap">Roadmap</a>
                                                    </li>
                                                    <li>
                                                        <a href="#feedback">Feedback</a>
                                                    </li>
                                                    <li>
                                                        <a href="#performance">Performance</a>
                                                    </li>
                                                    <li>
                                                        <a href="#performance">Team</a>
                                                    </li>
                                                    <li>
                                                        <a href="#performance">Analytics</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div>
                                        <div className="collapses" onClick={toggleDropdownDesign}>
                                            <div className="collapse-btn">
                                                <Folder />
                                                <Button
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={isOpenDesign}
                                                >
                                                    Design
                                                </Button>
                                            </div>
                                            {isOpenDesign ? <CaretUpFill /> : <CaretDownFill />}
                                        </div>
                                        <Collapse in={isOpenDesign}>
                                            <div id="collapse-text" className="collapse-text">
                                                <ul style={{ listStyleType: "none", padding: 0, }}>
                                                    <li>
                                                        <a href="#roadmap">Roadmap</a>
                                                    </li>
                                                    <li>
                                                        <a href="#feedback">Feedback</a>
                                                    </li>
                                                    <li>
                                                        <a href="#performance">Performance</a>
                                                    </li>
                                                    <li>
                                                        <a href="#performance">Team</a>
                                                    </li>
                                                    <li>
                                                        <a href="#performance">Analytics</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div>
                                        <div className="collapses" >
                                            <div className="collapse-btn">
                                                <Folder />
                                                <Button onClick={handleNavigate}>Office</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="collapses" >
                                            <div className="collapse-btn">
                                                <Folder />
                                                <Button onClick={handleShow}>Legal</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="additional-options">
                                <div className="invite">
                                    <PersonPlus /> Invite teammates
                                </div>
                                <div className="help-section">
                                    <div className="help">
                                        <QuestionCircle /> Help and first steps
                                    </div>
                                    <span>0/6</span>
                                </div>
                                <div className="bill">
                                    <div className="help">
                                        <span style={{ backgroundColor: "#d1d1d1", padding: 3, borderRadius: 3 }}>7</span> days left on trial
                                    </div>
                                    <Button>Add billing</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {!isMobile && (
                <div className="sidebar">
                    <div className="sidebar-header">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                            <p style={{ lineHeight: "1.2" }}>
                                <span style={{ color: "gray" }}>INC</span> <br /> InnovateHub
                            </p>
                        </div>
                        <img src={Avatar} alt="avatar" />
                    </div>
                    <div className="create-team">
                        {teams.map((team, index) => (
                            <div key={index} className="create-team-button">
                                <div className="name">
                                    {team.icon} {team.name}
                                </div>
                                <div className="notification">
                                    <Command /> + {team.notifications}
                                </div>
                            </div>
                        ))}
                        <hr />
                        <div className="create-team-button-disabled">
                            <Button onClick={handleAddTeam}>
                                <PlusSquare />
                            </Button>
                            <Form>
                                <Form.Control
                                    type="text"
                                    placeholder="Create a Team"
                                    value={newTeamName}
                                    onChange={(e) => setNewTeamName(e.target.value)}
                                />
                            </Form>
                        </div>
                    </div>
                    <div className="folder-section">
                        <div className="folders">
                            <h6>FOLDERS</h6>
                            <Plus size={25} className="plus" />
                        </div>
                        <div className="collapse-section">
                            <div>
                                <div className="collapses" onClick={toggleDropdown}>
                                    <div className="collapse-btn">
                                        <Folder />
                                        <Button
                                            aria-controls="example-collapse-text"
                                            aria-expanded={isOpen}
                                        >
                                            Products
                                        </Button>
                                    </div>
                                    {isOpen ? <CaretUpFill /> : <CaretDownFill />}
                                </div>
                                <Collapse in={isOpen}>
                                    <div id="collapse-text" className="collapse-text">
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            <li>
                                                <a href="#roadmap">Roadmap</a>
                                            </li>
                                            <li>
                                                <a href="#feedback">Feedback</a>
                                            </li>
                                            <li>
                                                <a href="#performance">Performance</a>
                                            </li>
                                            <li>
                                                <a href="#performance">Team</a>
                                            </li>
                                            <li>
                                                <a href="#performance">Analytics</a>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </div>
                            <div>
                                <div className="collapses" onClick={toggleDropdownSales}>
                                    <div className="collapse-btn">
                                        <Folder />
                                        <Button
                                            aria-controls="example-collapse-text"
                                            aria-expanded={isOpenSale}
                                        >
                                            Sales
                                        </Button>
                                    </div>
                                    {isOpenSale ? <CaretUpFill /> : <CaretDownFill />}
                                </div>
                                <Collapse in={isOpenSale}>
                                    <div id="collapse-text" className="collapse-text">
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            <li>
                                                <a href="#roadmap">Roadmap</a>
                                            </li>
                                            <li>
                                                <a href="#feedback">Feedback</a>
                                            </li>
                                            <li>
                                                <a href="#performance">Performance</a>
                                            </li>
                                            <li>
                                                <a href="#performance">Team</a>
                                            </li>
                                            <li>
                                                <a href="#performance">Analytics</a>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </div>
                            <div>
                                <div className="collapses" onClick={toggleDropdownDesign}>
                                    <div className="collapse-btn">
                                        <Folder />
                                        <Button
                                            aria-controls="example-collapse-text"
                                            aria-expanded={isOpenDesign}
                                        >
                                            Design
                                        </Button>
                                    </div>
                                    {isOpenDesign ? <CaretUpFill /> : <CaretDownFill />}
                                </div>
                                <Collapse in={isOpenDesign}>
                                    <div id="collapse-text" className="collapse-text">
                                        <ul style={{ listStyleType: "none", padding: 0, }}>
                                            <li>
                                                <a href="#roadmap">Roadmap</a>
                                            </li>
                                            <li>
                                                <a href="#feedback">Feedback</a>
                                            </li>
                                            <li>
                                                <a href="#performance">Performance</a>
                                            </li>
                                            <li>
                                                <a href="#performance">Team</a>
                                            </li>
                                            <li>
                                                <a href="#performance">Analytics</a>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </div>
                            <div>
                                <div className="collapses" >
                                    <div className="collapse-btn">
                                        <Folder />
                                        <Button onClick={handleNavigate}>Office</Button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="collapses" >
                                    <div className="collapse-btn">
                                        <Folder />
                                        <Button onClick={handleShow}>Legal</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="additional-options">
                        <div className="invite">
                            <PersonPlus /> Invite teammates
                        </div>
                        <div className="help-section">
                            <div className="help">
                                <QuestionCircle /> Help and first steps
                            </div>
                            <span>0/6</span>
                        </div>
                        <div className="bill">
                            <div className="help">
                                <span style={{ backgroundColor: "#d1d1d1", padding: 3, borderRadius: 3 }}>7</span> days left on trial
                            </div>
                            <Button>Add billing</Button>
                        </div>
                    </div>
                </div>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Restricted Area!</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: "center" }}>
                    <div className="modal-contents">
                        <ExclamationCircle />
                    </div>
                    You are not allowed to go to this page. Request for admin rights.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleClose}>
                        Request
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SideBar;
