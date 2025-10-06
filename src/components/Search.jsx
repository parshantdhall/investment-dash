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
import { getSearchEndpoint } from "../lib/apis"


const example =
    [
        {
            "1. symbol": "BC",
            "2. name": "Brunswick Corp",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "1.0000"
        },
        {
            "1. symbol": "BC88.LON",
            "2. name": "BC88",
            "3. type": "Equity",
            "4. region": "United Kingdom",
            "5. marketOpen": "08:00",
            "6. marketClose": "16:30",
            "7. timezone": "UTC+01",
            "8. currency": "GBX",
            "9. matchScore": "0.6667"
        },
        {
            "1. symbol": "BC0.FRK",
            "2. name": "Boise Cascade Company",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5714"
        },
        {
            "1. symbol": "BC3.FRK",
            "2. name": "BCI Minerals Limited",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5714"
        },
        {
            "1. symbol": "BC7.FRK",
            "2. name": "BLOCKCHAIN GRP SA EO-04",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5714"
        },
        {
            "1. symbol": "BC8.FRK",
            "2. name": "Bechtle AG",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5714"
        },
        {
            "1. symbol": "BC1P.FRK",
            "2. name": "Barco NV",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5000"
        },
        {
            "1. symbol": "BC51.FRK",
            "2. name": "Bolsa Mexicana de Valores S.A.B. de C.V",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5000"
        },
        {
            "1. symbol": "BC8.DEX",
            "2. name": "Bechtle AG",
            "3. type": "Equity",
            "4. region": "XETRA",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5000"
        },
        {
            "1. symbol": "BC94.LON",
            "2. name": "Samsung Electronics Co. Ltd",
            "3. type": "Equity",
            "4. region": "United Kingdom",
            "5. marketOpen": "08:00",
            "6. marketClose": "16:30",
            "7. timezone": "UTC+01",
            "8. currency": "USD",
            "9. matchScore": "0.5000"
        }
    ];

const Search = ({ handleAddStock }) => {

    const [inputValue, setInputValue] = useState("")

    const { collection, set } = useListCollection({
        initialItems: [],
        itemToString: (item) => item["1. symbol"],
        itemToValue: (item) => item,
    })

    const state = useAsync(async () => {
        if (inputValue && inputValue != '') {
            // const response = await fetch(
            //     getSearchEndpoint(inputValue),
            // )
            // const data = await response.json()
            // set(data.bestMatches)
            set(example)

        }
    }, [inputValue, set]);

    const handleOnSelect = (e) => {
        handleAddStock(e.itemValue);
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
                <Combobox.Input placeholder="Add Stock" _placeholder={{ color: "white" }} caretColor={"white"} />
                <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger color={"white"} />
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
                            collection.items?.map((item) => (
                                <Combobox.Item key={item['1. symbol']} item={item} _hover={{ bg: "bg.subtle" }}>
                                    <HStack justify="space-between" textStyle="sm">
                                        <Span fontWeight="medium" truncate>
                                            {item['1. symbol']}
                                        </Span>
                                        <Span color="fg.muted" truncate>
                                            {item['2. name']}
                                        </Span>
                                        <Span color="orange" fontWeight={'semibold'}>
                                            {item['4. region']}
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