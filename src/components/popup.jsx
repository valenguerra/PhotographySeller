import { Overlay } from "./overlay";
import { Card } from "./card";

export const Popup = ({ onClose, children }) => {
  return (
    <Overlay onClick={onClose}>
      <Card
        padding="18px 20px"
        dividerHeight="18px"
        width="88%"
        maxWidth="400px"
      >
        {children}
      </Card>
    </Overlay>
  );
};
