export default function useSlider(firstCard, cardsLength, setFirstCard, maxSlideCount) {
    function nextCard() {
      if(firstCard+maxSlideCount !== cardsLength) {
        setFirstCard(firstCard+1)
      }  
    }

    function prevCard() {
        if(firstCard > 0) {
            setFirstCard(firstCard-1)
        }
    }

    return {
        nextCard, prevCard
    }
}