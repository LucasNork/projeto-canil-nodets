type MenuOption = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOption) => {
    let reuturnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }
    if (activeMenu !== '') {
        reuturnObject[activeMenu] = true;
    }


    return reuturnObject;
}