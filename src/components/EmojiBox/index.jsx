import PropTypes from 'prop-types'
import styles from './Emoji.module.css'
import classnames from 'classnames'
import { useState, useEffect } from 'react'
const EmojiBox = ({title, symbol, index}) => {

    const [selected, setSelected] = useState(false)

    useEffect(()=>{
        // ketika selected bernilai true,
        // fungsi useEffect aktif karene
        // terpengaruhi oleh selected
        setTimeout(()=> setSelected(false), 600)
    },[selected])

    return (
        <div 
        onClick={()=>{ 
            navigator.clipboard.writeText(symbol)
            setSelected(true)
            // ketika diklik, class selected aktif
            // selected yang awalnya false menjadi true
        }}
        className={classnames(styles.emojiBox, {
            [styles.selected] : selected
            //ketika class selected aktif, terjadi animasi
        })} 
        key={index}
        >

            <p className={styles.emoji}>
                {symbol}
            </p>
            <p className={styles.emojiText}>
                {selected ? 'Coppied' : title}
            </p>
        </div>
    )
}

EmojiBox.propTypes = {
    title : PropTypes.string,
    symbol : PropTypes.string,
    index : PropTypes.number
}

export default EmojiBox