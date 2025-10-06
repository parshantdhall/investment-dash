import { useEffect } from "react";
import useTotalPortfolio from "../State Store/TotalPortfolioStore";
import '../styles/TotalPortfolio.css';

function TotalPortfolio({ initVal }) {
    const totalValue = useTotalPortfolio((state) => state.totalValue);
    const initTotalValue = useTotalPortfolio((state) => state.initTotalValue);

    useEffect(() => {
        initTotalValue(initVal);
    }, [initVal]);

    return (
        <div className="total-portfolio">
            <p>Total Value: {totalValue}</p>
        </div>
    )
}

export default TotalPortfolio;