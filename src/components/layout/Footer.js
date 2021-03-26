import React from "react";

const Footer = () => {
    return(
        <div className="bg-light text-center text-lg-start">
            <footer class="footer">
                &copy; {new Date().getFullYear()} TOURS - All Rights Reserved
            </footer>
        </div>
    );
}

export default Footer;