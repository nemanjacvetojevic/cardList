import React from 'react';
import { connect } from 'react-redux'
import CardsList from '../components/cardsList/CardsList';

export const MyCards = () => {
    return (
        <div className="App"> 
            <h1>My cards</h1>       
            <CardsList />
        </div>
    );
}


const MapStateToProps = state => (
    {}
);

const MapDispatchToProps = dispatch => (
    {}
);


export default connect(MapStateToProps,MapDispatchToProps)(MyCards);