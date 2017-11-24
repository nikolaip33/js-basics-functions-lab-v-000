function distanceFromHqInBlocks (start, end) {
  return Math.abs(start-end)
}

function distanceFromHqInFeet () {
  distanceFromHqInBlocks();
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}
