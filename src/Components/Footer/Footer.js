import React from 'react'
function Footer() {
  return (
    <div>
          <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/itsKapri" role="button" target='blank'
                        ><i className="fab fa-github"/>
                        </a>
                    </section>

                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>
    </div>
  )
}

export default Footer