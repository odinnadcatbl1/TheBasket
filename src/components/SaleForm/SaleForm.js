import { useState } from 'react';

import './SaleForm.css';

import { TextField, Button } from '@mui/material';
import { connect } from 'react-redux';
import { addSale } from '../../actions';

const SaleForm = ({onAddedSale}) => {
    
    const [sale, setSale] = useState('');

    const onSaleInputChange = (e) => {
        let value = e.target.value.replace(/[^\d]/g, "");
        if (e.target.value > 100) {
            return false;
        }

        setSale(value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (sale >= 0 && sale <= 100) {
            onAddedSale(sale);
        }
        else {
            onAddedSale(0);
        }
    }

    return (
        <form onSubmit={onSubmitForm} className='saleForm'>
            <TextField 
                color="info"
                label={'Sale, %'}
                value={sale}
                onChange={onSaleInputChange}
            />

            <Button
                className="saleButton"
                onClick={onSubmitForm}
                variant="contained"
                color="info">
                Set Sale</Button>
        </form>
    );
};

const mapStateToProps = ({sale}) => {
    return {sale};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedSale: (sale) => dispatch(addSale(sale)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaleForm);
