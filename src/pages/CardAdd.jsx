import React from 'react';
import { connect } from 'react-redux'
import Input from '../components/input/Input';
import { cardReset } from '../redux/cardlist/cardListActions';

const CardAdd = () => {
    return (
        <div>
            <h1>Card add</h1>
            <Input />
        </div>
    );
}

const MapStateToProps = state => (
    {}
);

const MapDispatchToProps = dispatch => (
    {
    }
);


export default connect(MapStateToProps,MapDispatchToProps)(CardAdd);