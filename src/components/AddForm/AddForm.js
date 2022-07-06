import { TextField, Button} from "@mui/material";
import { connect } from "react-redux";
import "./AddForm.css";
import { addToBasket } from "../../actions";

const AddForm = ({onAddedToBasket}) => {

    return (
        <form onSubmit={() => onAddedToBasket('hola')} noValidate autoComplete="off" className="form">
            <div className="form__container">
                <div className="form__input-container">
                    <TextField 
                        className="form__input" 
                        id="id"
                        color="info"
                        label={'ID товара'}
                        inputProps={{'data-input':"id"}}
                        required
                    />

                    <TextField 
                        className="form__input" 
                        id="name"
                        color="info"
                        label={'Название товара'}
                        inputProps={{'data-input':"name"}}
                        required 
                />

                    <TextField 
                        className="form__input"
                        id="price"
                        color="info"
                        label={'Цена товара'}
                        inputProps={{'data-input':"price"}} 
                        required
                    />
                </div>

                <Button
                    className="form__button"
                    onClick={() => onAddedToBasket('hola')}
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