function SassUtils() {
    return `
// utitility functions and mixins. add whatever you need here. delete unused ones.
@mixin center{
  @include flex;
  justify-content: center;
  align-items: center;
}

@function border($w: 1px, $s: outset, $c: black){
  @return $w $s $c;
}
`;
}
export default SassUtils;
//# sourceMappingURL=sass-util.js.map