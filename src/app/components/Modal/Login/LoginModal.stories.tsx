import { Meta, StoryObj } from "@storybook/react";
import { LoginModal} from "./LoginModal";


export default {
  title: "Components/LoginModal",
  component: LoginModal,
} as Meta<LoginModal>;


export const Default: StoryObj<LoginModal>={
    args:{
        isLoginOpen: true,
    }
}