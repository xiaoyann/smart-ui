import * as _ from './util'
import create from './index.tpl'
import './index.styl'

// add or remove touch events
function bindEvents (element, listener, isRemove) {
  const events = [
    'touchstart', 'touchmove',
    'touchend', 'touchcancel',
    'transitionend'
  ]
  const methodName = isRemove ? 'removeEventListener' : 'addEventListener'
  events.forEach(eventName => {
    element[methodName](eventName, listener, false)
  })
}

// shim for requestAnimationFrame
const requestAnimframe = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
})()

// create a point object with event
function createGesturePoint (event) {
  const point = { x: 0, y: 0 }
  if (event && event.touches) {
    point.x = event.touches[0].clientX
    point.y = event.touches[0].clientY
  }
  return point
}

// get height of the element
function getHeight (element) {
  return element.getBoundingClientRect().height
}

function throttle (fn) {
  let ended = true
  return function () {
    if (ended) {
      const context = this
      const args = arguments
      ended = false
      requestAnimframe(() => {
        fn.apply(context, args)
        ended = true
      })
    }
  }
}

export default create({
  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.y = 0
      this.maxY = 0
      this.minY = 0
      this.startY = 0
      this.startTime = 0
      this.direction = 'up'
      this.point = createGesturePoint()
      this.measureBoundary()
      this.scrollTo(0, 0)
      bindEvents(this.$refs.scrollElement, this, false)
    },

    measureBoundary () {
      this.maxY = 0
      this.minY = this.$refs.container.clientHeight - this.$refs.scrollElement.offsetHeight
      if (this.minY > 0) this.minY = 0
    },

    handleGestureStart (event) {
      this.startY = this.y
      this.startTime = Date.now()
      this.point = createGesturePoint(event)
    },

    handleGestureMove: throttle(function (event) {
      const curPoint = createGesturePoint(event)
      const deltaY = this.point.y - curPoint.y
      let y = this.y - deltaY
      if (y > this.maxY || y < this.minY) {
        y = this.y - deltaY / 3
      }
      this.direction = curPoint.y > this.point.y ? 'down' : 'up'
      this.point = curPoint
      this.scrollTo(Math.round(y), 0)
    }),

    handleGestureEnd (event) {
      if (this.y > this.maxY) {
        return this.scrollTo(this.maxY, 600)
      }
      if (this.y < this.minY) {
        return this.scrollTo(this.minY, 600)
      }

      const duration = Date.now() - this.startTime
      if (duration < 300) {
        const momentum = _.momentum(this.y, this.startY, duration, this.minY, this.$refs.container.clientHeight)
        this.scrollTo(momentum.destination, momentum.duration)
      }
    },

    handleTransitionEnd (event) {
      if (this.y > this.maxY) {
        return this.scrollTo(this.maxY, 600)
      }
      if (this.y < this.minY) {
        return this.scrollTo(this.minY, 600)
      }
    },

    // catch any events
    // https://developer.mozilla.org/en-US/docs/Web/API/EventListener
    handleEvent (event) {
      event.preventDefault()
      switch (event.type) {
        case 'touchstart':
          this.handleGestureStart(event)
          break
        case 'touchmove':
          this.handleGestureMove(event)
          break
        case 'touchend':
        case 'touchcancel':
          this.handleGestureEnd(event)
          break
        case 'transitionend':
          this.handleTransitionEnd(event)
          break
      }
    },

    scrollTo (destination, duration = 0) {
      this.y = destination
      const scrollElement = this.$refs.scrollElement
      scrollElement.style['transition-duration'] = duration + 'ms'
      scrollElement.style['transition-timing-function'] = 'cubic-bezier(0.1, 0.57, 0.1, 1)'
      scrollElement.style['transform'] = `translateY(${destination}px) translateZ(0)`
    },

    destory () {
      // unbind touch events
      bindEvents(this.$refs.scrollElement, this, true)
    }
  }
})
