import{render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test('Should load contact cotainer', () => {
     render(<Contact/>);
    const heading = screen.getByPlaceholderText("name");
    
    expect(heading).toBeInTheDocument();
});
