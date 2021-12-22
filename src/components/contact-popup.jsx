import { Button } from "./button";
import { Divider } from "./divider";
import { Column, Row } from "./flex";
import { Popup } from "./popup";
import { Icon, icons } from "./icon";
import { Text } from "./text";
import Link from "next/link";

export const ContactPopup = ({ onClose, contactText }) => {
  const phoneNumber = 5492235689293;
  const whatsappLink = contactText
    ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${contactText}`
    : `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  const instagramLink = `https://www.instagram.com/aleguerra.photos/?hl=es-la`;
  const instagramLink2 = `https://www.instagram.com/aleguerra.photos.color/?hl=es-la`;

  return (
    <Popup onClose={onClose}>
      <Column gap='20px' mb='12px'>
        <Row alignItems='center'>
          <Text fontSize='3' fontWeight='medium' t='Contacto' style={{ flex: 1 }} />
          <Icon as={icons.close} onClick={onClose} style={{ cursor: "pointer" }} />
        </Row>
        <Divider />
        <Group name='Instagram'>
          <Link href={instagramLink} passHref={true}>
            <Button t='aleguerra.photos' bg='#fe3c75' left={<Icon as={icons.instagram} mr='8px' />} />
          </Link>
          <Link href={instagramLink2} passHref={true}>
            <Button t='aleguerra.photos.color' bg='#fe3c75' left={<Icon as={icons.instagram} mr='8px' />} />
          </Link>
        </Group>
        <Group name='WhatsApp'>
          <Link href={whatsappLink} passHref={true}>
            <Button t='+54 9 223 568-9393' bg='#49c857' left={<Icon as={icons.whatsapp} mr='8px' />} />
          </Link>
        </Group>
      </Column>
    </Popup>
  );
};

const Group = ({ name, children }) => {
  return (
    <Column gap='8px'>
      <Text fontSize='1' fontWeight='regular' t={name} />
      <Column gap='14px'>{children}</Column>
    </Column>
  );
};
