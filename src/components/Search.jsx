import {
    Combobox,
    HStack,
    Portal,
    Span,
    Spinner,
    useListCollection,
} from "@chakra-ui/react"
import { useState } from "react"
import { useAsync } from "react-use"

const Search = () => {

    const getSearchEndpoint = (inputValue) => {
        return `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputValue}&apikey=E1DLEWXLFMY4K0H8`;
    }

    const [inputValue, setInputValue] = useState("")

    const { collection, set } = useListCollection({
        initialItems: [],

    })

    const state = useAsync(async () => {
        if (inputValue && inputValue != '') {
            const response = await fetch(
                getSearchEndpoint(inputValue),
            )
            const data = await response.json()
            console.log(data)
            set(data.bestMatches)
        }
    }, [inputValue, set]);

    const handleOnSelect = (e) => {
        console.log(e.itemValue);
    }

    return (
        <Combobox.Root
            width="320px"
            collection={collection}
            placeholder="CBA"
            color={'white'}
            onInputValueChange={(e) => setInputValue(e.inputValue)}
            onSelect={(e) => handleOnSelect(e)}
            positioning={{ sameWidth: false, placement: "bottom-start" }}
        >

            <Combobox.Control>
                <Combobox.Input placeholder="Add Stock" _placeholder={{ color: "white" }} />
                <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                </Combobox.IndicatorGroup>
            </Combobox.Control>

            <Portal>
                <Combobox.Positioner>
                    <Combobox.Content minW="sm">
                        {state.loading ? (
                            <HStack p="2">
                                <Spinner size="xs" borderWidth="1px" />
                                <Span>Loading...</Span>
                            </HStack>
                        ) : state.error ? (
                            <Span p="2" color="fg.error">
                                Error fetching
                            </Span>
                        ) : (
                            collection.items?.map((symbol) => (
                                <Combobox.Item key={symbol.name} item={symbol}>
                                    <HStack justify="space-between" textStyle="sm">
                                        <Span fontWeight="medium" truncate>
                                            {symbol.name}
                                        </Span>
                                        <Span color="fg.muted" truncate>
                                            {symbol.symbol} / {symbol.name}
                                        </Span>
                                    </HStack>
                                    <Combobox.ItemIndicator />
                                </Combobox.Item>
                            ))
                        )}
                    </Combobox.Content>
                </Combobox.Positioner>
            </Portal>
        </Combobox.Root>
    )
}

export default Search;