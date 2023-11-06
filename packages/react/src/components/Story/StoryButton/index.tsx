import { ComponentProps, ElementType } from "react";
import { StoryButtonContainer } from "./styles";
import { Avatar } from "../../Avatar";
import { AvatarImage } from "../../Avatar/styles";

export interface StoryButtonProps extends ComponentProps<typeof AvatarImage> {
  src: string;
}

export function StoryButton({ src }: StoryButtonProps) {
  return (
    <StoryButtonContainer>
      <Avatar src={src} />
    </StoryButtonContainer>
  )
}


StoryButton.displayName = 'StoryButton'