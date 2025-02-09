function Title({ products }) {
  return <>{products.length == 0 && <h2>No product yet!</h2>}</>;
}

export default Title;
