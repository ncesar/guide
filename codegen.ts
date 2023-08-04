import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'github.schema.graphql',

  generates: {
    'src/types/github.d.ts': {
      plugins: ['typescript'],
    },

    './': {
      documents: 'src/**/*.ts',
      plugins: ['typescript-operations'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@/types/github.d',
      },
    },
  },
};

export default config;
