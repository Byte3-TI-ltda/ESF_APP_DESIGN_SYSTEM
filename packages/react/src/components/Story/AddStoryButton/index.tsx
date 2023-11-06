import { ComponentProps, ElementType } from "react";
import { AddStoryButtonContainer } from "./styles";
import { Plus } from 'phosphor-react'

export function AddStoryButton() {
  return (
    <AddStoryButtonContainer>
      <Plus size={15} weight="bold" />
    </AddStoryButtonContainer>
  )
}

export interface AddStoryButtonProps extends ComponentProps<typeof AddStoryButtonContainer> {
  as?: ElementType
}

AddStoryButton.displayName = 'AddStoryButton'