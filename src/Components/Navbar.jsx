import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {links, media} from '../Utils/consts';
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [visible, setVisible] = useState(window.innerWidth >= 720);

    const checkSize = () => {
        setVisible(window.innerWidth >= 720);
    };
    
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    }, []);

    const pages = links;
    const socMedia = media;

    return (
        <div id='navbar'>
            <div id='showBtn'>
                <AiOutlineMenu size={80} style={{transition: 'all 1s'}} onClick={() => {setVisible(!visible)}} style={(visible) ? {transform: 'rotate(90deg)'} : {}} />
            </div>
            <div id='logo'>
                <h1>CO. Name</h1>
            </div>
            <div id='pages' style={(visible) ? {} : {display: 'none'}}>
                {
                    pages.map((page) => {
                        return <div key={page.id}>
                            <Link to={page.link}><p>{page.name}</p></Link>
                        </div>
                    })
                }
            </div>
            <div id='socMedia' style={(visible) ? {} : {display: 'none'}}>
                {
                    socMedia.map((link) => {
                        return <div key={link.id}>
                            <Link to={link.link}>{link.name}</Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Navbar
