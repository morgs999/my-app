import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: 'iqewa31y',
    dataset: 'production',
    title: "My Personal Blog",
    apiVersion: '2024-08-19',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: { types: schemas },
});

export default config;