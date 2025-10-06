import { Box, Stack } from "@chakra-ui/react"
import Header from "../components/Header"
import StockCard from "../components/StockCard"
import TotalPortfolio from "../components/TotalPortfolio"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <Header />
            <TotalPortfolio />
            <Box as={"main"} mt='5'>
                <Stack direction="row" wrap="wrap" p={2}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                            <StockCard key={item} />
                        ))
                    }
                </Stack>
            </Box>
        </>
    )
}

export default Index