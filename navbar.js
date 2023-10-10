document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('navSlider');
    let targetSectionId = null;
    slider.addEventListener('input', function() {
      const sectionIndex = parseInt(slider.value); 
      if (sectionIndex >= 0 && sectionIndex < 5){
        targetSectionId = "home";
      } else if (sectionIndex >= 5 && sectionIndex < 10) {
        targetSectionId = "about";
      }
      else if (sectionIndex >= 11 && sectionIndex < 16) {
        targetSectionId = "projects";
      }
      else if (sectionIndex >= 16) {
        targetSectionId = "contact";
      }
        const targetSection = document.getElementById(targetSectionId); 
  
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); 
      }
    });
  });