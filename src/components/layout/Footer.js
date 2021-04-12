import React from "react";

const Footer = () => {
    return(
        <footer className="footer bg-light">
            <div className="container ">
                <div className="row row-cols-auto p-3">
                    <div className="col">&copy; {new Date().getFullYear()} TOURS - All Rights Reserved</div>
                    <div className="col text-right">CONTACT INFO: +375291234567 Tours@info.com</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;