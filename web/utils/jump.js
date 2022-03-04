export function jump(id) {
  const top = document.getElementById(id).offsetTop;
  window.scrollTo(0, top - 65);
}
