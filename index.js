// Code your solution in this file!
function returnFirstTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    let newDrivers = drivers.slice(0,2);
    return newDrivers;

}

returnFirstTwoDrivers()

function returnLastTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    let newDrivers = drivers.slice(2,4);
    return newDrivers;
}
returnLastTwoDrivers()

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier= function (FareMultiplier){
    return function(value){
        return FareMultiplier*value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, funct) {
  return funct(arrayOfDrivers);
} 


    



