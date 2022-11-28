import type { NextPage } from 'next';
import { AboutMe } from '../../libs/about-me/about-me';
import { GlobalHead } from '../../libs/core/global-head/global-head';

const AboutMePage: NextPage = () => {
  return (
    <div>
      <GlobalHead
        title="About me"
        description="Page providing details about myself as a software engineer."
      />
      <AboutMe seeMoreVisible={false} />
    </div>
  );
};

export default AboutMePage;
