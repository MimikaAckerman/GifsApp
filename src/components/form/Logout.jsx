import React from "react";
import styled from "styled-components";

const Logout = () => {
  return (
    <>
      <ContainerLogout>
        <button type="button" className="btn cube cube-hover">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Logout 👋</div>
        </button>
      </ContainerLogout>
    </>
  );
};

export default Logout;

const ContainerLogout = styled.div`
  margin-top: 6.5rem;
  margin-left: 3rem;
`;
