function distanceFromHqInBlocks (dest) {
  return Math.abs(dest-42)
}

function distanceFromHqInFeet (dest) {
  return distanceFromHqInBlocks(dest)*264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet(start,end) {
  return Math.abs(start-end)
}
