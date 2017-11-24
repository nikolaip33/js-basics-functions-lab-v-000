function distanceFromHqInBlocks (dest) {
  return Math.abs(dest - 42)
}

function distanceFromHqInFeet (dest) {
  return distanceFromHqInBlocks(dest) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)

  if (distance <= 400) {
    return 0
  }
}
