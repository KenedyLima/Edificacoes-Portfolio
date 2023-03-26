import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-top: 1px solid #1d0d035e;
  padding: 3.6rem 3.6rem 0 3.6rem;
`;

export default function Footer() {
  return (
    <Container>
      <nav>
        <ul>
          <li>Social</li>
        </ul>
      </nav>
      <div id="copyright">&copy; 2023 - 2023 Kenedy Lima</div>
    </Container>
  );
}
