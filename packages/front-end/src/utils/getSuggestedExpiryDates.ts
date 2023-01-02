export const getSuggestedExpiryDates = () => {
  const now = new Date();

  const followingFriday = getClosestFridayToDate(now);
  followingFriday.setDate(followingFriday.getDate() + 7);

  const nextMonth = new Date(now);
  nextMonth.setDate(now.getDate() + 30);
  const nextMonthFriday = getClosestFridayToDate(nextMonth);

  const threeMonths = new Date(now);
  threeMonths.setDate(now.getDate() + 90);
  const threeMonthsFriday = getClosestFridayToDate(threeMonths);

  const sixMonths = new Date(now);
  sixMonths.setDate(now.getDate() + 180);
  const sixMonthsFriday = getClosestFridayToDate(sixMonths);

  const nineMonths = new Date(now);
  nineMonths.setDate(now.getDate() + 270);
  const nineMonthsFriday = getClosestFridayToDate(nineMonths);

  return [
    followingFriday,
    nextMonthFriday,
    threeMonthsFriday,
    sixMonthsFriday,
    nineMonthsFriday,
  ];
};

export const getClosestFridayToDate = (date: Date) => {
  const dateCopy = new Date(date);
  const dayOfMonth = dateCopy.getDate();
  const dayOfWeek = dateCopy.getDay();

  // +2 as Friday is day 6 in getDay.
  const daysTillNextFriday = 7 - ((dayOfWeek + 2) % 7);

  dateCopy.setDate(dayOfMonth + daysTillNextFriday);

  dateCopy.setHours(8, 0, 0, 0);

  return dateCopy;
};
