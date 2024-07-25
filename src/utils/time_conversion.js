// utils/timeUtils.js
export const convertMilitaryToNormal = (militaryTime) => {
  const [hour, minute] = militaryTime.split(':').map(Number);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const normalHour = hour % 12 || 12;
  const normalMinute = minute < 10 ? `0${minute}` : minute;
  return `${normalHour}:${normalMinute} ${suffix}`;
};

export const convertTimings = (timings) => {
  return Object.fromEntries(
    Object.entries(timings).map(([key, value]) => [
      key,
      convertMilitaryToNormal(value.replace(' (EDT)', '').replace(/[^\d:]/g, ''))
    ])
  );
};
