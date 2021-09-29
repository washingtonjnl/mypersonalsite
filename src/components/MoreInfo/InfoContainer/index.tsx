import { ReactNode } from 'react';

import { FaCheck, FaChevronRight } from 'react-icons/fa';
import { IconLinkProps } from '../../../IconLink';

import { Container, Title, ProjectsContent, TopicsContent } from './styles';

export interface ProjectInfoData {
  title: string;
  description: string;
  link: Omit<IconLinkProps, 'text'>;
}

export interface TopicsInfoData {
  icon: ReactNode;
  text: string;
}

interface InfoContainerProps {
  type: 'topics' | 'projects';
  title: string;

  projects?: ProjectInfoData[];
  topics?: TopicsInfoData[];
}

function InfoContainer({ type, title, projects, topics }: InfoContainerProps) {
  switch (type) {
    case 'projects':
      return (
        <Container>
          <Title>{title}</Title>
          <ProjectsContent>
            {projects.map((project, key) => (
              <a
                key={key}
                target={project.link.type === 'external' && '_blank'}
                href={project.link.href}
              >
                <div>
                  <p>{project.title}</p>
                  <label>{project.description}</label>
                </div>
                <FaChevronRight size="0.75rem" />
              </a>
            ))}
          </ProjectsContent>
        </Container>
      );
    case 'topics':
      return (
        <Container>
          <Title>{title}</Title>
          <TopicsContent>
            {topics.map((topic, key) => (
              <p key={key}>
                <FaCheck size="0.75rem" />
                {topic.text}
              </p>
            ))}
          </TopicsContent>
        </Container>
      );
  }
}

export default InfoContainer;
