import React, { useState, useEffect, useRef } from 'react';


const Navbar = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const subMenuRef = useRef(null);
    const pagesToggleRef = useRef(null);

    const toggleSubMenu = (event) => {
        event.preventDefault();
        setIsSubMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                pagesToggleRef.current &&
                !pagesToggleRef.current.contains(event.target) &&
                subMenuRef.current &&
                !subMenuRef.current.contains(event.target)
            ) {
                setIsSubMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header id='inicio'>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="#inicio" className="logo">Company</a>
                    <span className="divider"></span>
                    <ul className="menu-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li className="dropdown">
                            <a 
                                href="#" 
                                className="pages-toggle" 
                                onClick={toggleSubMenu}
                                ref={pagesToggleRef}
                            >
                                Pages <i className="fas fa-angle-down"></i>
                            </a>
                            <ul className="sub-menu" style={{ display: isSubMenuOpen ? 'block' : 'none' }} ref={subMenuRef}>
                                <li><a href="#">Subpage 1</a></li>
                                <li><a href="#">Subpage 2</a></li>
                                <li><a href="#">Subpage 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Cart [0]</a></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <a href="https://www.linkedin.com/in/cecilia-prado-29601521b/" className="consultation">Free Consultation <i className="fas fa-arrow-right"></i></a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
