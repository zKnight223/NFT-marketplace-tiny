
import moment from 'moment';

export const toTimespanInStr = (utcTimestamp: number) => {
  let now = moment().unix();
  if (now >= utcTimestamp) return false;

  let dur = moment.duration(utcTimestamp - now, "seconds");
  if (dur.days() > 0) return dur.days() + " days";
  if (dur.hours() > 0) return dur.hours() + " hours";
  if (dur.minutes() > 0) return dur.minutes() + " mins";
  if (dur.seconds() > 0) return dur.seconds() + " secs";

  return false;
}

export const toTimespanAgoStr = (utcTimestamp: number) => {
  let now = moment().unix();
  if (now <= utcTimestamp) return false;

  let dur = moment.duration(now - utcTimestamp, "seconds");
  if (dur.days() > 0) return dur.days() + " days";
  if (dur.hours() > 0) return dur.hours() + " hours";
  if (dur.minutes() > 0) return dur.minutes() + " mins";
  if (dur.seconds() > 0) return dur.seconds() + " secs";

  return false;
}