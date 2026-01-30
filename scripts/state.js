export const State = {
  running: false,
  bossHP: 100,
  phase: 1,
  enrageMs: 0,
  bleeds: 0,
  special: null,
  hits: 0,
  dps: 0,
  bindActive: false,
  bindTimeLeft: 0,
  resonanceCountdown: 3,
  healTimeLeft: 0,

  start() { this.running = true; },
  stop() { this.running = false; },
  reset() {
    this.bossHP = 100;
    this.phase = 1;
    this.enrageMs = 0;
    this.bleeds = 0;
    this.special = null;
    this.hits = 0;
    this.dps = 0;
    this.bindActive = false;
    this.bindTimeLeft = 0;
    this.resonanceCountdown = 3;
    this.healTimeLeft = 0;
  }
};