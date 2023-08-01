// JavaScript code for interactive features

// Skills Assessment Modal
const startAssessmentButton = document.getElementById('start-assessment');
const assessmentModal = document.getElementById('assessment-modal');
const closeAssessmentModal = document.getElementById('close-modal');
const Submit = document.getElementById('submit-assessment')

startAssessmentButton.addEventListener('click', () => {
  assessmentModal.style.display = 'block';
});

closeAssessmentModal.addEventListener('click', () => {
  assessmentModal.style.display = 'none';
});

Submit.addEventListener('click',()=>{
    assessmentModal.style.display = 'none';
})

// Video Introductions Modal
const recordVideoButton = document.getElementById('record-video');
const videoModal = document.getElementById('video-modal');
const closeVideoModal = document.getElementById('close-video');
const Submit2 = document.getElementById('submit-video')

recordVideoButton.addEventListener('click', () => {
  videoModal.style.display = 'block';
});

closeVideoModal.addEventListener('click', () => {
  videoModal.style.display = 'none';
});
Submit2.addEventListener('click',()=>{
    videoModal.style.display = 'none';
})

// Add JavaScript code here for assessment questions, video recording functionality, and form submissions.
// You can use external libraries for video recording and assessment, or implement your custom solution.
