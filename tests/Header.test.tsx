import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";

import "@testing-library/jest-dom";
import { Socials } from "@/components/Socials";

const intersectionObserverMock = () => ({
  observe: () => null,
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("Hero", () => {
  it("Render header logo...", () => {
    render(<Header />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/assets/header/logo.svg"
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", "logo");
  });

  it("Render socials...", () => {
    render(<Socials />);

    expect(screen.getByTestId("social-youtube")).toBeInTheDocument();
    expect(screen.getByTestId("social-instagram")).toBeInTheDocument();
    expect(screen.getByTestId("social-spotify")).toBeInTheDocument();
    expect(screen.getByTestId("social-soundcloud")).toBeInTheDocument();
  });

  it("Render navigation menu...", () => {
    render(<Nav />);
    expect(screen.getByText("Home"));
    expect(screen.getByText("Tours"));
    expect(screen.getByText("Discography"));
    expect(screen.getByText("Contact"));
  });
});
