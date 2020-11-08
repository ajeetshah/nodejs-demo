console.log('start')

process.nextTick(() => {
  console.log('nextTick callback')
})

console.log('scheduled')
