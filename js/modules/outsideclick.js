export default function outsidClick(element, event, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAtributte(outside)) {
    event.forEach((userEvent) => {
      html.addEventListener("click", handleOutsideClick);
    });
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      event.forEach((userEvent) => {
        html.addEventListener("click", handleOutsideClick);
        event.forEach((userEvent) => {
          html.addEventListener("click", handleOutsideClick);
        });
      });
      callback();
    }
  }
}
