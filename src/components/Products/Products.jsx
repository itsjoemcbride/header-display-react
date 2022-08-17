import PropTypes from "prop-types";

export default function Products({ productList }) {
  return productList.map((product) => (
    <li className="cool-list">
      {product.name} {product.price}
    </li>
  ));
}

Products.propTypes = {
  productList: PropTypes.shape.isRequired,
};
