import { connect } from "react-redux";
import './StatsBlock.css';

const StatsBlock = ({goods, sale}) => {

    const goodsCount = goods.length;

    if (!goodsCount) {
        return false;
    }
    let totalSum = 0;

    goods.map((good) => {
        totalSum += +good.price;
        return totalSum;
    });

    const TotalSum = () => {
        if (+sale > 0) {
            const sumWithSale = (totalSum * (1-(+sale/100))).toFixed(1);
            return (
               <div className="totalSum">Total: &nbsp; <div className="saleTotalSum">{totalSum}</div> {sumWithSale}</div>
            );
        } 

        return (
            <div className="totalSum">Total: {totalSum}</div>
        );
    };

    return (
        <div className="statsBlock">
            <div className="goodsCount">Count: {goodsCount}</div>
            <TotalSum />
        </div>
    )
};

const mapStateToProps = ({goods, sale}) => {
    return {goods, sale};
};

export default connect(mapStateToProps)(StatsBlock);