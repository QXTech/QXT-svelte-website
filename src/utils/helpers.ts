export const isEurope = () => {
  const offset = new Date().getTimezoneOffset();
  return offset <= 0 && offset >= -180;
};

export const stringToBeautifiedFragment = (str: string = "") =>
  str
    .toLocaleLowerCase()
    .replace(/\s/g, "-")
    .replace(/\?/g, "")
    .replace(/,/g, "");

export const showHideOverflowY = (bool: boolean) => {
  const html = document.querySelector("html");
  if (bool) {
    html.classList.add("overflow-y-hidden");
  } else {
    html.classList.remove("overflow-y-hidden");
  }
};

export const formatDate = (date) =>
  new Date(Date.parse(date)).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
