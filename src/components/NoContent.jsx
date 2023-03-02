import noProduct from '../noProduct.png';

const NoContent = () => {
  const StyleDiv = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center"
  }
  return (
    <div style={StyleDiv}>
      <p>Opps! There is no more content to show.</p>
      <img className = "no_product_image" src={noProduct} alt="no more products to show icon"/>
    </div>
  )
}
export default NoContent;

