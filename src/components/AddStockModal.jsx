import { Button, Dialog, Field, HStack, Input, Portal, Stack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { getSymbolVal } from "../lib/utils";

function AddStockModal({ open, handleOpenClose, data }) {
    const ref = useRef(null);
    const formRef = useRef({
        tickerSymbol: '',
        companyName: '',
        avgPrice: '',
        quantity: '',
        dateBought: ''
    });

    useEffect(() => {
        formRef.current.tickerSymbol = getSymbolVal(data, "symbol");
        formRef.current.companyName = getSymbolVal(data, "name");
        formRef.current.avgPrice = '';
        formRef.current.quantity = '';
        formRef.current.dateBought = '';
    }, [{ ...data }]);

    const handleOnChange = (e) => {
        formRef.current[e.target.name] = e.target.value;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formRef.current);
    }
    return (
        <Dialog.Root size="cover" lazyMount open={open} initialFocusEl={() => ref.current} onOpenChange={(e) => handleOpenClose(e.open)}>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>{getSymbolVal(data, "symbol")} - {getSymbolVal(data, "name")} - {getSymbolVal(data, "region")}</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body pb="4">
                            <Stack gap="4">
                                <Field.Root>
                                    <Field.Label>Ticker Symbol</Field.Label>
                                    <Input placeholder="Ticker Symbol" name="tickerSymbol" defaultValue={formRef.current.tickerSymbol} onChange={handleOnChange} />
                                </Field.Root>
                                <Field.Root>
                                    <Field.Label>Company Name</Field.Label>
                                    <Input placeholder="Company Name" name="companyName" defaultValue={formRef.current.companyName} onChange={handleOnChange} />
                                </Field.Root>
                                <HStack>
                                    <Field.Root>
                                        <Field.Label>Avg Price</Field.Label>
                                        <Input type="number" name="avgPrice" placeholder="Avg Price you bought at" onChange={handleOnChange} />
                                    </Field.Root>
                                    <Field.Root>
                                        <Field.Label>Number of Shares bought</Field.Label>
                                        <Input type="number" name="quantity" placeholder="Number of Shares bought" onChange={handleOnChange} />
                                    </Field.Root>
                                </HStack>
                                <Field.Root>
                                    <Field.Label>Date Bought</Field.Label>
                                    <Input type="date" placeholder="Date Bought" name="dateBought" onChange={handleOnChange} />
                                </Field.Root>
                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button type="submit" onClick={handleFormSubmit}>Save</Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default AddStockModal