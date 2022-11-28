import type { NextPage } from 'next';
import { GlobalHead } from '../../../libs/core/global-head/global-head';
import { FortnitePage } from '../../../libs/projects/fortnite/fortnite';

const Projects: NextPage = () => {
  return (
    <div>
      <GlobalHead
        title="Fortnite"
        description="Basic stat tracker using Fortnite API."
      />
      <FortnitePage />
    </div>
  );
};

export default Projects;
