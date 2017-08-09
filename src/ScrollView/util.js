export function momentum (current, start, time, lowerMargin, wrapperSize, deceleration) {
  var distance = current - start
  var speed = Math.abs(distance) / time
  var destination
  var duration

  deceleration = deceleration === undefined ? 0.0006 : deceleration

  destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1)
  duration = speed / deceleration

  if (destination < lowerMargin) {
    destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin
    distance = Math.abs(destination - current)
    duration = distance / speed
  } else if (destination > 0) {
    destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0
    distance = Math.abs(current) + destination
    duration = distance / speed
  }

  return {
    destination: Math.round(destination),
    duration: duration
  }
}
