import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import components from '../../config/portabletext/index';
import { stitches } from '../../config/stitches.config';
import { TResume } from '../../pages/resume';
import Divider from '../Divider';
import Text from '../Text';

const ItemContainer = stitches.styled('div', {
  padding: '1em',
  width: '100%',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

const TitleContainer = stitches.styled('div', {
  width: '100%',
});

const ExperienceContainer = stitches.styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Experience = stitches.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '15px',
  marginBottom: '30px',
});

const DescriptionContainer = stitches.styled('div', {
  width: '100%',
  textDecorationColor: '$text',
});

const Span = stitches.styled('span', {
  marginLeft: '5px',
  fontStyle: 'italic',
  '&::before': {
    padding: '5px',
    content: '—',
  },
});

type Props = {
  experienceData: TResume[];
};

export const ResumeSection = ({ experienceData }: Props) => {
  return (
    <ItemContainer>
      <Text as="h1" size="h1">
        Jaakko Lankila
      </Text>
      <Text as="h2" size="h2" css={{ margin: '0' }}>
        Work experience
      </Text>
      <Divider />
      <ExperienceContainer>
        {experienceData.map((exp) => (
          <Experience key={exp._id}>
            <Text as="h3" size="h3" weight="bold" css={{ margin: '0' }}>
              {exp.role}
            </Text>
            <Text size="small">
              {exp.company}
              <Span>
                {exp.startDate} - {exp.endDate}
              </Span>
            </Text>
            <DescriptionContainer>
                <PortableText value={exp.description} components={components} onMissingComponent={false} />
            </DescriptionContainer>
          </Experience>
        ))}
      </ExperienceContainer>
    </ItemContainer>
  );
};
