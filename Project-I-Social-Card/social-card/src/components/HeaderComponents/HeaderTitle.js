import React from 'react';
import moment from 'moment';
import './Header.css';

function HeaderTitle() {
    return (
    <h4>
    Lambda School &nbsp;
    <span>@LambdaSchool . {moment().format('D MMM').toLocaleLowerCase()}</span>
    </h4>
    );
}

export default HeaderTitle;
