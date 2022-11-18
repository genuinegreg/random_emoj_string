
import { emojisNumber, writeEmojis, copy } from './stuff.js'


writeEmojis(emojisNumber())

window.addEventListener('hashchange', () => {
    writeEmojis(emojisNumber())
})

window.newEmoji = function () {
    writeEmojis(emojisNumber())
}

window.copy = function () {
    copy()
}