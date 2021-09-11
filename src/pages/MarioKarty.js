import React, {Fragment, useState} from 'react';
import { Dropdown, Button, InputGroup } from 'react-bootstrap';
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
            <form name="contact" netlify>
                <InputGroup className="mb-3 mario-kart-radio">
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="Mario"
                                // checked={this.state.selectedOption === "Male"}
                                // onChange={this.onValueChange}
                            />
                            Mario
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="Luigi"
                                // checked={this.state.selectedOption === "Male"}
                                // onChange={this.onValueChange}
                            />
                            Luigi
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="Peach"
                                // checked={this.state.selectedOption === "Male"}
                                // onChange={this.onValueChange}
                            />
                            Peach
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="Toad"
                                // checked={this.state.selectedOption === "Male"}
                                // onChange={this.onValueChange}
                            />
                            Toad
                        </label>
                    </div>
                </InputGroup>
                <InputGroup className="mb-3 mario-kart-radio">
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="Yoshi"
                                // checked={this.state.selectedOption === "Male"}
                                // onChange={this.onValueChange}
                            />
                            Yoshi
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="D.K."
                                // checked={this.state.selectedOption === "Male"}
                                // onChange={this.onValueChange}
                            />
                            D.K.
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="Wario"
                                // checked={this.state.selectedOption === "Male"}
                                // onChange={this.onValueChange}
                            />
                            Wario
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="Bowser"
                                // checked={this.state.selectedOption === "Male"}
                                // onChange={this.onValueChange}
                            />
                            Bowser
                        </label>
                    </div>
                </InputGroup>
                <div className="mario-kart-submit">
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </form>
        </div>
        </Fragment>
    );
  }