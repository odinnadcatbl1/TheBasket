import { useState } from "react";
import { TextField, Button} from "@mui/material";
import { connect } from "react-redux";
import "./AddForm.css";
import { addToBasket } from "../../actions";

const AddForm = ({onAddedToBasket}) => {

    const [formInputs, setFormInputs] = useState({id: '', key: '', name:'', price: ''});
    
    const onIdInputChange = (e) => {
        setFormInputs((prev) => ({...prev, key: e.target.value}));
    };

    const onNameInputChange = (e) => {
        setFormInputs((prev) => ({...prev, name: e.target.value}));
    };

    const onPriceInputChange = (e) => {
        setFormInputs((prev) => ({...prev, price: e.target.value}));
    };

    const onSubmitForm = () => {
        if (formInputs.key && formInputs.name, formInputs.price) {
            formInputs.id = Date.now().toString();
            onAddedToBasket(formInputs);
            setFormInputs({id: '', key: '', name:'', price: ''});
        } else {
            alert('Fill in all the fields!');
        }
    };

    return (
        <form onSubmit={onSubmitForm} noValidate autoComplete="off" className="form">
            <div className="form__container">
                <div className="form__input-container">

                    <TextField 
                        className="form__input" 
                        key="id"
                        color="info"
                        label={'good ID'}
                        required
                        value={formInputs.key}
                        onChange={onIdInputChange}
                    />

                    <TextField 
                        className="form__input" 
                        key="name"
                        color="info"
                        label={'good name'}
                        required
                        value={formInputs.name} 
                        onChange={onNameInputChange}                   
                    />

                    <TextField 
                        className="form__input"
                        key="price"
                        color="info"
                        label={'good price'}
                        required
                        value={formInputs.price}
                        onChange={onPriceInputChange}
                        
                    />
                </div>

                <Button
                    className="form__button"
                    onClick={onSubmitForm}
                    variant="contained"
                    color="info">
                    Send
                </Button>
            </div>
        </form>
    ); 

};

const mapStateToProps = ({goods, sale}) => {
    return {goods, sale};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToBasket: (good) => dispatch(addToBasket(good))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);