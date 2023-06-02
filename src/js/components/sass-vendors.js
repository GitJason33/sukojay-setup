function SassVendors() {
    return `
@mixin transform($v) {
  transform: $v;
  -o-transform: $v;
  -webkit-transform: $v;
  -moz-transform: $v;
  -ms-transform: $v;
}

@mixin filter($v) {
  filter: $v;
  -webkit-filter: $v;
}

@mixin transition($v) {
  transition: $v;
  -webkit-transition: $v;
  -o-transition: $v;
  -moz-transition: $v;
}

@mixin animation($v) {
  animation: $v;
  -webkit-animation: $v;
  -o-animation: $v;
  -moz-animation: $v;
}

@mixin linear_gradient($v) {
  background: linear-gradient($v);
  background: -ms-linear-gradient($v);
  background: -moz-linear-gradient($v);
  background: -o-linear-gradient($v);
  background: -webkit-linear-gradient($v);
}

@mixin radial_gradient($v) {
  background: radial-gradient($v);
  background: -ms-radial-gradient($v);
  background: -moz-radial-gradient($v);
  background: -o-radial-gradient($v);
  background: -webkit-radial-gradient($v);
}

@mixin conic_gradient($v) {
  background: conic-gradient($v);
  background: -ms-conic-gradient($v);
  background: -moz-conic-gradient($v);
  background: -o-conic-gradient($v);
  background: -webkit-conic-gradient($v);
}

@mixin flex($d: row, $w: nowrap) {
  display: flex;
  display: -webkit-flex;
  flex-flow: $d $w;
}

@mixin grid {
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
}

@mixin box_size($v: border-box) {
  box-sizing: $v;
  -webkit-box-sizing: $v;
  -moz-box-sizing: $v;
}

@mixin transform_origin($v) {
  transform-origin: $v;
  -moz-transform-origin: $v;
  -webkit-transform-origin: $v;
  -ms-transform-origin: $v;
  -o-transform-origin: $v;
}

@mixin media($breakpoint) {
  @media all and ($breakpoint) {
    @content;
  }
}
`;
}
export default SassVendors;
//# sourceMappingURL=sass-vendors.js.map