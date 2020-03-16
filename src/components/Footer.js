import React from 'react';

import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export function Footer() {
    return (
        <div className="footer">
            <small>Copyright &copy; {new Date().getFullYear()} Brad Moran. All Rights Reserved.</small>
            <div className="social-media-links">
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip>Checkout out the code for this website!</Tooltip>
                    }
                >
                    <a href="https://www.github.com/bsmoran620"><FontAwesomeIcon size="lg" icon={faGithub} /></a>
                </OverlayTrigger>
                <a href="https://www.linkedin.com/in/brad-moran-se"><FontAwesomeIcon size="lg" icon={faLinkedinIn} /></a>
            </div>
        </div>
    );
}