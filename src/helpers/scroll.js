export default {
  toId(selector) {
    const invited = document.querySelector(selector);
    invited &&
      invited.scrollIntoView({
        behavior: "smooth",
      });
  },
};
