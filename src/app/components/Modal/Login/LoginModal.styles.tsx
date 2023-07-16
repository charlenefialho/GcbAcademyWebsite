import { styled } from "styled-components";


export const ModalContainer = styled.section`
display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  .modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  max-width: 400px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
}
`