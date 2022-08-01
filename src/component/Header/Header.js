import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="nav-container">
            <div>
                <Nav>
                    <Nav.Item>
                        <Nav.Link  className="text-light p-3" href="/home"><Link to="/home">Home</Link></Nav.Link>
                        
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link  className="text-light p-3" href="/home"><Link to="/faculty">Faculty</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link  className="text-light p-3" href="/syllabus"><Link to="/syllabus">Syllabus</Link></Nav.Link>
                    </Nav.Item>  
                </Nav>
               
            </div>
            <div>
            <Nav>
                <Nav.Item>
                    <Nav.Link  className="text-light p-3" href="/home"><Link to="/blog">Blog</Link></Nav.Link>
                </Nav.Item>
            </Nav>
           
            
            
            </div>
            <div>
            <Nav>
                <Nav.Item>
                    <Nav.Link  className="text-light p-3" href="/home"><Link to="/classes">Classes</Link></Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav>
                <Nav.Item>
                    <Nav.Link  className="text-light p-3" href="/home"><Link to="/carrier">Carrier</Link></Nav.Link>
                </Nav.Item>
            </Nav>
            
            </div>
            

        </div>
    );
};

export default Header;