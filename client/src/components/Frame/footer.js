import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='footer_top'>
                    <section>
                        <p className='footer_text footer_top_text_color'>Home</p>
                    </section>
                    <section>
                        <p className='footer_text footer_top_text_color'>About</p>
                    </section> 
                </footer>
                <footer className='footer_bottom'>
                    <section>
                        <p className='footer_content footer_bottom_text_color'>
                            Website Name
                        </p>
                    </section>
                </footer>
            </div>
        )
    }
}

export default Footer