function calculate() {
  // Pegar o valor da viagem selecionada
  const selectedTrip = document.getElementById('value-trip');
  const tripCost = parseFloat(selectedTrip.value);

  // Pegar o valor da hora de trabalho
  const hourlyRateInput = document.getElementById('value-hour-day');
  const hourlyRate = parseFloat(hourlyRateInput.value);

  // Pegar a quantidade de horas trabalhadas por dia
  const hoursPerDayInput = document.getElementById('hours-per-day');
  const hoursPerDay = parseFloat(hoursPerDayInput.value);
  // Pegar a quantidade de meses
  const mounthsInput = document.getElementById('mounths');
  const mounths = parseFloat(mounthsInput.value);

  // Pegar o período selecionado
  const timePeriod = mounths*30.416;

  // Verificar se os valores são válidos
  if (isNaN(tripCost) || isNaN(hourlyRate) || hourlyRate <= 0 || isNaN(hoursPerDay) || hoursPerDay <= 0) {
      alert('Por favor, insira valores válidos.');
      return;
  }

  // Calcular quantas horas por dia são necessárias para pagar a viagem no período selecionado
  const dailySavingsRequired = tripCost / timePeriod;
  const hoursNeededPerDay = dailySavingsRequired / hourlyRate;

  // Calcular o salário diário
  const dailySalary = hourlyRate * hoursPerDay;

  // Calcular a porcentagem do salário diário representada pelo valor guardado
  const percentageOfSalary = (dailySavingsRequired / dailySalary) * 100;

  // Verificar se o custo da viagem é maior que 25% do salário anual
  const isNotPossibleDiv = document.getElementById('is-not-possible');
  if (percentageOfSalary > 25) {
      isNotPossibleDiv.innerText = 'Não é uma meta realista.';
      isNotPossibleDiv.style.display = 'block';
  }
  if (percentageOfSalary < 25) {
    isNotPossibleDiv.style.display = 'none';
  }

  // Exibir os resultados
  document.getElementById('value-needed').innerText = dailySavingsRequired.toFixed(2);
  document.getElementById('percentage-needed').innerText = percentageOfSalary.toFixed(2) + '%';
}
