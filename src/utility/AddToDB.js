
const getStoredReadList = ()=> {
    const storedListStr = localStorage.getItem('read-list');

    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}



const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();

    if(storedList.includes(id)){
        alert("All Ready Exist")
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr )
    }
}


// Wish List 
const getWishList = () => {
    const wishListStr = localStorage.getItem('wish-list')

    if(wishListStr){
        const storedList = JSON.parse(wishListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToWishList = (id) => {
    const storedList = getWishList();

    if(storedList.includes(id)){
        alert('All ready Exist to Wishlist')
    }
    else{
        storedList.push(id)
        const wishListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', wishListStr)
    }

}



export {addToStoredReadList, addToWishList, getStoredReadList}