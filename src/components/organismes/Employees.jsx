import ViewEmployees from "../../components/molecules/ViewEmployees";
import Header from "../../components/molecules/Header";
import Nav from "../../components/molecules/Nav";
import CardEmployee from "../../components/atoms/CardEmployee";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Employees() {
  return (
    <>
      <Header />
      <Nav /> <br />
      <Container>
        <CardEmployee />
        <ViewEmployees />
      </Container>
    </>
  );
}

export default Employees;
