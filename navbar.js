document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('navSlider');
    let targetSectionId = null;
    slider.addEventListener('input', function() {
      const sectionIndex = parseInt(slider.value); // Get the slider value as an integer
      if (sectionIndex >= 0 && sectionIndex < 5){
        targetSectionId = "home";
      } else if (sectionIndex >= 5 && sectionIndex < 11) {
        targetSectionId = "about";
      }
      else if (sectionIndex >= 11 && sectionIndex < 16) {
        targetSectionId = "projects";
      }
      else if (sectionIndex >= 15) {
        targetSectionId = "contact";
      }
        const targetSection = document.getElementById(targetSectionId); // Get the section element
  
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
      }
    });
  });