import Image from "next/image";
import styled from "styled-components";
import { layout, space } from "styled-system";

const emojis = {
  party: '1f973',
  man: '1f466-1f3fb',
  woman: '1f469-1f3fc',
  both: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb',
};

export const Emoji = ({ emoji, ...props }) => {
  const id = emojis[emoji];
  return (
    <Wrapper {...props}>
      <Image
        layout='fill'
        draggable='false'
        alt={`emoji ${emoji}`}
        src={`https://twemoji.maxcdn.com/v/13.1.0/72x72/${id}.png`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 1em;
  width: 1em;
  margin: auto 0;
  position: relative;

  ${space}
  ${layout}
`;