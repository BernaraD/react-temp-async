import React from 'react';


function Company(props) {

    return (
        <td>
            <div>Company: {props.user.company.name} </div>
            <div>Catch phrase: {props.user.company.catchPhrase} </div>
            <div>BS: {props.user.company.bs} </div>
        </td>


    );
}

export default Company;
