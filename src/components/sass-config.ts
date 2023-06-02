function SassConfig(): string {
  return `
// all default configurations here
*{ @include box-size; }

::selection{
  background-color: $main; 
  color: $dark;
}
input::selection{
  background-color: $dark; 
  color: $main;
}
body{
  overflow-x: hidden;
  background-color: $light;
  margin: 0;
  font-family: $fontText;
}
a{
  text-decoration: none;
  color: unset;
}
`;
} 
export default SassConfig;