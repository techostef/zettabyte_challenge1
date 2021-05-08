import ITitleCards from '../title-cards.interface';
export const dataCardToCategory = (TitleCards: ITitleCards[]) => {
    let category = new Set();
    for(let i = 0; i < TitleCards.length; i ++) {
        const item = TitleCards[i];
        if (item.certifier?.short_name)
        category.add(item.certifier?.short_name)
    }
    const result = Array.from(category);
    result.sort()
    
    return ['All', ...result];
}