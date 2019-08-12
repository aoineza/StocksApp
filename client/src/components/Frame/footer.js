import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='footer_top'>
                    <section>
                        <p className='footer_content'>Home</p>
                    </section>
                    <section>
                        <p className='footer_content'>About</p>
                    </section> 
                </footer>
                <footer className='footer_bottom'>
                    <section>
                        <p className='footer_content footer_bottom_color'>
                            Website Name
                        </p>
                    </section>
                </footer>
            </div>
        )
    }
}

export default Footer