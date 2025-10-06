import { Box, Card, HStack, Text, VStack } from "@chakra-ui/react"
function StockCard() {
    return (
        <Card.Root size="sm">
            <Card.Header>
                <VStack align="start">
                    <Box>
                        CBA
                    </Box>
                    <Card.Title>
                        Common Wealth Bank
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
                            $170
                        </Text>
                    </VStack>
                    <VStack >
                        <Text fontWeight={"bold"}>
                            Current Price
                        </Text>
                        <Text>
                            $160
                        </Text>
                    </VStack>
                    <VStack >
                        <Text fontWeight={"bold"}>
                            Total Stocks
                        </Text>
                        <Text>
                            10
                        </Text>
                    </VStack>
                </HStack>
            </Card.Body>
            <Card.Footer>
                <HStack fontSize={'xl'} width={'full'} justifyContent={'space-between'} color={'orange'}>
                    <HStack fontWeight={"semibold"}>
                        <Text>2% | </Text>
                        <Text>$10</Text>
                    </HStack>
                    <Box fontWeight={"semibold"}>
                        <Text>$1600</Text>
                    </Box>
                </HStack>
            </Card.Footer>
        </Card.Root>
    )
}

export default StockCard