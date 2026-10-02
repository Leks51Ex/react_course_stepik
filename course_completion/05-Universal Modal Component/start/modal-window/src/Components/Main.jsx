import Button from "./Button";

export default function Main({ children, isModalOpen, openModal }) {
  return (
    <>
      <h1 className="title">Univarsal Modal component</h1>
      <Button click={openModal} variant={"button"}>
        Open Modal
      </Button>
      {isModalOpen && children}
    </>
  );
}
