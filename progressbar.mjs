/**
 * Progress Bar Component
 * 
 * A module that initializes and manages a progress bar with seven steps.
 * The progress can be advanced by clicking a "Progress" button.
 */

/**
 * Initializes the progress bar component with seven steps
 * and a button to advance the progress.
 * @returns {HTMLElement} The container element with the progress bar
 */
export function initializeProgressBar() {
  // Create container for the entire component
  const progressBarContainer = document.createElement('div');
  progressBarContainer.className = 'progress-bar-container';

  // Create the progress bar with seven steps
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';

  // Create seven step elements
  const steps = [];
  for (let i = 0; i < 7; i++) {
    const step = document.createElement('div');
    step.className = 'progress-step';
    step.style.backgroundColor = 'aliceblue';
    steps.push(step);
    progressBar.appendChild(step);
  }

  // Create mock progress button
  const mockProgressButton = document.createElement('button');
  mockProgressButton.className = 'mock-progress-button';
  mockProgressButton.textContent = 'Advance Progress';

  // Track current progress
  let currentProgress = 0;

  // Add event listener to advance progress
  mockProgressButton.addEventListener('click', () => {
    if (currentProgress < steps.length) {
      // Set the current step to active (blue)
      steps[currentProgress].style.backgroundColor = 'dodgerblue';
      currentProgress++;
    } else {
      // Reset all steps to default color
      steps.forEach(step => {
        step.style.backgroundColor = 'aliceblue';
      });
      currentProgress = 0;
    }
  });

  // Append elements to container
  progressBarContainer.appendChild(progressBar);
  progressBarContainer.appendChild(mockProgressButton);

  // Add the progress bar to the document body
  document.body.appendChild(progressBarContainer);

  return progressBarContainer;
}

// Initialize the progress bar when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeProgressBar();
});