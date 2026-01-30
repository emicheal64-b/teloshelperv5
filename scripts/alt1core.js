export const Alt1Core = {
  ready: false,
  init() {
    if (!window.alt1) {
      alert("Alt1 not detected");
      return false;
    }
    this.ready = true;
    return true;
  }
};