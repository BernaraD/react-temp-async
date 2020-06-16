import React, {useState} from 'react';


function Address (props) {
    const [address, setAddress] = useState(props.user.address);
    const [editMode, setEditMode] = useState(false)

    const onEditMode = () => {
        setAddress(props.user.address);
        setEditMode(true);
    }
    const saveButtonClick = () => {
        props.saveEdited(props.user.id, {...props.user, address: address});
        setEditMode(false);
    };

    const cancelButtonClick = () => {
        setEditMode(false);
    }





    return (
        <td>
           <div>

              <div>Street: {props.user.address.street} </div>
               <div>Suite: {props.user.address.suite} </div>
               <div>City: {props.user.address.city} </div>
               <div>Zipcode: {props.user.address.zipcode} </div>
               <div>Geo: {props.user.address.geo.lat}, {props.user.address.geo.lng} </div>
           </div>
        </td>


    );
}

export default Address;
