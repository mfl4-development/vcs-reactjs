import ProductCard from '../components/fragments/ProductCard';

const ProductPage = () => {
  return (
    <div className='flex justify-center gap-4 py-5'>
      <ProductCard>
        <ProductCard.Header image='/images/steam-deck.jpg'></ProductCard.Header>
        <ProductCard.Body title='Steam Deck'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus autem mollitia,
          temporibus, repellat eaque iure similique exercitationem commodi molestiae consectetur nam
          alias nobis obcaecati provident, quia quasi eligendi minus.
        </ProductCard.Body>
        <ProductCard.Footer price='Rp 11.999.999'></ProductCard.Footer>
      </ProductCard>
      <ProductCard>
        <ProductCard.Header></ProductCard.Header>
        <ProductCard.Body title='Steam Deck 2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt accusamus obcaecati
          architecto enim aspernatur itaque et nisi eveniet, alias vel, mollitia molestiae quasi
          eligendi error provident eaque qui commodi! 2222222
        </ProductCard.Body>
        <ProductCard.Footer price='Rp 11.999.999'></ProductCard.Footer>
      </ProductCard>
    </div>
  );
};

export default ProductPage;
