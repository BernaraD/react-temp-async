import React, {useState} from 'react';


function PhoneList (props) {
    const [phone, setPhone] = useState(props.user.phone);
    const [editMode, setEditMode] = useState(false)

    const onEditMode = () => {
        setPhone(props.user.phone);
        setEditMode(true);
    }
    const saveButtonClick = () => {
        props.saveEdited(props.user.id, {...props.user, phone: phone});
        setEditMode(false);
    };

    const cancelButtonClick = () => {
        setEditMode(false);
    }





    return (
        <td>
            {(!editMode) ?
                <div style={{display: 'flex'}}>
                    {props.user.phone}

                    <button className="btn btn-sm float-right"
                            style={{marginLeft: "auto"}}
                            onClick={onEditMode}>

                        <svg className="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
                            <path fillRule="evenodd"
                                  d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
                        </svg>
                    </button>
                </div>
                :
                <div style={{display: "flex"}}>
                    <input type="text"
                           value={phone}
                           onChange={e => setPhone(e.target.value)}/>

                    <button className="btn btn-sm float-right"
                            onClick={saveButtonClick}> ✅ </button>

                    <button className="btn btn-sm float-right"
                            onClick={cancelButtonClick}> ❎ </button>

                </div>
            }

        </td>


    );
}


export default PhoneList;
