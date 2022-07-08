import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { connect } from "react-redux";

import './ProductList.css';
import ProductListItem from "../ProductListItem/ProductListItem";
import { deletedFromBasket } from "../../actions";

const ProductList = ({goods, sale, onDeletedFromBasket}) => {
    if (goods.length) {
        return (
            <TableContainer className="tableContainer">
                <h3 className="productListTitle">The Goods</h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><div className="rowTitle">ID</div></TableCell>
                            <TableCell align="center"><div className="rowTitle">name</div></TableCell>
                            <TableCell align="center"><div className="rowTitle">Price</div></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            goods.map(good => (
                                <ProductListItem key={good.id} good={good} sale={sale} onDeleted={onDeletedFromBasket}/>
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
