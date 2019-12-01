// Write your solution in this file!
const driver ={
  name:"",
  ID:"",
  license:"",
};

function updateDriverWithKeyAndValue(driver ,key, value){
    const update= {...driver};
    update[key]=value;
    return update;
}
function destructivelyUpdateDriverWithKeyAndValue(driver , key , value){
    driver[key] = value;
    return driver;
}
function destructivelyDeleteFromDriverByKey(driver , key ) {
    delete driver[key];
    return driver;
}
function deleteFromDriverByKey(driver , key ) {
    const deleteDriver=  {...driver};
    delete deleteDriver[key];
    return deleteDriver;
}