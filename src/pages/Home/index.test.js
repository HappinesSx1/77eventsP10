import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      // Utiliser une attente explicite pour le message de succès
      await waitFor(() => screen.findByText("Message envoyé !"), {
        timeout: 5000,
      });
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
  });
  it("a list a people is displayed", () => {
    // const names = [
    //   "Samira",
    //   "Jean-baptiste",
    //   "Alice",
    //   "Luís",
    //   "Christine",
    //   "Isabelle",
    // ];
    // render(<Page />);
    // names.forEach((name) => {
    //   expect(screen.getByText(name)).toBeInTheDocument();
    // });
  });
  it("a footer is displayed", () => {
    // const { getByTestId } = render(<Page />);
    // const footerElement = getByTestId('footer');
    // expect(footerElement).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement
  });
});
