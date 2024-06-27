function distanceFromHqInBlocks(distance){
    let hqDist = 42;
  return Math.abs(distance - hqDist)
}
function distanceFromHqInFeet(dist) {
    let block=distanceFromHqInBlocks(dist);
    let feetDist=264;
    return block * feetDist
}
function distanceTravelledInFeet(start, destination){
    return Math.abs((start-destination)*264)
}
function   calculatesFarePrice(start, destination){
    let totalFeet= distanceTravelledInFeet(start,destination) 
    if(totalFeet <400){
        return 0
    }  else if (totalFeet > 400 && totalFeet < 2000) {
        return (totalFeet - 400) * 0.02; 
      } else if (totalFeet > 2000 && totalFeet < 2500) {
        return 25; 
      } else {
        return 'cannot travel that far'; 
      }
}