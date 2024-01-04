import * as S from './styles';
import * as P from './protocols';

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TS, React, Next.js, Styled Components, Storybook, Jest, Eslint, Prettier & Husky',
}: P.Meta) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
