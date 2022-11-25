export const parseDateTimeString = (dateStr: undefined | string) => {
  if(!dateStr)
    return ''

  if(dateStr.length <= 10){
    return new Date(dateStr).toDateString()
  }
  return `${new Date(dateStr).toDateString()} - ${new Date(dateStr).toLocaleTimeString('en-US', { hour12: true, hour: "2-digit", minute: "2-digit"  })}`
}