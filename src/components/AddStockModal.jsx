import { Button, Dialog, Field, Input, Portal, Stack } from "@chakra-ui/react";
import { useRef } from "react";

function AddStockModal({ open, handleOpenClose, data }) {
    const ref = useRef(null)
    return (
        <Dialog.Root size="cover" lazyMount open={open} initialFocusEl={() => ref.current} onOpenChange={(e) => handleOpenClose(e.open)}>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Dialog Header</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body pb="4">
                            <Stack gap="4">
                                <Field.Root>
                                    <Field.Label>First Name</Field.Label>
                                    <Input placeholder="First Name" />
                                </Field.Root>
                                <Field.Root>
                                    <Field.Label>Last Name</Field.Label>
                                    <Input ref={ref} placeholder="Focus First" />
                                </Field.Root>
                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button>Save</Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default AddStockModal