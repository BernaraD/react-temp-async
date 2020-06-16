import React, {useState} from 'react';
import './App.css';
import axios from 'axios'
import NameList from "./NameList";
import UserName from "./UserName";
import EmailList from "./EmailList";
import Address from "./Address";
import PhoneList from "./PhoneList";
import WebsiteList from "./WebsiteList";
import Company from "./Company";


function App() {
    const [users, setUsers] = useState([])




    const loadUsers = () => {
        console.log('Load')


        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
        })
            .then((response) => {
                console.log(response)
                setUsers(response.data);

            });
    };

    const saveEdited = (userId, editedUser) => {
        const editedUsers = users.map(user => {
            if (user.id === userId) {
                return editedUser }
            else return user;
        });
        setUsers(editedUsers);
    };


    //  Cпособ 1
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //       .then(response => response.json())
    //       .then(json => {
    //           setUsers(json);
    //       }
    //       );
    // };
    //fetch returns promise. Promise it is not Java Script.
    // Promise - code который мы не знаем когда выполнится () это функция. Они выполняются тогда, когда она разрешаеться


    return (

        <div className='App'>
            <h1>Users Database</h1>
            <button className='btn btn-primary mb-3'
                    onClick={loadUsers}>Load users
            </button>

            {/*{*/}
            {/*    users.map(el => <li key={el.id}>{el.name}</li>)*/}
            {/*}*/}


            <table className="table table-bordered">
                {
                    users.length !== 0 &&
                <thead className='thead-dark'>
                <tr>

                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Website</th>
                    <th scope="col">Company</th>

                </tr>
                </thead>
                }

                <tbody>
                    {
                        users.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>

                                <NameList columnName='name'
                                          user={user}
                                          saveEdited={saveEdited}/>
                                 <UserName columnName='username'
                                           user={user}
                                           saveEdited={saveEdited}/>
                                <EmailList columnName='email'
                                          user={user}
                                           saveEdited={saveEdited}/>
                                <Address columnName='address'
                                           user={user}
                                         saveEdited={saveEdited}/>
                                <PhoneList columnName='phone'
                                         user={user}
                                           saveEdited={saveEdited}/>
                                <WebsiteList columnName='website'
                                           user={user}
                                             saveEdited={saveEdited}/>
                                <Company columnName='company'
                                             user={user}
                                         saveEdited={saveEdited}/>
                            </tr>
                        )
                    }
            </tbody>
        </table>


</div>
);
}

export default App;
