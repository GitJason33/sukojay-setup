function TypescriptConfig() {
    return `
{
  "compilerOptions": {
    /* https://aka.ms/tsconfig documentation */
    "target": "ES6",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "sourceMap": true,
    "outDir": "./src/dist",
    "removeComments": true,
    "strict": true, 
  },
  "include": ["src/**/*"]
}
`;
}
export default TypescriptConfig;
//# sourceMappingURL=typescript.js.map