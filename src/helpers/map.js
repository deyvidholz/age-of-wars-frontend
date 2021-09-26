export function fillProvinces(game) {
  for (const country of game.countries) {
    const color = country.color;

    for (const province of country.provinces) {
      if (!province) {
        continue;
      }

      const element = document.querySelector(`#${province.mapRef}`);

      if (!element) {
        continue;
      }

      element.style.fill = color;
    }
  }
}

export function getAllProvinceElements() {
  return [
    ...document.querySelectorAll("path"),
    ...document.querySelectorAll("polygon"),
  ];
}
