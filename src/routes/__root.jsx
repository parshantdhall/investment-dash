import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Provider } from "../components/ui/provider"
import { ChakraProvider } from '@chakra-ui/react'
import ChakraThemeStore from "../State Store/ChakraThemeStore"

const RootLayout = () => (
    <Provider>
        <ChakraProvider value={ChakraThemeStore}>
            <Outlet />
            <TanStackRouterDevtools />
        </ChakraProvider>
    </Provider>
)

export const Route = createRootRoute({ component: RootLayout })