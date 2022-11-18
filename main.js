
import { emojisNumber, writeEmojis } from './stuff.js'


writeEmojis(emojisNumber())

window.addEventListener('hashchange', () => {
    writeEmojis(emojisNumber())
})