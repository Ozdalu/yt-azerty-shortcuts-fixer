const keyRemapping = new Map()
keyRemapping.set(59, 190)
keyRemapping.set(169, 189)
keyRemapping.set(90, 87)
keyRemapping.set(81, 65)
keyRemapping.set(164, 221)
keyRemapping.set(0, 219)
keyRemapping.set(160, 219)

function keyUpping(original, faked) {
    document.addEventListener('keyup', (ev) => {
        // Avoids recursion
        if (ev.keyCode != original) return

        document.dispatchEvent(new KeyboardEvent("keyup", {
            'shiftKey': false,
            'keyCode': faked
        }))
    })
    return true
}

document.addEventListener('keydown', (e) => {
    e.preventDefault
    const el = document.activeElement.id
    if (el == "search" || el == "contenteditable-root") return
    
    // Stops if not a key that has to be fixed
    e = e || window.event;
    if (!keyRemapping.has(e.keyCode)) return

    // Setting up Shift key value
    let shiftKey = false
    if (e.keyCode == 59 || e.keyCode == 169) {
        shiftKey = e.shiftKey;
    }

    do {
        document.dispatchEvent(new KeyboardEvent("keydown", {
            'shiftKey': shiftKey,
            'keyCode': keyRemapping.get(e.keyCode)
        }))
    }
    while (!keyUpping(e.keyCode, keyRemapping.get(e.keyCode)))
})