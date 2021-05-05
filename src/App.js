import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
  height: 2rem;
  width: 10rem;
  border-radius: 0.5rem;
  border: solid 0 transparent;

  :active {
    border: solid 0 transparent;
  }
`;

export default function App() {
  return (
    <div className="App">
      <StyledButton>Hello!</StyledButton>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
