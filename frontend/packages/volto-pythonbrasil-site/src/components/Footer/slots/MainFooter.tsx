import { Container } from '@plone/components';
import SlotRenderer from '@plone/volto/components/theme/SlotRenderer/SlotRenderer';

const MainFooter = ({ content }) => {
  return (
    <Container layout className="footer main">
      <SlotRenderer name="mainFooter" content={content} />
    </Container>
  );
};

export default MainFooter;
