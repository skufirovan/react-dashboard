export const calculateAge = birthDate => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

export const calculateExperienceYears = workExperience => {
  return workExperience.reduce((sum, job) => {
    const start = new Date(job.startDate);
    const end = job.endDate ? new Date(job.endDate) : new Date();
    const years = (end - start) / (1000 * 60 * 60 * 24 * 365.25);
    return sum + years;
  }, 0);
};
