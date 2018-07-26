const getPomodoroDuration = (startedAt, unit = 'm') => {
  const startDate = new Date(startedAt);
  const currentDate = new Date();

  const differenceInSeconds = (currentDate.getTime() - startDate.getTime()) / 1000;

  if (unit === 's') {
    return differenceInSeconds;
  }

  return {
    minutes: Math.floor(differenceInSeconds / 60),
    seconds: Math.trunc(differenceInSeconds - Math.floor(differenceInSeconds / 60) * 60),
  }
};

export default getPomodoroDuration;
