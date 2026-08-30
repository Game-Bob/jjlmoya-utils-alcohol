import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
    integrations: [icon()],
    server: {
        port: 3012,
        host: true
    },
    vite: {
        server: {
            watch: {
                usePolling: true,
                interval: 1000,
            }
        }
    }
});

