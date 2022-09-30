import React from 'react';
import deleteImg from '../../assets/images/delete.svg';
import editImg from '../../assets/images/edit.svg';


export default function Transaction() {
    

    return (
        <li className={`transaction`}>
            <p>Earned this month</p>
            <div className="right">
                <p>৳ $10</p>
                <button className="link">
                    <img alt="Edit" className="icon" src={editImg} />
                </button>
                <button className="link">
                    <img alt="Delete" className="icon" src={deleteImg} />
                </button>
            </div>
        </li>
    );
}