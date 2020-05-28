import { Ticker } from 'pixi.js';

interface keyInterface {
  value: string;
  isDown: boolean;
  isUp: boolean;
  press?: () => void;
  release?: () => void;
  downHandler: (event: KeyboardEvent) => void;
  upHandler: (event: KeyboardEvent) => void;
  unsubscribe: () => void;
}

let keyboard = function(value: string, repeatParams?: { delay: number; repeatDelay: number }) {
  let ticker = new Ticker();
  ticker.stop();
  let numRepeated = 0;
  let cumDelta = 0;
  let repeat: (time: number) => void | null;
  let key: keyInterface = {
    value: value,
    isDown: false,
    isUp: true,
    downHandler: event => {
      if (event.key === key.value) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
        ticker.start();
        event.preventDefault();
      }
    },
    upHandler: event => {
      if (event.key === key.value) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
        ticker.stop();
        numRepeated = 0;
        cumDelta = 0;
        event.preventDefault();
      }
    },
    unsubscribe: () => {
      window.removeEventListener('keydown', downListener);
      window.removeEventListener('keyup', upListener);
    },
  };
  if (repeatParams) {
    repeat = function(time) {
      cumDelta += ticker.deltaMS;
      let timeAfterDelta = cumDelta - repeatParams.delay;
      let hasToNRepeateed = timeAfterDelta / repeatParams.repeatDelay;
      let deltaN = hasToNRepeateed - numRepeated;
      if (deltaN >= 1) {
        for (let i = 0; i < deltaN; i++) {
          numRepeated += 1;
          if (key.press) key.press();
        }
      }
    };
    ticker.add(repeat);
  }

  const downListener = key.downHandler.bind(key);
  const upListener = key.upHandler.bind(key);

  window.addEventListener('keydown', downListener, false);
  window.addEventListener('keyup', upListener, false);

  return key;
};

export default keyboard;
