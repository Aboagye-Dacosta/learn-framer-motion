import Row from "../ui/Row";
import Spacer from "../ui/Spacer";

function Footer() {
  return (
    <div className="bg-slate-800 py-4 text-stone-200">
      <Row type="horizontal" items="center" justify="center">
        &copy; <span>Dacosta Aboagye Solomon</span>
      </Row>
      <Spacer height={2} />
      <Row type="horizontal" items="center" justify="center" id="badges">
        <a href="https://www.linkedin.com/in/solomon-aboagye-011776210/">
          <img
            src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn Badge"
          />
        </a>
        <a href="https://dacostasolomon-codeman.hashnode.dev">
          <img
            src="https://img.shields.io/badge/Hashnode-blue?style=for-the-badge&logo=hashnode&logoColor=white"
            alt="Hashnode Badge"
          />
        </a>
        <a href="https://twitter.com/CODE_COSTA">
          <img
            src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white"
            alt="Twitter Badge"
          />
        </a>
        <a href="https://github.com/Aboagye-Dacosta">
          <img
            src="https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github&logoColor=white"
            alt="Twitter Badge"
          />
        </a>
      </Row>
    </div>
  );
}

export default Footer;
