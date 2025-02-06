import React from 'react';
import styled from 'styled-components';

const link = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16342046.792536534!2d23.988109047588964!3d-0.316317207944227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1738678407316!5m2!1sen!2s';

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
  width: 98vw;  /* Full screen width */
  background: #f5f5f5;

`;

const MapContainer = styled.div`
  width: 50%;
  height: 50%;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Map = () => {
  return (
    <MapWrapper>
      <MapContainer>
        <StyledIframe
          src={link}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapContainer>
    </MapWrapper>
  );
};

export default Map;
