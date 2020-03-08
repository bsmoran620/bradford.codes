import React from 'react';

import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
    return (
        <div className="footer">
            <small>Copyright &copy; {new Date().getFullYear()} Brad Moran. All Rights Reserved.</small>
            <div className="social-media-links">
                <a href="https://www.github.com/bsmoran620"><FontAwesomeIcon size="lg" icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/brad-moran-se"><FontAwesomeIcon size="lg" icon={faLinkedinIn} /></a>
            </div>
        </div>
    );
}