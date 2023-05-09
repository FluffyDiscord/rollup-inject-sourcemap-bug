import { defineConfig } from "vite"
import inject from "@rollup/plugin-inject"

export default defineConfig(({ mode }) => ({
    plugins: [
        inject({
            $: "jquery",
            include: "**/*.js",
            sourceMap: true,
        }),
    ]
}))