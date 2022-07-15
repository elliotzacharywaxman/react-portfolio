import React from "react";


const footStyle = {
    position: "relative",
    width: "100%",
    marginTop: "auto",
    left: 0,
    bottom: 0,
    right: 0,
}

export default function Footer() {
    return (
        // <!-- Footer -->
        <footer style={footStyle} className="bg-dark text-center text-white">
            {/* <!-- Grid container --> */}
            <div className="container p-4">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                    {/* <!-- Facebook --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>

                    {/* <!-- Twitter --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>

                    {/* <!-- Google --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i
                    ></a>

                    {/* <!-- Instagram --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>

                    {/* <!-- Linkedin --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>

                    {/* <!-- Github --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
                {/* <!-- Section: Social media --> */}
                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">Elliot Studios</a>
                </div>
            </div>
        </footer>
    );
}

