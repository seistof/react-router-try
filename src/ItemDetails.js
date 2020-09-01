import React, {useState, useEffect} from 'react';
import style from './itemDetails.module.css';

function ItemDetail({match}) {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=id:${match.params.id}`);
      const data = await response.json();
      console.log(data.items);
      setItem(data.items);
    };
    getData();
  }, [match.params.id]);

  const [item, setItem] = useState([]);

  if (item) {
    return (
      <div className={style.details}>
        {item.map((book) => (
          <div key={book.id} className={style.card}>
            <p className={style.title}>{`"${book.volumeInfo.title}"`}</p>
            <p className={style.by}>by</p>
            <p className={style.author}>{book.volumeInfo.authors.join(', ')}</p>
            <img className={style.img} src={book.volumeInfo.imageLinks.thumbnail} alt="Book"/>
            <p className={style.description}>{book.volumeInfo.description}</p>
            <a className={style.preview} href={book.volumeInfo.previewLink} target={'_blanc'}>Preview on Google
              Books</a>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className={style.details}>
        No Data
      </div>
    );
  }
}

export default ItemDetail;
