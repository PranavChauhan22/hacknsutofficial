import social3 from "./social3.svg";
const object1 = { src: social3, href: "https://social3.club/" };

const goldarray = [object1];
const listitems = goldarray.map((index) => (
  <div class="logo-box griditem">
    <a href={index.href} target="_blank" rel="noreferrer">
      <img src={index.src} alt="logo" />
    </a>
  </div>
));
function Hiring() {
  return (
    <div class="gold">
      <div class="gold-grid">
        <div class="logo-box griditem">
          <a href={object1.href} target="_blank" rel="noreferrer">
            <img src={object1.src} alt="logo" />
          </a>
        </div>
      </div>
      <p class="gold-heading">Hiring Partner</p>
    </div>
  );
}

export default Hiring;



