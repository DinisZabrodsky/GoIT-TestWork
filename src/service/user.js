

function UserData () {
    const favorites = []

    return {
        getFavorites() {
            return favorites
        },

        setFavorites(element) {
            this.favorites.push(element)
        },

        deleteFavorites(id) {
            this.favorites.filter(element => element.id === id)
        },

        
    }

}

export const user = UserData()
