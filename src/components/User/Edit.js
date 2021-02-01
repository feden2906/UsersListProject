import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {SAVE_USERS_LIST} from "../../Redux/action-types";
import {Link} from "react-router-dom";

export default function Edit() {
    const dispatch = useDispatch();
    const chosen = useSelector(store => store.chosenUser);
    const usersList = useSelector(store => store.users);
    const {id, name, email, website, phone} = chosen;

    const onchangeHandler = (e) => {
        e.preventDefault();
        const updatedList = usersList.filter(el => {
            if (el.id === id) {
                el.name = e.target[0].value;
                el.email = e.target[1].value;
                el.phone = e.target[2].value;
                el.website = e.target[3].value;
            }
            return el;
        })
        dispatch({type: SAVE_USERS_LIST, payload: updatedList})
    }

    return (
        <div className="col-3 bg-danger ml-5">
            <form action="" onSubmit={onchangeHandler}>
                <p>Name:</p><input type="text" placeholder={name}/>
                <p>email:</p><input type="text" placeholder={email}/>
                <p>phone:</p><input type="text" placeholder={phone}/>
                <p>website:</p><input type="text" placeholder={website}/>
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
