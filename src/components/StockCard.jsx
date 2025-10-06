import { Box, Card, HStack, Span, Spinner, Text, VStack } from "@chakra-ui/react"
import { useAsync } from "react-use";
import { getStockCurrentPrice } from "../lib/apis";
import { getSymbolVal } from "../lib/utils";
function StockCard({ stock }) {

    const state = useAsync(async () => {
        // if (stock?.symbol) {
        //     const response = await fetch(
        //         getStockCurrentPrice(stock?.symbol),
        //     )
        //     const data = await response.json()
        //     return data["Global Quote"];
        // }
    }, [stock?.symbol]);

    return (
        stock && state.loading ? (
            <HStack p="2">
                <Spinner size="xs" borderWidth="1px" />
                <Span>Loading...</Span>
            </HStack>
        ) : state.error ? (
            <Span p="2" color="fg.error">
                Error fetching
            </Span>
        ) : (<Card.Root size="sm">
            <Card.Header>
                <VStack align="start">
                    <Box>
                        {stock.symbol}
                    </Box>
                    <Card.Title>
                        {stock.company_name}
                    </Card.Title>
                </VStack>
            </Card.Header>
            <Card.Body>
                <HStack>
                    <VStack >
                        <Text fontWeight={"bold"}>
                            AVG Price
                        </Text>
                        <Text>
                            ${stock.purchase_price}
                        </Text>
                    </VStack>
                    <VStack >
                        <Text fontWeight={"bold"}>
                            Current Price
                        </Text>
                        <Text>
                            ${getSymbolVal(state?.value, "price")}
                        </Text>
                    </VStack>
                    <VStack >
                        <Text fontWeight={"bold"}>
                            Total Stocks
                        </Text>
                        <Text>
                            {stock.quantity}
                        </Text>
                    </VStack>
                </HStack>
            </Card.Body>
            <Card.Footer>
                <HStack fontSize={'xl'} width={'full'} justifyContent={'space-between'} color={'orange'}>
                    <HStack fontWeight={"semibold"}>
                        <Text>${((getSymbolVal(state?.value, "price") - stock.purchase_price) / stock.purchase_price) * 100}% | </Text>
                        <Text>${getSymbolVal(state?.value, "price") - stock.purchase_price}</Text>
                    </HStack>
                    <Box fontWeight={"semibold"}>
                        <Text>${stock.purchase_price * stock.quantity}</Text>
                    </Box>
                </HStack>
            </Card.Footer>
        </Card.Root>)
    )
}

export default StockCard