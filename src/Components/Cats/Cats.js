import React, { useMemo, useState, useCallback, useEffect } from 'react';
import Cat from './Cat';
 import fetchCats from '../../API_calls/fetch';
import body from '../../constants/const';

  function Cats() {
  const [imgs, setImgs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(3);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(()=>{  
    fetchCats(setImgs)   
  },[])

  useEffect(() => {
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    setCurrentImages(imgs.slice(indexOfFirstImage, indexOfLastImage));
  }, [imgs, currentPage, imagesPerPage]);
  
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  function paginate(pageNumber){
    setCurrentPage(pageNumber)
  }
   



 
    return (
      <div>
      {currentImages.map((c, index) => (
        <Cat key={index} img={c.url}></Cat>
      ))}
      {/* Pagination buttons */}
      <div>
        {imgs.length > imagesPerPage && (
          <ul className="pagination">
            {Array.from({ length: Math.ceil(imgs.length / imagesPerPage) }).map((_, index) => (
          <div key={index}>
            <button onClick={() => paginate(index + 1)}  >
              {index + 1}
            </button>
          </div>
        ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cats;
