interface Age {
  years: number,
  months: number,
}
export const calculateAge = (dateOfBirth: Date, currentDate: Date): string => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date(currentDate);
    let age: Age = {
      years: today.getFullYear() - birthDate.getFullYear(),
      months: today.getMonth() - birthDate.getMonth()
    }
  
    if (age.months < 0 || (age.months === 0 && today.getDate() < birthDate.getDate())) {
      age.years--;
      age.months += 12;
    }
  
    if (age.years === 0) {
      return `${age.months} months`;
    } else if (age.years === 1) {
      return age.months === 0 ? `${age.years} year` : `${age.years} year, ${age.months} months`;
    } else {
      return `${age.years} years`;
    }
  }
  