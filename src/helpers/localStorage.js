export default {
    set: (key, data) => {
        if (!data) return

        const dataHandled = typeof data !== 'string' ? JSON.stringify(data) : data
        localStorage.setItem(key, dataHandled);
    },

    get: key => {
        const rawData = localStorage.getItem(key);

        if (!rawData) {
            return null
        }

        return typeof rawData === 'string' ? JSON.parse(rawData) : rawData
    },

    remove: key => {
        localStorage.removeItem(key)
    },

    clear: () => {
        localStorage.clear()
    }
}
