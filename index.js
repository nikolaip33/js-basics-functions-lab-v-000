function distanceFromHqInBlocks (dest) {
  return Math.abs(dest-42)
}

function distanceFromHqInFeet () {
  distanceFromHqInBlocks();
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}
