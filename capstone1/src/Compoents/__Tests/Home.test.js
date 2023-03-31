import { screen, render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";

describe("Home Component", () => {
  it("checks whether Image is Present", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByAltText("First slide")).toBeInTheDocument();
  });
  it("checks whether Image is displayed", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByAltText("Second slide")).toBeInTheDocument();
  });

  it("checks whether Image is present", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByRole("img",{name:/Thrid slide/i})).toBeInTheDocument();
  });
  it("checks whether links are present", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    const element=userClick(jobs)
    expect(element).toBeInTheDocument('/jobs');
  });


});




