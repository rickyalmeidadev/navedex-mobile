export const displayDateStringToDate = date => {
  const [day, month, year] = date.split('/');

  if (!day || day.length !== 2 || !month || month.length !== 2 || !year || year.length !== 4) {
    return new Date('Invalid Date');
  }

  return new Date(`${year}-${month}-${day}`);
};
