import { TableBody, TableRow, TableCell } from "@mui/material";
import { connect } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

import './ProductListItem.css';

const ProductListItem = ({good, onDeleted}) => {
    
    return (

        <TableRow>
            <TableCell className="wa" align="center">{good.key}</TableCell>
            <TableCell align="center">{good.name}</TableCell>
            <TableCell align="center">{good.price}</TableCell>
            <TableCell align="center">
                <DeleteIcon color="error" className="delete-icon" onClick={() => onDeleted(good.id)}/>
            </TableCell>
        </TableRow>
    )

};

export default ProductListItem;