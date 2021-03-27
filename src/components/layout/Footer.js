import React from "react";

const Footer = () => {
    return(
        <footer class="footer bg-light">
            <div class="container ">
                <div class="row row-cols-auto p-3">
                    <div class="col">&copy; {new Date().getFullYear()} TOURS - All Rights Reserved</div>
                    <div class="col text-right">CONTACT INFO: +375291234567 Tours@info.com</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;