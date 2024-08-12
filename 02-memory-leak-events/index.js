import { randomBytes } from 'node:crypto'
import Events from 'node:events'
import { createServer } from 'node:http'

const MyEvents = new Events()

function handlerDate() {
  randomBytes(10000)
}

function handler(req, res) {
  MyEvents.on('data', handlerDate)
  MyEvents.emit('data', Date.now())
  
  return res.end('ok')
}

createServer(handler).listen(3000, () => console.log('Server running!'))
