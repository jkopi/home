import { stitches } from '../../config/stitches.config';
import Text from '../Text';

const ItemContainer = stitches.styled('div', {
  padding: '1em',
  width: '100%',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  '@bp3': {
    flexDirection: 'row'
  }
  // justifyContent: 'space-between',
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
  flexDirection: 'row',
});

const StyledDiv = stitches.styled('div', {
  width: '100%',
})

const testData = [
  {
    company: 'asdasd',
    title: 'foo',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, rem. Voluptates totam fuga perspiciatis laborum nisi omnis voluptatibus quo quaerat aspernatur, doloribus, quas facilis fugiat molestias autem? Fuga, vitae dolores.',
    startDate: '20-12-2022',
    endDate: '21-13-2025',
  },
  {
    company: 'asdasd',
    title: 'bar',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, rem. Voluptates totam fuga perspiciatis laborum nisi omnis voluptatibus quo quaerat aspernatur, doloribus, quas facilis fugiat molestias autem? Fuga, vitae dolores.',
    startDate: '20-12-2022',
    endDate: '21-13-2025',
  },
  {
    company: 'asdasd',
    title: 'baz',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, rem. Voluptates totam fuga perspiciatis laborum nisi omnis voluptatibus quo quaerat aspernatur, doloribus, quas facilis fugiat molestias autem? Fuga, vitae dolores.',
    startDate: '20-12-2022',
    endDate: '21-13-2025',
  },
];

export const ExperienceItem = () => {
  return (
    <ItemContainer>
      <TitleContainer>
        <Text as="h3">Work experience</Text>
      </TitleContainer>
      <ExperienceContainer>
        {testData.map((dat, i) => (
          <Experience key={i}>
            <StyledDiv>
              <Text weight="bold">{dat.company}</Text>
              <Text>{dat.title}</Text>
              <Text>
                {dat.startDate} - {dat.endDate}
              </Text>
            </StyledDiv>
            <StyledDiv>
              <Text>{dat.desc}</Text>
            </StyledDiv>
          </Experience>
        ))}
      </ExperienceContainer>
    </ItemContainer>
  );
};
