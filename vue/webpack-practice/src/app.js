const components = () => {
  const hi = document.createElement("h1");
  hi.innerText = "Hello webpack!";

  return hi;
}
document.body.appendChild(components()); 