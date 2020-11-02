export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = (string) => {
  const rubString = string.toLocaleString('ru-RU', {style: 'currency', currency:'RUB'});
  return rubString;

};