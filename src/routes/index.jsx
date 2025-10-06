import { Box, Stack } from "@chakra-ui/react"
import Header from "../components/Header"
import StockCard from "../components/StockCard"
import TotalPortfolio from "../components/TotalPortfolio"
import { createFileRoute } from '@tanstack/react-router'
import { getAllRows } from "../lib/appwrite"
import { useEffect, useState } from "react"

export const Route = createFileRoute('/')({
    component: Index,
});

function Index() {
    const [rows, setRows] = useState([]);
    const [totalPortfolio, setTotalPortfolio] = useState(0);

    useEffect(() => {
        (async () => {
            const data = await getAllRows(import.meta.env.VITE_STOCKS_TABLE_ID);
            if (data && data.length > 0) {
                let filtered = data.filter(item => (
                    item.is_removed === false
                ));
                if (filtered && filtered.length > 0) {
                    let total = 0;
                    filtered.forEach(item => {
                        total += item.purchase_price * item.quantity; //later on change it to current price * quantity
                    });
                    setTotalPortfolio(Math.round(total * 100) / 100); //round total
                }
                setRows(filtered);
            }
        })();
    }, []);

    return (
        <>
            <Header />
            <TotalPortfolio initVal={totalPortfolio} />
            <Box as={"main"} mt='1'>
                <Stack direction="row" wrap="wrap" p={2}>
                    {
                        rows && rows.length > 0 && rows.map(item => (
                            <StockCard key={item.$id} stock={item} />
                        ))
                    }
                </Stack>
            </Box>
        </>
    )
}
