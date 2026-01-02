import TextRotator from "./TextRotator";
import { portfolioConfig } from "@/config/portfolio.config";

const HeroTexts = () => {
  const nameParts = portfolioConfig.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[1];

  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>

      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl mt-6">
        {firstName}
        <br />
        <span className="text-7xl max-sm:text-5xl">.{lastName}</span>
      </h1>

      <TextRotator />
    </>
  );
};

export default HeroTexts;
