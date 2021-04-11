// Code your solution here

const findMatching = (drivers, searchName)=>{
 const theMatching = drivers.filter((driver) => {
    return driver.toLowerCase() === searchName.toLowerCase()
})
    return theMatching;

}

const fuzzyMatch = (drivers,letters)=>{
    const aMatch = drivers.filter ((driver) => {
        const sliceName = driver.slice(0,2).toLowerCase()
        return sliceName === letters.toLowerCase()  
    })

    return aMatch;

}
const matchName = (drivers, searchName) =>{
    const foundsNames = drivers.filter((driver) => {
        return driver.name === searchName;
    })
    return foundsNames;
}

// const findBobby = findMatching('Bobby', drivers,)