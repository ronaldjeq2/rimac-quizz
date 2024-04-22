export const getAgeSinceDate = (birthday: string): number => {
  const [day, month, year] = birthday.split('-').map(Number);

  const birthDate = new Date(year, month - 1, day); // El mes se indexa desde cero

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  return age;
};
