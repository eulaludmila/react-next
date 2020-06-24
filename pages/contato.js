import React from 'react';
import { Spinner } from 'reactstrap';
import Menu from '../components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato() {
    return (
        <div>
            <Menu/><br/>
            Welcome to Contato!
            <Spinner color="danger" style={{ width: '15rem', height: '15rem', borderWidth:15 }}/>
        </div>
    );
}

export default Contato;