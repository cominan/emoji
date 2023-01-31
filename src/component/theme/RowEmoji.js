
export default function RowEmoji(props) {
   return props.data.map((item,index) => {
        const codePointHex = item.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return (
            <div key={index} data-clipboard-text={item.symbol} className= 'text-left flex pl-4 mt-2 border-2'>
                <img className="w-[34px] mr-4" src={src} alt={item.title}></img>
                <span className="title">{item.title}</span>
            </div>
        )
    })

}
