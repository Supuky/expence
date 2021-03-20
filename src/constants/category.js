const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'ビジネス', amount: 0, color: incomeColors[0] },
  { type: '投資', amount: 0, color: incomeColors[1] },
  { type: 'ボーナス', amount: 0, color: incomeColors[2] },
  { type: '預金', amount: 0, color: incomeColors[3] },
  { type: '宝くじ', amount: 0, color: incomeColors[4] },
  { type: 'ギフト', amount: 0, color: incomeColors[5] },
  { type: '収入', amount: 0, color: incomeColors[6] },
  { type: '節約', amount: 0, color: incomeColors[7] },
  { type: '不労所得', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: '請求書', amount: 0, color: expenseColors[0] },
  { type: '車', amount: 0, color: expenseColors[1] },
  { type: '服', amount: 0, color: expenseColors[2] },
  { type: '旅行', amount: 0, color: expenseColors[3] },
  { type: '食事', amount: 0, color: expenseColors[4] },
  { type: '買い物', amount: 0, color: expenseColors[5] },
  { type: '家賃', amount: 0, color: expenseColors[6] },
  { type: 'エンタメ', amount: 0, color: expenseColors[7] },
  { type: '携帯代', amount: 0, color: expenseColors[8] },
  { type: 'ペット代', amount: 0, color: expenseColors[9] },
  { type: 'その他', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};