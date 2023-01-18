import stickeryou from "./stickeryou.webp";
const object1 = { src: stickeryou, href: "https://www.stickeryou.com/" };

const goldarray = [object1];
const listitems = goldarray.map((index) => (
  <div class="logo-box griditem">
    <a href={index.href} target="_blank" rel="noreferrer">
      <img src={index.src} alt="logo" />
    </a>
  </div>
));
function Sticker() {
  return (
    <div class="gold">
      <div class="gold-grid">
        <div class="logo-box griditem">
          <a href={object1.href} target="_blank" rel="noreferrer">
            <img src={object1.src} alt="logo" />
          </a>
        </div>
      </div>
      <p class="gold-heading">Sticker Partner</p>
    </div>
  );
}

export default Sticker;
