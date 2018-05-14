import React from 'react';

const NavItems = () => {
    const navItems = [
        {'name':"My Feed",'active':"active"},
        {'name':"New Post"},
        {'name':"Find Colleagues"}
    ];
    return navItems.map((item, i) => 
        <li key={i} className={"nav-item " + item.active}>
            <a className="nav-link" href="#">{item.name}
                {item.active ? <span className="sr-only">(current)</span> : ''}
            </a>
        </li>
    );
};

export { NavItems };
