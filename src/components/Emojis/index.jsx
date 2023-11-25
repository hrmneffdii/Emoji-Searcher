import PropTypes from 'prop-types';
import styles from './Emojis.module.css';
import EmojiBox from '../EmojiBox';
import { filterEmojis } from '../../utils/filterEmojis';
import { useState, useEffect } from 'react';
import Empty from '../Empty';

const Emojis = ({ emojiData, searchText }) => {

  const [filteredEmojis, setFilteredEmojis] = useState([])

  useEffect(()=>{
    setFilteredEmojis(filterEmojis({
      emojisData : emojiData ,
      searchText
    }))
  },[emojiData, searchText])

  if(filteredEmojis.length > 0){
    return (
      <div className={styles.emojisGrid}>
        {filteredEmojis.map((data, index) => (
          <EmojiBox 
          key={index}
          title={data.title}
          symbol={data.symbol}
          />
        ))}
      </div>
    );
  }else{
    return(
      <Empty text={"Emoji tidak tersedia..."}/>
    )
  }
};

Emojis.propTypes = {
  emojiData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      keywords: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchText : PropTypes.string.isRequired
};

export default Emojis;
