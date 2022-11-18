export function emojisNumber() {
    return parseInt(
        document.location.hash.slice(1)
    ) || 3

}

import emoji from './random-emoji.js'
export function writeEmojis(number) {
    let emojis = [];
    for (let i = 0; i < number; i++) {
        emojis.push(emoji())

    }

    document.querySelector('.emojistring').replaceChildren(emojis.join(''))
}

export function copy() {
    navigator.clipboard.writeText(document.querySelector('.emojistring').textContent)
}