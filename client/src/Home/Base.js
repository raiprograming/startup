import React from "react";

const Base=({
    title="",
    className="",
    children
})=>{
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
         
          <button
            class="navbar-toggler navbar-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav nav mr-auto">
              <li className="nav-item">
                <button className="btn btn-lg btn-outline-info text-light">
                  sell
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-lg btn-outline-info text-light">
                  sell
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-lg btn-outline-info text-light">
                  sell
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <div className={className}>{children}</div>
        <footer className="bg-info text-center">
          <h1 className="text-center text-">
            if u got any question, feel free to contact us
          </h1>
          <button className="btn btn-outline btn-lg btn-success h1">
            contact us
          </button>
        </footer>
      </div>
    );
}

export default Base;