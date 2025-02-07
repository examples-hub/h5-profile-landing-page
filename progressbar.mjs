export default class ProgressBar {
  constructor() {
    this.currentStep = 0;
    this.totalSteps = 7;
    this.progressContainer = document.getElementById('progress-container');
    this.steps = Array.from(document.getElementsByClassName('step'));
    this.mockProgressButton = document.getElementById('mockProgress');

    if (this.mockProgressButton) {
      this.mockProgressButton.addEventListener('click', () => {
        if (this.currentStep < this.totalSteps) {
          this.updateProgress(this.currentStep + 1);
        }
      });
    }

    this.initializeSteps();
  }

  initializeSteps() {
    this.steps.forEach(step => {
      step.style.backgroundColor = 'aliceblue';
    });
  }

  updateProgress(step) {
    if (step > 0 && step <= this.totalSteps) {
      const previousStep = this.currentStep;
      this.currentStep = step;

      if (previousStep < step) {
        for (let i = previousStep; i < step; i++) {
          if (this.steps[i]) {
            this.steps[i].style.backgroundColor = 'dodgerblue';
          }
        }
      }
    }
  }
}