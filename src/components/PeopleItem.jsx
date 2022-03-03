import React from 'react';

function UserItem(props) {
    const {  nume, prenume, meserie, salariu, dataangajarii } = props;

    return (
        <div className="user-item mt-3">
            <h5>{nume} {prenume}</h5>
            <p>Meserie: {meserie}</p>
            <p>Salariu:{salariu}</p>
            <p>Data angajarii:{dataangajarii}</p>
        </div>
    );
}

export default UserItem

