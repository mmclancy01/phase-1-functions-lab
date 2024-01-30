// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hq = 42;
    if (pickupLocation < 42) {
        return (hq - pickupLocation);
    }
    if (pickupLocation > 42) {
        return (pickupLocation - hq);
   }
}
let origin1 = distanceFromHqInBlocks(43)

function distanceFromHqInFeet(pickupLocation) {
    const hq = 42;
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return (blocks * 264)
}
let origin2 = distanceFromHqInFeet(50)

function distanceTravelledInFeet(startPoint, endPoint) {
    if (startPoint > endPoint) {
        return ((startPoint - endPoint) * 264)
    }
    if (startPoint < endPoint) {
        return ((endPoint - startPoint) * 264)
    }
}

function calculatesFarePrice(start, destination) {
   const farePrice = distanceTravelledInFeet(start, destination);
    if (farePrice < 400) {
        return (0)
    } else if (farePrice >= 400 && farePrice <= 2000) {
        return (farePrice - 400) * .02
    } else if (farePrice > 2500) {
        return ("cannot travel that far")
    }  else if (farePrice > 2000) {
        return (25)     
    }
}
let origin3 = calculatesFarePrice (50, 58)