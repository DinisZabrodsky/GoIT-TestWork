

function UserData () {
    const favorites = [9582, 9584]
    let firstStart = true

    const setLocalStr = () => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }

    const getLocalStr = () => {
        if (localStorage.getItem("favorites") && firstStart === true) {
            favorites.push(JSON.parse(localStorage.getItem("favorites")))
            firstStart = false
            return
        }
        return
    }

    return {
        getFavorites() {
            getLocalStr()
            return favorites
            
        },

        setFavorites(element) {
            favorites.push(element)
            setLocalStr()
        },

        deleteFavorites(id) {
            favorites.filter(element => element.id === id)
            setLocalStr()
        },

        
    }

}

export const user = UserData()
