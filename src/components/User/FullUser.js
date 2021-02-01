import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../../App.css'
import {ADD_CHOSEN_USER, DELETE_CHOSEN_USER} from "../../Redux/action-types";
import {Link} from "react-router-dom";


export default function FullUser() {
    const dispatch = useDispatch();
    const chosen = useSelector(store => store.chosenUser);
    const {username, email, website, phone} = chosen;

    return (
        <div className="col-3 bg-primary ml-5">
            {!!chosen && <ul className='mt-4 full-user-list'>
                <li>Id: {chosen.id}</li>
                <li>User Name: {username}</li>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
                <li>Website: {website}</li>
            </ul>}
            <div className="edit-buttons">
                <Link to='/users/info/edit'>
                    <button type="button" className="btn btn-warning"
                            onClick={() => dispatch({type: ADD_CHOSEN_USER, payload: chosen})}>Edit User
                    </button>
                </Link>
                <button type="button" className="btn btn-danger"
                        onClick={() => dispatch({type: DELETE_CHOSEN_USER, payload: chosen.id})}>
                    <Link to='/users'>Delete User</Link>
                </button>
            </div>
        </div>
    );
}
