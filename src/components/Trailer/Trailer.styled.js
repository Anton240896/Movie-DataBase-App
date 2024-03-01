import styled from 'styled-components';

import { FaYoutube } from 'react-icons/fa';
import ReactModal from 'react-modal';

export const OverlayModal = styled(ReactModal)`
  position: relative;
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  margin-right: -50%;
  margin-left: 55px;
  transform: translate(-50%, -50%);
  padding: 0%;
  z-index: 1;
`;

export const ContTrailer = styled.div`
  position: relative;
  top: -2px;

  @media (max-width: 1220px) {
    margin-top: 0;
    margin-left: 0;
  }
`;

export const Frame = styled.iframe`
  margin-left: 420px;
  width: 50%;
  height: 500px;
  border: thick double var(--tmdbLightGreen);
  border-radius: 10px;

  @media (min-width: 100px) and (max-width: 767px) {
    margin-left: 250px;
    width: 35%;
  }

  @media (min-width: 768px) and (max-width: 1119px) {
    margin-left: 394px;
    width: 40%;
  }

  @media (min-width: 1220px) {
    margin-left: 440px;
  }

  &:focus {
    outline: none;
  }
`;

export const BtnTrailer = styled(FaYoutube)`
  cursor: pointer;
  color: var(--tmdbRed);
`;

export const NoTrailer = styled.p`
  position: absolute;
  left: 693px;
  top: -144px;
  color: var(--tmdbRed);
  font-size: 100px;
  font-family: 'Marck Script';

  @media (max-width: 1220px) {
    font-size: 50px;
    left: 495px;
  }
`;
