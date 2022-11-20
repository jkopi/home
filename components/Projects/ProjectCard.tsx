import { useEffect, useState } from 'react';
import { stitches } from '../../config/stitches.config';
import { TProject } from '../../pages/projects';
import Text from '../Text';
import { getYear } from 'date-fns';
import Span from '../Span';
import components from '../../config/portabletext';
import { PortableText } from '@portabletext/react';

type Props = {
  data: TProject;
};

const StyledCardContainer = stitches.styled('div', {
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '$bgSecondary'
});

const StyledCardBody = stitches.styled('div', {
  padding: '5px 0 20px 0',
});

const StyledCardFooter = stitches.styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px'
});

export const ProjectCard = ({ data }: Props) => {
  return (
    <StyledCardContainer>
      <Text>
        <Span type="badge">{getYear(new Date(data.date)) ?? '--'}</Span>
      </Text>
      <Text weight="semiBold">{data.name}</Text>
      <StyledCardBody>
        <PortableText value={data.description} components={components} onMissingComponent={false} />
      </StyledCardBody>
      <StyledCardFooter>
        {data.technologies.map((tech) => (
          <Span type="badge">
            {tech}
          </Span>
        ))}
      </StyledCardFooter>
    </StyledCardContainer>
  );
};
