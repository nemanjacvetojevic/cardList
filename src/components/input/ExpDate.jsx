import React from 'react';
import { connect } from 'react-redux';
import { setExpDate } from '../../redux/card/cardActions'

const ExpDate = ({setExpDate, expDate}) => {
    return (
        <div>
            <label>Expires on</label>
            <input type="tel" maxLength="5" onChange={setExpDate} value={expDate} />
        </div>
    );
};

const mapStateToProps = state => (
    {
        expDate: state.card.expDate
    }
)
const mapDispatchToProps = dispatch => (
    {
        setExpDate: (e) => dispatch(setExpDate(e.target.value))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(ExpDate);

