import emojis from './emojiList.json'

export default function resultSearch(props) {
   return emojis.filter(emoji => { 
        if(emoji.title.includes(props)) {
            return true
        }
        if(emoji.keywords.includes(props)) {
            return true
        }
        return false
    }).slice(0,20)
}
