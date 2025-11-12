import selectionImage from '@/assets/image/selection.png'

const SelectionCard = () => {
    return (
        <div className="selection__card" style={{backgroundImage: `url(${selectionImage})`}}>
            <span className="selection__card-title">10 лучших фильмов про зондбе</span>
        </div>
    )
}

export default SelectionCard