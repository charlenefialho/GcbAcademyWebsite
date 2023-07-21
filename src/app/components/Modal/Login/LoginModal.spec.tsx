import React from "react";
import { render, screen,fireEvent, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginModal } from "./LoginModal";
import * as authService from "../../../../../utils/firebase/authService";

jest.mock("../../../../../utils/firebase/authService");

describe("LoginModal", () => {
  it("should render correctly", () => {
    const setLoginOpen = jest.fn();

    render(<LoginModal isLoginOpen={true} setLoginOpen={setLoginOpen} />);

    const titleModal = screen.getByTestId('titleModal');
    expect(titleModal).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText("E-mail");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText("Senha");
    expect(passwordInput).toBeInTheDocument();

    const loginButton = screen. getByRole("button", {name: 'Entrar'})
    expect(loginButton).toBeInTheDocument();
  });

  it("should call handleSubmitLogin and close modal on successful login", async () => {
    const setLoginOpen = jest.fn();
    
    const spyFn = jest.spyOn(authService, "login").mockImplementation()
    
    render(<LoginModal isLoginOpen={true} setLoginOpen={setLoginOpen} />);

    const emailInput = screen.getByPlaceholderText("E-mail");
    const passwordInput = screen.getByPlaceholderText("Senha");
    const loginButton = screen.getByRole("button", { name: "Entrar" });

    // Preenche os campos de login com credenciais válidas
    fireEvent.change(emailInput, { target: { value: "cha@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "12345678@" } });

    // Submete o formulário de login
    fireEvent.click(loginButton);

    // Aguarda a conclusão da autenticação
    await waitFor(() => expect(authService.login).toHaveBeenCalled());

    // Verifica se a função handleSubmitLogin foi chamada
    expect(authService.login).toHaveBeenCalledWith("cha@example.com", "12345678@");

    // Verifica se a função setLoginOpen foi chamada para fechar o modal
    expect(setLoginOpen).toHaveBeenCalled();
    
  });

  

  
});
