import Metvy from "./streamyard.png";
const object1 = { src: Metvy, href: "https://streamyard.com/" };
const platarray = [object1];
const listitems = platarray.map((index) => (
  <div class="logo-box griditem">
    <a href={index.href} target="_blank" rel="noreferrer">
      <img src={index.src} alt="logo" />
    </a>
  </div>
));
function Platform() {
  return (
    <div class="plat">
      <p class="plat-heading">Platform Partner</p>
      <div class="plat-grid">{listitems};</div>
    </div>
  );
}

export default Platform;
