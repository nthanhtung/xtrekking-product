import React from 'react';
// import NestedMenu from "./Menu"
import SimpleMenu from "./SimpleMenu"
import "./Menus.css"

function SimpleMenus({f1, f2, f3}) {
    return (
        <div className="menu">
            <div className="menu1">
                <SimpleMenu menu="Tour" f={f1}/>
            </div>
            <div className="menu2">
                <SimpleMenu menu="Agency" f={f2} />
            </div>
            <div className="menu3">
                <SimpleMenu menu="Transportation" f={f3} />
            </div>
        </div>
    )
}

export default SimpleMenus