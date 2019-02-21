import React from 'react'
import Link from 'react-router-dom'
import Toggler from './Toggler.js'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { toggleOn: false };
        // this.toggleNav = this
        //     .toggleNav
        //     .bind(this)
    }

    // toggleNav(e) {
    //     e.preventDefault();
    //     this.setState(prevState => ({
    //         isNavOn: !prevState.isNavOn
    //     }))
    // }

    render() {
        return (
           <div>
             <Toggler />

             </div>
        )
    }
}

export default Navbar