import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <Grid fluid>
                    <nav className="pull-left">
                      <ul>
                        <li>
                          <a href="">Home</a>
                        </li>
                        <li>
                          <a href="">About us</a>
                        </li>
                        <li>
                          <a href="">Contact us</a>
                        </li>
                        <li>
                          <a href="">Subscribe</a>
                        </li>
                      </ul>
                    </nav>
                    <p className="copyright pull-right">
                       &copy; 2018 My application
                    </p>
                </Grid>
            </footer>
        );
    }
}

export default Footer;
