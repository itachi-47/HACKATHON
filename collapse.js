import React from 'react';

class Collapse extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <>
          <p className="d-inline-flex gap-1">
            <a
              className="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >new webpage link
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <link href= "https://www.google.com" target="_blank">Google</link>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default Collapse;