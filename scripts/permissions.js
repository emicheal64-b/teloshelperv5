export const Permissions = {
  required: ["pixel", "overlay", "clipboard"],
  checkAll() {
    this.required.forEach(p => {
      if (!window.alt1?.[p]) console.warn(`Alt1 permission missing: ${p}`);
      else console.log(`Permission OK: ${p}`);
    });
  }
};