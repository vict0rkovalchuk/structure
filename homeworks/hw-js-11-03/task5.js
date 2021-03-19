const country = prompt("Страна");
const sliceLeft = country.slice(0, 1).toUpperCase();
const sliceRight = country.slice(1).toLowerCase();
const result = sliceLeft + sliceRight;

switch (result) {
  case "Китай":
    console.log(`Доставка в Китай будет стоить 150 кредитов`);
    break;
  case "Чили":
    console.log(`Доставка в Чили будет стоить 250 кредитов`);
    break;
  case "Австралия":
    console.log(`Доставка в Австралию будет стоить 165 кредитов`);
    break;
  case "Индия":
    console.log(`Доставка в Индию будет стоить 90 кредитов`);
    break;
  case "Ямайка":
    console.log(`Доставка в Ямайку будет стоить 130 кредитов`);
    break;
  default:
    alert("В вашей стране доставка не доступна");
    break;
}
