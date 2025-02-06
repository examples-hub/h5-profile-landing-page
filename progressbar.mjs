// progressbar.mjs - Progress bar component implementation

const TOTAL_STEPS = 7;
const DEFAULT_COLOR = 'aliceblue';
const ACTIVE_COLOR = 'dodgerblue';

let currentStep = 0;
let progressSteps = [];
let datetimeInterval = null;

// Create datetime display container
function createDatetimeContainer() {
    const container = document.createElement('div');
    container.id = 'datetime-display';
    container.className = 'datetime-container';
    return container;
}

// Create a single step element
function createStep(stepNumber) {
    const step = document.createElement('div');
    step.className = 'progress-step';
    step.style.backgroundColor = DEFAULT_COLOR;
    step.setAttribute('data-step', stepNumber);
    return step;
}

// Create connecting line between steps
function createConnector() {
    const connector = document.createElement('div');
    connector.className = 'step-connector';
    return connector;
}

// Update datetime display
function updateDateTime() {
    const datetimeDisplay = document.getElementById('datetime-display');
    if (datetimeDisplay) {
        const now = new Date();
        datetimeDisplay.textContent = now.toLocaleString();
    }
}

// Initialize progress bar container
function initializeProgressBar(container) {
    progressSteps = [];
    container.innerHTML = '';
    
    const datetimeContainer = createDatetimeContainer();
    container.appendChild(datetimeContainer);
    updateDateTime();

    for (let i = 0; i < TOTAL_STEPS; i++) {
        const step = createStep(i + 1);
        progressSteps.push(step);
        container.appendChild(step);
        
        if (i < TOTAL_STEPS - 1) {
            container.appendChild(createConnector());
        }
    }
}

// Update step colors based on current progress
function updateStepColors() {
    progressSteps.forEach((step, index) => {
        step.style.backgroundColor = index <= currentStep ? ACTIVE_COLOR : DEFAULT_COLOR;
    });
}

// Handle progress button click
function handleProgressClick() {
    if (currentStep < TOTAL_STEPS - 1) {
        currentStep++;
        updateStepColors();
    } else {
        currentStep = 0;
        updateStepColors();
    }
}

// Initialize progress bar functionality
export function initProgress() {
    const progressContainer = document.getElementById('progressBar');
    const progressButton = document.getElementById('mockProgress');

    if (!progressContainer || !progressButton) {
        console.error('Required elements not found in DOM');
        return;
    }

    initializeProgressBar(progressContainer);
    progressButton.addEventListener('click', handleProgressClick);
    
    // Start datetime update interval
    datetimeInterval = setInterval(updateDateTime, 1000);
}