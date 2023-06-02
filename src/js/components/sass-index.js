function SassIndex() {
    return `
// SCSS code here, don't touch CSS to preserve clean code
// Use _vendors.scss mixins to ensure reliable code
// add all functions, mixins and utility classes inside _utils.scss 
// seperate each static component in a file inside components folder and import them in index.scss

// responsiveness code in responsive folder, and import the respective one to its page or component.
// seperate responsive files, 1 for each component/page and import them respectively in those files.

// main builders
@import "helpers/vars";
@import "helpers/vendors";
@import "helpers/config";
@import "helpers/utils";

// components here
// @import "components/Header";
`;
}
export default SassIndex;
//# sourceMappingURL=sass-index.js.map