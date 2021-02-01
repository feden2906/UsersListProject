import React from "react";
import {useDispatch} from "react-redux";
import {CREATE_USER} from "../../Redux/action-types";
import {Link} from "react-router-dom";

export default function CreateUser() {
    const dispatch = useDispatch();

    const onchangeHandler = (e) => {
        e.preventDefault();
        dispatch({
            type: CREATE_USER,
            payload: {
                name: e.target[0].value,
                email: e.target[1].value,
                phone: e.target[2].value,
                website: e.target[3].value
            }
        })
    }

    return (
        <div className="col-3 bg-danger ml-5">

            <form action="" onSubmit={onchangeHandler}>
                <p>Name:</p><input type="text"/>
                <p>email:</p><input type="text"/>
                <p>phone:</p><input type="text"/>
                <p>website:</p><input type="text"/>
                <button className="btn btn-info">save</button>
                <Link to='/users'>
                    <button type="button" className="btn btn-info">
                        cancel
                    </button>
                </Link>
            </form>
        </div>
    );

}
