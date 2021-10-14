/**
 * Link 带有 callback 回调功能的链接
    onClick() 当点击链接时会触发
 */

import React from "react";
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <div>{children}</div>
    }
    return (
        <div>
            <a
                href=""
                onClick={e => {
                    e.preventDefault()
                    onClick()
                }}
            >
                {children}
            </a>
        </div>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link