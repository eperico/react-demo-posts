import _ from 'underscore'

const _MS_PER_DAY     = 1000 * 60 * 60 * 24;
const _MS_PER_MINUTES = 1000 * 60;


export const dateDiffInDays = (a, b) => {
  return Math.floor((b - a) / _MS_PER_DAY);
}

export const dateDiffInMinutes = (a, b) => {
  return Math.floor((b - a) / _MS_PER_MINUTES);
}

export const truncate = (string, maxLenght) => {
   if (string.length > maxLenght)
      return string.substring(0,maxLenght)+'...'
   else
      return string
}
