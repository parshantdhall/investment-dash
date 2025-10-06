import {
    createSystem,
    defaultConfig,
    defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                blue: '#244855',
                orange: '#E64833',
                brown: '#874F41',
                cream: '#FBE9D0',
            },
        },
    },
})

const system = createSystem(defaultConfig, config)

export default system;