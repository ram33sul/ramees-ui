export const getDurationString = (duration: number) => {
  if (!duration || duration === 0) {
    return "Duration not available";
  }
  const minutes = Math.floor(duration / 60);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes - hours * 60;
  if (hours === 0 && minutes === 0) {
    return `${duration} ${duration === 1 ? "second" : "seconds"}`;
  }
  let str = "";
  if (hours >= 1) {
    str += `${hours} ${hours === 1 ? "hour" : "hours"}`;
  }
  if (hours >= 1 && remainingMinutes >= 1) {
    str += " and ";
  }
  if (remainingMinutes >= 1) {
    str += `${remainingMinutes} ${
      remainingMinutes === 1 ? "minute" : "minutes"
    }`;
  }
  return str;
};
