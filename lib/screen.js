const SCREENS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
const SCREENS_WIDTH = [0, 576, 768, 992, 1200, 1400]


export function getScreen(width) {
    let i = 0
    while (i<SCREENS.length-1 && width > SCREENS_WIDTH[i+1]) i++
    return SCREENS[i]
}

// check if current screen is greater/less than input sreen
export function screenComp(s1, s2) {
    const idx1 = SCREENS.indexOf(s1)
    const idx2 = SCREENS.indexOf(s2)
    return idx1 > idx2 ? 1 : (idx1 < idx2 ? -1 : 0)
}

export function screenGT(s1, s2) {
    return screenComp(s1, s2) == 1
}

export function screenLT(s1, s2) {
    return screenComp(s1, s2) == -1
}

export function screenEQ(s1, s2) {
    return screenComp(s1, s2) == 0
}
