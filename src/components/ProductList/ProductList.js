import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { connect } from "react-redux";

import './ProductList.css';
import ProductListItem from "../ProductListItem/ProductListItem";
import { deletedFromBasket } from "../../actions";

const ProductList = ({goods, onDeletedFromBasket}) => {
    if (goods.length) {
        return (
            <TableContainer className="tableContainer">
                <h3 className="productListTitle">The Goods</h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Имя товара</TableCell>
                            <TableCell align="center">Цена товара</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            goods.map(good => (
                                <ProductListItem key={good.id} good={good} onDeleted={onDeletedFromBasket}/>
                            ))                       
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };

    return (
        <h3 className="productListTitle">It`s empty here :(</h3>
    );

};


const mapStateToProps = ({goods, sale}) => {
    return {goods, sale};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeletedFromBasket: (id) => dispatch(deletedFromBasket(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
