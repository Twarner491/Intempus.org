// Execute immediately
(function() {
    const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'slate' : 'default');
    document.documentElement.setAttribute('data-md-color-scheme', storedTheme);
    document.body?.setAttribute('data-md-color-scheme', storedTheme);
    
    // Mark theme as loaded
    requestAnimationFrame(() => {
        document.documentElement.classList.add('theme-loaded');
    });
})(); 