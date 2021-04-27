import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;

  button {
    background-color: lightgrey;
    width: 300px;
    margin: auto;
  }

  .itemimg {
    max-height: 200px;
    max-width: 200px;
    object-fit: cover;
    margin: auto;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }

  .itemtitle {
    margin-top: 5px;
    text-align: center;
    font-size: 18px;
  }

  .itemwrapper {
    height: 300px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
  }

  .itemprice {
    text-align: center;
    font-weight: bold;
    color: darkgrey;
  }

  .itembtn {
    font-size: 15px;
  }

  .iteminner {
    margin: auto;
    width: 300px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;
