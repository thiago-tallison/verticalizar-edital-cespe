export const textToCSV = (data) => {
  if (data === "") return "";
  return '"' + data.split(/\n/g).join('",\n"');
};
