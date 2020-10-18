import React from 'react';
import { connect } from 'react-redux'
import { setName } from '../../redux/card/cardActions'

const UserName = ({setName, userName}) => {
    return (
        <div>
            <label>Name</label>
            <input type="text" onChange={setName} value={userName}/>
        </div>
    );
};

const mapStateToProps = state => (
    {
        userName: state.card.userName
    }
)
const mapDispatchToProps = dispatch => (
    {
        setName: (e) => dispatch(setName(e.target.value))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(UserName);