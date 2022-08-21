import type { NextPage } from 'next'
import { GlobalHead } from '../../libs/core/global-head/global-head'
import { ProjectsPage } from '../../libs/projects/projects'

const Projects: NextPage = () => {
    return (
      <div>
        <GlobalHead title='Projects' description='Projects I have worked on or am currently working on.' />
        <ProjectsPage />
        </div>
    )
  }
  
  export default Projects