export const parseDateTimeString = (dateStr: undefined | string) => {
  if(!dateStr)
    return ''

  if(dateStr.length <= 10){
    return new Date(dateStr).toDateString()
  }
  return `${new Date(dateStr).toDateString()} - ${new Date(dateStr).toLocaleTimeString('en-US', { hour12: true, hour: "2-digit", minute: "2-digit"  })}`
}

export const toyyyymmdd = (dateObj: Date) => {
  const offset = dateObj.getTimezoneOffset()
  dateObj = new Date(dateObj.getTime() - (offset*60*1000))
  return dateObj.toISOString().split('T')[0]
}