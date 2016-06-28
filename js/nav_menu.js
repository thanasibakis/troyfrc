window.onload = function()
{
	var nav = document.getElementsByTagName("nav")[0];
	var navButton = document.getElementById("nav-button");
	
	var isShowing = false;
	
	function showNavMenu()
	{
		nav.style.maxWidth = "1000px";
		isShowing = true;
	}
	
	function hideNavMenu()
	{
		nav.style.maxWidth = "0px";
		isShowing = false;
	}
	
	function handleTouch()
	{
		if(isShowing)
			hideNavMenu();
		else
			showNavMenu();
	}
	
	//nav.onmouseenter = showNavMenu;
	//navButton.onmouseenter = showNavMenu;
	//nav.onmouseleave = hideNavMenu;
	//navButton.onmouseleave = hideNavMenu;
	//navButton.addEventListener('touchend', handleTouch, false);
	
	navButton.onclick = handleTouch;
}