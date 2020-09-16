import React from 'react';
const Footer = () =>{
    return (
        <footer className="text-white py-2 bg-primary">
            <div className="container d-flex ">
                <p>
                    &copy; 2020 CODOPLEX. All rights reserved.
                </p>
                <div className="ml-auto">
                    <a className="d-block text-white" href="/terms">Terms of use</a>
                    <a className="d-block text-white" href="/privacy">Privacy policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;