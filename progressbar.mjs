export class ProgressBar {
  constructor(container) {
    this.currentStep = 0;
    this.totalSteps = 7;
    this.progressContainer = document.createElement('div');
    this.progressContainer.className = 'progress-container';
    
    // Create progress steps
    for (let i = 0; i < this.totalSteps; i++) {
      const step = document.createElement('div');
      step.className = 'progress-step';
      step.dataset.step = i;
      this.progressContainer.appendChild(step);
    }
    
    container.appendChild(this.progressContainer);
    
    // Create mock progress button
    this.mockButton = document.createElement('button');
    this.mockButton.textContent = 'Next Step';
    this.mockButton.className = 'mock-button';
    this.mockButton.addEventListener('click', () => this.incrementProgress());
    
    container.appendChild(this.mockButton);
    
    this.updateProgress();
  }
  
  incrementProgress() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.updateProgress();
    }
    
    if (this.currentStep === this.totalSteps) {
      this.mockButton.disabled = true;
      this.mockButton.textContent = 'Completed';
    }
  }
  
  updateProgress() {
    const steps = this.progressContainer.querySelectorAll('.progress-step');
    steps.forEach((step, index) => {
      if (index < this.currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }
  
  reset() {
    this.currentStep = 0;
    this.mockButton.disabled = false;
    this.mockButton.textContent = 'Next Step';
    this.updateProgress();
  }
}

// Initialize progress bar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.progress-bar-container');
  if (container) {
    const progressBar = new ProgressBar(container);
    window.progressBar = progressBar; // Make it globally accessible for testing
  }
});