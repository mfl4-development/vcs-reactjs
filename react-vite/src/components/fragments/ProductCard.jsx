import { Link } from 'react-router';
import Button from '../elements/Button';

const ProductCard = ({ children }) => {
  return (
    <div className='w-full max-w-sm rounded-lg border border-gray-700 bg-gray-800 shadow'>
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <Link to='#'>
      <img src={image} alt='Steam Deck' className='rounded-t-lg p-8' />
    </Link>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className='px-5 pb-5'>
      <Link to='#'>
        <h5 className='text-xl font-semibold tracking-tight text-white'>{title}</h5>
        <p className='text-s text-white'>{children}</p>
      </Link>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className='flex items-center justify-between px-5 pb-5'>
      <span className='text-xl font-bold text-white'>{price}</span>
      <Button variant='bg-blue-600'>Buy</Button>
    </div>
  );
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;

// import { Link } from 'react-router';
// import Button from '../elements/Button';

// const ProductCard = ({ children }) => {
//   return (
//     <div className='group relative flex min-h-[650px] w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/30'>
//       {/* Glow Effect */}
//       <div className='absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl'></div>

//       {/* Badge */}
//       <div className='absolute top-4 left-4 z-10 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-lg'>
//         BEST SELLER
//       </div>

//       {children}
//     </div>
//   );
// };

// const Header = ({ image }) => {
//   return (
//     <div className='flex h-[300px] items-center justify-center p-8'>
//       {image ? (
//         <Link to='#'>
//           <img
//             src={image}
//             alt='Product'
//             className='h-full w-full object-contain transition-transform duration-500 group-hover:scale-110'
//           />
//         </Link>
//       ) : (
//         <div className='h-full w-full rounded-2xl border border-dashed border-blue-400/20 bg-blue-500/5' />
//       )}
//     </div>
//   );
// };

// const Body = ({ title, children }) => {
//   return (
//     <div className='space-y-4 px-6 pb-4'>
//       {/* Product Title */}
//       <Link to='#'>
//         <h5 className='text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400'>
//           {title}
//         </h5>
//       </Link>

//       {/* Rating */}
//       <div className='flex items-center gap-1 text-yellow-400'>
//         ★★★★★
//         <span className='ml-2 text-sm text-gray-300'>(4.9)</span>
//       </div>

//       {/* Description */}
//       <p className='text-sm leading-relaxed text-gray-300'>{children}</p>
//     </div>
//   );
// };

// const Footer = ({ price }) => {
//   return (
//     <div className='mt-auto flex items-center justify-between px-6 pt-2 pb-6'>
//       <div>
//         <p className='text-sm text-gray-400 line-through'>Rp 13.999.999</p>

//         <span className='text-2xl font-extrabold text-blue-400'>{price}</span>
//       </div>

//       <Button variant='bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30'>
//         🛒 Buy
//       </Button>
//     </div>
//   );
// };

// ProductCard.Header = Header;
// ProductCard.Body = Body;
// ProductCard.Footer = Footer;

// export default ProductCard;
