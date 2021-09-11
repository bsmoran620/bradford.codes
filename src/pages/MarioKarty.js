import React, {Fragment} from 'react';
// import { Button } from 'react-bootstrap';
import '../resources/MarioKarty.css';

export function MarioKarty(props) {
    return (
        <Fragment>
        <div className="mario-karty">
            <div className="image-container welcome">
                <img className="img-fluid center" src="Banshee_Boardwalk.png" alt="alternative" width="50%" />
            </div>
            <h1>YOU'RE INVITED!</h1>
            <div className="image-container main-image">
                <img className="img-fluid center" src="marioKarty64.png" alt="alternative" width="50%" />
            </div>
            <form name="character" data-netlify="true">
                <p>
                    <label className="radio">Mario <input type="radio" name="mario" value="mario"/></label>
                </p>
                <p>
                    <label className="radio">Luigi <input type="radio" name="luigi" value="luigi"/></label>
                </p>
                <p>
                    <label className="radio">Peach <input type="radio" name="peach" value="peach"/></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
        </Fragment>
    );
  }