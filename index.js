// Write your solution in this file!
const driverHanaa ={};

function updateDriverWithKeyAndValue(driver ,key, value){
    const update= {...driverHanaa};
    update[key]=value;
    return update;
}
function destructivelyUpdateDriverWithKeyAndValue(driver , key , value){
    driverHanaa[key] = value;
    return driverHanaa;
}
function destructivelyDeleteFromDriverByKey(driver , key ) {
    delete driverHanaa[key];
    return driverHanaa;
}
function deleteFromDriverByKey(driver , key ) {
    const deleteDriver=  {...driverHanaa};
    delete deleteDriver[key];
    return deleteDriver;
}