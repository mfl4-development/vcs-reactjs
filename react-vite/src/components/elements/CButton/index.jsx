import React from 'react';

/**
 * Komponen tombol yang dibuat menggunakan class.
 *
 * @class
 * @extends {React.Component}
 * @returns {JSX.Element} - Komponen tombol.
 */

class CButton extends React.Component {
  render() {
    return (
      <button className='h-10 px-6 font-semibold text-white bg-black rounded-md' type='submit'>
        Class BTN
      </button>
    );
  }
}

export default CButton;
