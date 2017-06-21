import { IO } from 'ramda-fantasy'
import { curry } from 'ramda'

export const logger = curry((color, msg) => IO(() => console.log(`%c${JSON.stringify(msg)}`, `color: ${color}`)));
