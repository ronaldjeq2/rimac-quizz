export const getAgeSinceDate = (age: string): number => {
  const dateBrithDayTime = new Date(age).getTime();
  const actualDateTime = new Date().getTime();
  const restTime = actualDateTime - dateBrithDayTime;
  const timeInMiliseconds = 365 * 86400 * 1000;
  return Math.floor(restTime / timeInMiliseconds);
};
