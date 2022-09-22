import React from 'react';
import { userHistory, userLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

export default ({ title, icon, link }) => {
    const history = userHistory();
    const location = userLocation();

    let isActive = location.pathname == link;

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.pushState( link );
    }
    return (
        <LinkArea data-tip={title} data-for="tip-right" active={isActive} href={link} onClick={handleLinkClick}>
           <LinkIcon src={icon} />
        </LinkArea>
    );
}