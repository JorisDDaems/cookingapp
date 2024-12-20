export const getCurrentSeason = () => {
  const month = new Date().getMonth();
  
  if (month >= 2 && month <= 4) return "Lente";
  if (month >= 5 && month <= 7) return "Zomer";
  if (month >= 8 && month <= 10) return "Herfst";
  return "Winter";
}; 