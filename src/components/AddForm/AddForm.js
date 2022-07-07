import { useState } from "react";
import { TextField, Button} from "@mui/material";
import { connect } from "react-redux";
import "./AddForm.css";
import { addToBasket } from "../../actions";

const AddForm = ({onAddedToBasket}) => {

    const [formInputs, setFormInputs] = useState({id: '', name:'', price: ''});
    
    const onIdInputChange = (e) => {
        setFormInputs((prev) => ({...prev, id: e.target.value}));
    };

    const onNameInputChange = (e) => {
        setFormInputs((prev) => ({...prev, name: e.target.value}));
    };

    const onPriceInputChange = (e) => {
        setFormInputs((prev) => ({...prev, price: e.target.value}));
    };

    const onSubmitForm = () => {
        if (formInputs.id && formInputs.name, formInputs.price) {
            console.log(formInputs);
            onAddedToBasket(formInputs);
            setFormInputs({id: '', name:'', price: ''});
        } else {
            console.log('заполните все поля');
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
                        label={'ID товара'}
                        required
                        value={formInputs.id}
                        onChange={onIdInputChange}
                    />

                    <TextField 
                        className="form__input" 
                        key="name"
                        color="info"
                        label={'Название товара'}
                        required
                        value={formInputs.name} 
                        onChange={onNameInputChange}                   
                    />

                    <TextField 
                        className="form__input"
                        key="price"
                        color="info"
                        label={'Цена товара'}
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

const mapStateToProps = ({goods}) => {
    return {goods};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToBasket: (good) => dispatch(addToBasket(good))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);