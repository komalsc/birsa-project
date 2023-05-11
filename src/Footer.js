import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div >
        <div>
          <div>
            <h4>About</h4>
            <p>
              Hyrathon is a comprehensive, feature-rich, easy-to-use, all-in-one
              solution for efficient yet through technical hiring. Using
              hyrathon, Make it Managers can run a more through process and yet
              crunch cycle time.
            </p>
          </div>
          <div>
            <h4>Offerings</h4>
            <ul className="list-unstyled">
              <li>Corporates</li>
              <li>Educational Institutes</li>
              <li>Students</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>Support Docs</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h4>API Docs</h4>
            <ul className="list-unstyled">
              <li>API Docs</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <hr />
            <p>
              <small>
                &copy;{new Date().getFullYear()} Hyrathon. All rights reserved.
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
