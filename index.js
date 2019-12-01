// Write your solution in this file!
const driverHanaa ={};

function updateDriverWithKeyAndValue(driverHanaa ,key, value){
    const update= {...driverHanaa};
    update[key]=value;
    return update;
}
function destructivelyUpdateDriverWithKeyAndValue(driverHanaa , key , value){
    driverHanaa[key] = value;
    return driverHanaa;
}
function destructivelyDeleteFromDriverByKey(driverHanaa , key ) {
    delete driverHanaa[key];
    return driverHanaa;
}
function deleteFromDriverByKey(driverHanaa , key ) {
    const deleteDriver=  {...driverHanaa};
    delete deleteDriver[key];
    return deleteDriver;
}