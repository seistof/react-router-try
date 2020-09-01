import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import style from './home.module.css';

function Home() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('cat');
  const [query, setQuery] = useState('cat');

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      console.log(data.items);
      setItems(data.items);
    };
    getData();
  }, [query]);

  const handleSearchOnChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSearchOnClick = () => {
    setQuery(search);
  };

  if (items) {
    return (
      <div className={style.wrapper}>
        <div className={style.search}>
          <input type="text" value={search} onChange={handleSearchOnChange}/>
          <button className={style.searchBtn} onClick={handleSearchOnClick}>Search</button>
        </div>
        <div className={style.home}>
          {
            items.map((item) => {
              if (
                item.id !== undefined &&
                item.volumeInfo.imageLinks.smallThumbnail !== undefined &&
                item.volumeInfo.title !== undefined &&
                item.volumeInfo.authors !== undefined
              ) {
                return (
                  <div key={item.id} className={style.card}>
                    <img className={style.img} src={item.volumeInfo.imageLinks.smallThumbnail} alt=""/>
                    <p className={style.title}>{`"${item.volumeInfo.title}"`}</p>
                    <p className={style.by}>by</p>
                    <p className={style.author}>{`${item.volumeInfo.authors.join(', ')}`}</p>
                    <Link className={style.details} to={`/${item.id}`}>Details</Link>
                  </div>
                );
              } else {
                return <></>;
              }
            })
          }
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.wrapper}>
        <div className={style.search}>
          <input type="text" value={search} onChange={handleSearchOnChange}/>
          <button className={style.searchBtn} onClick={handleSearchOnClick}>Search</button>
        </div>
        <div className={style.home}>
          <div className={style.nothing}>Nothing</div>
        </div>
      </div>
    );
  }
}

export default Home;
