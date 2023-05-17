const formatting_options = {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
}
const dollarString = new Intl.NumberFormat( 'en-US', formatting_options );
export default dollarString;
