const readXlsxFile = require('read-excel-file/node'); // File path.
const a = async () => {
  const ward = [];
  await readXlsxFile('/Users/ducvo/Desktop/Data/Ward.xlsx').then((rows) => {
    for (let i = 1; i < rows.length; i++) {
      const data = {
        id: rows[i][0],
        createdAt: new Date(),
        updatedAt: new Date(),
        districtId: rows[i][1],
        sortName: JSON.stringify({ vi: rows[i][2], en: rows[i][4] }),
        fullName: JSON.stringify({ vi: rows[i][3], en: rows[i][5] }),
      };
      //   console.log(data);
      ward.push(data);
    }
  });
  return ward;
};
a.then((data) => console.log(data));
