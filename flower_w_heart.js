onload = () => {
    document.body.classList.remove("container");
    // Adjust flowers position
    const flowers = document.querySelector('.flowers');
    flowers.style.position = 'fixed';
    flowers.style.bottom = '10px';
    flowers.style.left = '50%';
    flowers.style.transform = 'translateX(-50%)';
    flowers.style.zIndex = '1'; // Ensure flowers are behind the text
  
    // Ensure text is at the bottom front
    const text = document.querySelector('h1');
    text.style.position = 'fixed';
    text.style.bottom = '10px';
    text.style.left = '50%';
    text.style.transform = 'translateX(-50%)';
    text.style.zIndex = '10000'; // Ensure text is in front
  };
  