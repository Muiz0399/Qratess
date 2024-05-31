document.addEventListener('DOMContentLoaded', function() {
    const filterOptions = document.querySelectorAll('.c-filter-bar__option');
  
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedCategory = option.textContent.trim();
            filterStories(selectedCategory);
        });
    });
  
    function filterStories(category) {
        const stories = document.querySelectorAll('.c-stories-card');
        
        stories.forEach(story => {
            const label = story.querySelector('.c-new-label').textContent.trim();
            if (label === category || category === "All Stories") {
                story.style.display = 'block';
            } else {
                story.style.display = 'none';
            }
        });
    }
  });


  var truncateText = function(element, lines) {
    var lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
    element.style.maxHeight = (lineHeight * lines) + 'px';
};

// info 

var truncateElements = document.querySelectorAll('.truncate');
truncateElements.forEach(function(element) {
    truncateText(element, 2); 
});



