import { TableRow, TableCell } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from "react-redux";

import './ProductListItem.css';

const ProductListItem = ({good, sale, onDeleted}) => {

    const PriceRow = ({sale}) => {
        if (+sale > 0) {
            const priceWithSale = (good.price * (1-(+sale/100))).toFixed(1);
            return (
                <TableCell align="center"><div className="textField"><div className="throughPrice">{good.price}</div>{priceWithSale}</div></TableCell>
            );
        }   

        return (
            <TableCell align="center"><div className="textField">{good.price}</div></TableCell>
        );
    };
    
    return (

        <TableRow>
            <TableCell className="wa" align="center"><div className="textField">{good.key}</div></TableCell>
            <TableCell align="center"><div className="textField">{good.name}</div></TableCell>
            <PriceRow sale={sale} />
            <TableCell align="center">
                <DeleteIcon color="error" className="delete-icon" onClick={() => onDeleted(good.id)}/>
            </TableCell>
        </TableRow>
    )

};

const mapStateToProps = ({sale}) => {
    return {sale};
};

export default connect(mapStateToProps)(ProductListItem);